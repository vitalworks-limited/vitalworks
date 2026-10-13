export const MAX_INQUIRY_BYTES: number;
export const allowedSubjects: Set<string>;
export type ValidInquiry = {
 name: string; email: string; organization: string; subject: string;
 message: string; consent: true;
};
export type InquiryResult =
 | { value: ValidInquiry; error?: never; status?: never; spam?: never }
 | { error: string; status: number; value?: never; spam?: never }
 | { spam: true; value?: never; error?: never; status?: never };
export function parseInquiry(raw: string): InquiryResult;

export function isJsonContentType(value: string | null | undefined): boolean;
