

'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const NavLinks = ({ onLinkClick }: { onLinkClick?: () => void }) => (
    <>
        <Link href="#accomplishments" onClick={onLinkClick} className="text-muted-foreground hover:text-primary transition-colors">Accomplishments</Link>
        <Link href="#projects" onClick={onLinkClick} className="text-muted-foreground hover:text-primary transition-colors">Projects</Link>
        <Link href="#gallery" onClick={onLinkClick} className="text-muted-foreground hover:text-primary transition-colors">Gallery</Link>
        <Link href="#contact" onClick={onLinkClick} className="text-muted-foreground hover:text-primary transition-colors">Contact</Link>
    </>
);

export function Header() {
  const [isSheetOpen, setSheetOpen] = useState(false);

  return (
    <header className={cn(
        "sticky top-4 z-40 w-full transition-all duration-300"
    )}>
      <div className="container flex h-16 items-center bg-background/80 backdrop-blur-lg rounded-xl border shadow-sm">
        <div className="mr-auto flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold font-headline text-lg">Zakaria Alikhoudja</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <NavLinks />
        </nav>
        <div className="flex items-center justify-end md:hidden">
            <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">Toggle Menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="bg-background">
                    <div className="flex flex-col p-6">
                        <Link href="/" onClick={() => setSheetOpen(false)} className="font-bold font-headline text-lg mb-8">Zakaria Alikhoudja</Link>
                        <div className="flex flex-col gap-4 items-start text-lg">
                           <NavLinks onLinkClick={() => setSheetOpen(false)} />
                        </div>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
}
