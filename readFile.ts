// readFile.ts
const data = await Deno.readTextFile('./test.txt');
console.log('File content:', data);