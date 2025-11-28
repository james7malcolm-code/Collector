export default async function Page() {
  const res = await fetch("https://snapchat.com", {
    cache: "no-store"
  });

  const data = await res.HTML();

  return (
    <pre>{JSON.stringify(data, null, 2)}</pre>
  );
}
