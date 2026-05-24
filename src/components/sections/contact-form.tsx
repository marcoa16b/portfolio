"use client";

import { useState } from "react";
import { Button } from "../ui/button";

const WEBHOOK_URL = "https://n8n.nexgrow.dev/webhook/personal-portfolio";

interface ContactFormStrings {
  formName: string;
  formEmail: string;
  formMessage: string;
  formSubmit: string;
  formSending: string;
  formSuccess: string;
  formError: string;
}

function ContactForm({ strings }: { strings: ContactFormStrings }) {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
    };

    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed");

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-muted p-4 rounded-lg border border-primary/20 space-y-4"
    >
      <div>
        <label htmlFor="name" className="text-sm font-medium">
          {strings.formName}
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full mt-1 px-3 py-2 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
        />
      </div>
      <div>
        <label htmlFor="email" className="text-sm font-medium">
          {strings.formEmail}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full mt-1 px-3 py-2 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
        />
      </div>
      <div>
        <label htmlFor="message" className="text-sm font-medium">
          {strings.formMessage}
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="w-full mt-1 px-3 py-2 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
        />
      </div>

      {status === "success" && (
        <p className="text-green-600 dark:text-green-400 text-sm">
          {strings.formSuccess}
        </p>
      )}
      {status === "error" && (
        <p className="text-destructive text-sm">{strings.formError}</p>
      )}

      <Button type="submit" disabled={status === "sending"}>
        {status === "sending" ? strings.formSending : strings.formSubmit}
      </Button>
    </form>
  );
}

export default ContactForm;
