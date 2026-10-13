import 'server-only';
import { canPublish } from './publication.mjs';

export const publicationReady = canPublish({
  NEXT_PUBLIC_SITE_PUBLISHED: process.env.NEXT_PUBLIC_SITE_PUBLISHED,
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
});
