

'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const NavLinks = ({ inSheet = false }: { inSheet?: boolean }) => (
    <div className={cn('flex items-center gap-6 text-sm font-medium', inSheet && 'flex-col gap-4 items-start')}>
        <Link href="#accomplishments" className="hover:text-primary transition-colors">Accomplishments</Link>
        <Link href="#projects" className="hover:text-primary transition-colors">Projects</Link>
        <Link href="#gallery" className="hover:text-primary transition-colors">Gallery</Link>
        <Link href="#contact" className="hover:text-primary transition-colors">Contact</Link>
    </div>
);

export function Header() {
  return (
    <header className={cn(
        "sticky top-0 z-40 w-full border-b border-border/40 bg-background/95 backdrop-blur-sm"
    )}>
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold font-headline text-lg">Zakaria Alikhoudja</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center ml-auto">
            <NavLinks />
        </nav>
        <div className="flex flex-1 items-center justify-end md:hidden">
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">Toggle Menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="bg-background/95 backdrop-blur-sm">
                    <div className="flex flex-col p-4">
                        <Link href="/" className="font-bold font-headline text-lg mb-8">Zakaria Alikhoudja</Link>
                        <NavLinks inSheet={true} />
                    </div>
                </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
}
