import sharp from 'sharp'
import { BlocksFeature, CodeBlock, lexicalEditor } from '@payloadcms/richtext-lexical'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { buildConfig } from 'payload'
import { s3Storage } from '@payloadcms/storage-s3'
import Media from '@/collections/media'
import { Projects } from '@/collections/projects'
import { Settings } from '@/globals/Settings'

export default buildConfig({
  // If you'd like to use Rich Text, pass your editor here
  editor: lexicalEditor({
    features: ({ defaultFeatures }) => [
      ...defaultFeatures,
      BlocksFeature({ blocks: [CodeBlock()] }),
    ],
  }),

  localization: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
    fallback: true
  },


  // Define and configure your collections in this array
  collections: [
    Projects,
    Media,
  ],

  globals: [
    Settings,
  ],

  // Your Payload secret - should be a complex and secure string, unguessable
  secret: process.env.PAYLOAD_SECRET || '',
  // Whichever Database Adapter you're using should go here
  // Mongoose is shown as an example, but you can also use Postgres
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || '',
    },
  }),
  // If you want to resize images, crop, set focal point, etc.
  // make sure to install it and pass it to the config.
  // This is optional - if you don't need to do these things,
  // you don't need it!
  sharp,

  plugins: [
    s3Storage({
      enabled: Boolean(process.env.R2_ACCESS_KEY_ID),
      collections: {
        media: true,
      },
      bucket: process.env.R2_BUCKET || '',
      config: {
        credentials: {
          accessKeyId: process.env.R2_ACCESS_KEY_ID || '',
          secretAccessKey: process.env.R2_SECRET_ACCESS_KEY || '',
        },
        region: 'auto',
        endpoint: process.env.R2_ENDPOINT || '',
      },
    }),
  ],
})