import Link from 'next/link';
import { Suspense } from 'react';
import { NavigationEvents } from './nabigation-events';

export const dynamic = 'force-dynamic';

export default function CacheLayout(props: { children: React.ReactNode }) {
  return (
    <section className="p-5">
      <nav className="flex items-center justify-center gap-10 text-blue-600 mb-6">
        <Link href="/about">About</Link>
        <Link href="/settings">Settings</Link>
      </nav>
      {props.children}
      <Suspense fallback={null}>
        <NavigationEvents />
      </Suspense>
    </section>
  );
}
