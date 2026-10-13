export function isApprovedPublicationUrl(raw) {
 if (typeof raw !== 'string' || !raw) return false;
 try {
  const url = new URL(raw);
  const host = url.hostname.toLowerCase();
  if (url.protocol !== 'https:' || url.username || url.password || url.port || url.search || url.hash || url.pathname !== '/') return false;
  if (host === 'localhost' || host.endsWith('.localhost') || host.endsWith('.example') || !host.includes('.')) return false;
  return true;
 } catch { return false; }
}
export function canPublish(env) {
 return env.NEXT_PUBLIC_SITE_PUBLISHED === 'true' && isApprovedPublicationUrl(env.NEXT_PUBLIC_SITE_URL);
}
