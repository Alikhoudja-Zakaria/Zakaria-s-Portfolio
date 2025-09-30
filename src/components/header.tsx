
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { useState } from 'react';

const NavLinks = ({ onLinkClick }: { onLinkClick?: () => void }) => (
    <>
        <Link href="#accomplishments" onClick={onLinkClick} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Accomplishments</Link>
        <Link href="#projects" onClick={onLinkClick} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Projects</Link>
        <Link href="#gallery" onClick={onLinkClick} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Gallery</Link>
        <Link href="#contact" onClick={onLinkClick} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Contact</Link>
    </>
);

export function Header() {
  const [isSheetOpen, setSheetOpen] = useState(false);

  return (
    <header className="sticky top-4 z-40 w-full">
      <div className="container flex h-16 items-center justify-between bg-background/80 backdrop-blur-lg rounded-xl border shadow-sm">
        {/* Left Aligned: Name */}
        <div className="flex items-center">
          <Link href="/" className="font-bold font-headline text-lg">
            Zakaria Alikhoudja
          </Link>
        </div>

        {/* Center Aligned: Desktop Navigation */}
        <nav className="hidden md:flex flex-1 items-center justify-center gap-6">
            <NavLinks />
        </nav>

        {/* Right Aligned: Mobile Menu */}
        <div className="flex items-center md:hidden">
            <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">Toggle Menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="bg-background w-full max-w-xs">
                    <div className="flex flex-col p-6">
                        <Link href="/" onClick={() => setSheetOpen(false)} className="font-bold font-headline text-lg mb-8">
                          Zakaria Alikhoudja
                        </Link>
                        <div className="flex flex-col gap-6 items-start text-lg">
                           <NavLinks onLinkClick={() => setSheetOpen(false)} />
                        </div>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
        
        {/* A placeholder div to balance the flexbox on desktop when nav is centered */}
        <div className="hidden md:flex items-center" style={{ width: '0px' }}></div>
      </div>
    </header>
  );
}
