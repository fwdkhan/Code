// fetchAPI.ts
const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
const jsonData = await response.json();
console.log('API response:', jsonData);