import { copy } from "https://deno.land/std@0.106.0/fs/mod.ts";

await copy('source.txt', 'destination.txt');
console.log('File copied successfully!');
