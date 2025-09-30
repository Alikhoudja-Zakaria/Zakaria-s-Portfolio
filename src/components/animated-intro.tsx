"use client";

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export function AnimatedIntro() {
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // Shorter duration

    const visibilityTimer = setTimeout(() => {
        setVisible(false);
    }, 2500); // Shorter duration

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
      <h1 className="text-4xl md:text-6xl font-semibold text-foreground animate-fade-in-out">
        Zakaria Alikhoudja
      </h1>
    </div>
  );
}

// Add this to tailwind.config.ts animation key
// 'fade-in-out': {
//   '0%, 100%': { opacity: '0' },
//   '50%': { opacity: '1' },
// },
// and this to keyframes
// 'fade-in-out': 'fade-in-out 2.5s ease-in-out forwards',
