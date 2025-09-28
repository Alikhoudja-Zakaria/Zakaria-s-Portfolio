"use client";

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export function AnimatedIntro() {
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    const visibilityTimer = setTimeout(() => {
        setVisible(false);
    }, 4000);

    return () => {
        clearTimeout(timer);
        clearTimeout(visibilityTimer);
    }
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div
      className={cn(
        'fixed inset-0 z-50 flex items-center justify-center bg-background transition-opacity duration-1000',
        !loading && 'opacity-0'
      )}
    >
      <h1 className="text-4xl md:text-6xl lg:text-8xl font-headline text-primary animate-zoom-in-fade-out">
        Zakaria Alikhoudja
      </h1>
    </div>
  );
}
