import { readable, writable } from "svelte/store";

export const turnstileSolved = writable(true);
export const turnstileCreated = writable(false);
export const turnstileEnabled = readable(false);

