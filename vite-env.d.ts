/// <reference types="vite/client" />

declare module '*.png';
declare module '*.jpeg';
declare module '*.jpg';

interface ImportMetaEnv extends Readonly<Record<string, string>> {
  readonly VITE_HOSTNAME: string;
  readonly VITE_API_KEY: string;
  readonly VITE_IMAGE_URL: string;
  readonly VITE_API_URL: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
