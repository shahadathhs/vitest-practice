export async function FetchData() {
  const response = await fetch(
    'http://exploringvue.com/.netlify/functions/pizzas'
  );
  const data = await response.json();
  return data;
}