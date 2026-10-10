import { env } from 'cloudflare:workers';
export function db(){if(!env.DB)throw Error('Saved editions are temporarily unavailable. Please try again.');return env.DB;}
export function bucket(){if(!env.BUCKET)throw Error('Illustration storage is temporarily unavailable.');return env.BUCKET;}
export function secret(name:string){return String((env as unknown as Record<string,unknown>)[name]||process.env[name]||'');}
