import messages from '../i18n/messages/es.json';

type Messages = typeof messages;

declare global {
  interface IntlMessages extends Messages {}
}