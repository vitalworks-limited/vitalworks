export const MAX_INQUIRY_BYTES = 12000;
export const allowedSubjects = new Set(['Software & platforms','Enterprise integration','Cloud & infrastructure','Data, analytics & AI','Cybersecurity & privacy','Managed services & advisory','Partnerships','Other inquiry']);
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const field = (value, limit) => typeof value === 'string' && value.trim().length <= limit ? value.trim() : null;
export function parseInquiry(raw) {
  if (Buffer.byteLength(raw, 'utf8') > MAX_INQUIRY_BYTES) return { error: 'Payload too large', status: 413 };
  let input;
  try { input = JSON.parse(raw); } catch { return { error: 'Invalid request', status: 400 }; }
  if (!input || Array.isArray(input) || typeof input !== 'object') return { error: 'Invalid request', status: 400 };
  if (typeof input.website === 'string' && input.website.trim()) return { spam: true };
  const name = field(input.name, 120);
  const email = field(input.email, 254);
  const organization = field(input.organization ?? '', 160);
  const subject = field(input.subject, 120);
  const message = field(input.message, 4000);
  if (!name || !email || !emailPattern.test(email) || organization === null || !subject || !allowedSubjects.has(subject) || !message || message.length < 20 || input.consent !== true) return { error: 'Invalid fields', status: 400 };
  return { value: { name, email, organization, subject, message, consent: true } };
}

export function isJsonContentType(value) {
 return typeof value === 'string' && /^application\/json(?:\s*;|\s*$)/i.test(value);
}
