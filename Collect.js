import React from 'react';

export default async function Page() {
  const res = await fetch('https://snapchat.com', { cache: 'no-store' });
  const rawHtml = await res.text();

  return (
    <div dangerouslySetInnerHTML={{ __html: rawHtml }} />
  );
}
