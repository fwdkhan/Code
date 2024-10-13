// Request read permission
const status = await Deno.permissions.request({ name: "read", path: "./test.txt" });

if (status.state === "granted") {
  const data = await Deno.readTextFile('./test.txt');
  console.log('File content:', data);
  
  // Revoke permission after reading the file
  await Deno.permissions.revoke({ name: "read", path: "./test.txt" });
}
