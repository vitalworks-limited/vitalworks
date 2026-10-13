export function isPublicSiteUrl(value) {
 try {
  const url = new URL(value);
  const hostname = url.hostname.toLowerCase();
  return url.protocol === 'https:' && hostname !== 'localhost' &&
   !hostname.endsWith('.example') && !hostname.endsWith('.test') &&
   !hostname.endsWith('.invalid') && !hostname.endsWith('.local') &&
   !hostname.endsWith('.internal') && !/^127\./.test(hostname) &&
   !/^10\./.test(hostname) && !/^192\.168\./.test(hostname);
 } catch { return false; }
}
