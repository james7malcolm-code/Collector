export default async function Page() {
  const res = await fetch('https://snapchat.com', { cache: 'no-store' });
  // Use .text() instead of .json()
  const data = await res.text();

  // The 'data' variable now holds the raw HTML string
  return (
    <pre>{data}</pre>
  );
}