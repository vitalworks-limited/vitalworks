import { isIP } from 'node:net';

function isForbiddenHostname(hostname) {
 const host = hostname.toLowerCase().replace(/^\[|\]$/g, '').replace(/\.$/, '');
 if (!host || host === 'localhost' || host.endsWith('.localhost') || host.endsWith('.local') || host.endsWith('.internal')) return true;
 if (isIP(host) === 6) return true;
 if (isIP(host) === 4) {
  const [a,b,c] = host.split('.').map(Number);
  return a===0 || a===10 || a===127 || a>=224 || a===169&&b===254 || a===172&&b>=16&&b<=31 || a===192&&b===168 || a===100&&b>=64&&b<=127 || a===192&&b===0 || a===198&&[18,19,51].includes(b) || a===203&&b===0&&c===113 || a===192&&b===88&&c===99;
 }
 return false;
}

export function validateWebhookDestination(rawUrl, allowedHost) {
 if (!rawUrl || !allowedHost || typeof rawUrl!=='string' || typeof allowedHost!=='string') return null;
 try {
  const url = new URL(rawUrl);
  const host = url.hostname.toLowerCase().replace(/\.$/,'');
  const approved = allowedHost.trim().toLowerCase().replace(/\.$/,'');
  if (url.protocol!=='https:' || url.username || url.password || url.port || url.hash || isForbiddenHostname(host) || isForbiddenHostname(approved) || host!==approved) return null;
  return url;
 } catch { return null; }
}
