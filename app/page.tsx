'use client';

import { Button } from '@/lib';

export default function Home() {
  return (
    <main>
      <h1>Peerdb Cloud Template, Home</h1>
      <Button onClick={() => alert('Hello world')}>Test button</Button>
    </main>
  );
}
