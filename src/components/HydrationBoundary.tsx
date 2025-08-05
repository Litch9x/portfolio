'use client';

import { useEffect, useState } from 'react';

export function HydrationBoundary({ children }: { children: React.ReactNode }) {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) return null;

  return <>{children}</>;
}
