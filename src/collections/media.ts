import type { CollectionConfig } from 'payload';

const Media: CollectionConfig = {
  slug: 'media',
  labels: {
    singular: 'Media',
    plural: 'Media',
  },
  admin: {
    useAsTitle: 'alt',
    defaultColumns: ['alt', 'mimeType', 'createdAt'],
    group: 'Media',
  },
  access: {
    read: () => true,
  },
  upload: {
    staticDir: 'media',
    mimeTypes: ['image/*', 'application/pdf'],
    imageSizes: [
      { name: 'thumbnail', width: 400, height: 300, position: 'centre' },
      { name: 'small', width: 768, height: 576, position: 'centre' },
      { name: 'medium', width: 1024, height: 768, position: 'centre' },
      { name: 'large', width: 1920, height: 1080, position: 'centre' },
    ],
    crop: true,
    focalPoint: true,
    adminThumbnail: 'thumbnail',
    displayPreview: true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
};

export default Media;