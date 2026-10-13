export function readBoundedBody(body: ReadableStream<Uint8Array> | null, maxBytes: number): Promise<{text:string;error?:never;status?:never}|{error:string;status:number;text?:never}>;
