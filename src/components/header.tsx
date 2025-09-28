import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

const NavLinks = ({ inSheet = false }: { inSheet?: boolean }) => (
    <div className={inSheet ? 'flex flex-col space-y-4' : 'flex items-center space-x-6'}>
        <Link href="#accomplishments" className="text-sm font-medium hover:underline underline-offset-4">Accomplishments</Link>
        <Link href="#projects" className="text-sm font-medium hover:underline underline-offset-4">Projects</Link>
        <Link href="#gallery" className="text-sm font-medium hover:underline underline-offset-4">Gallery</Link>
        <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4">Contact</Link>
    </div>
);

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold font-headline text-lg">Zakaria Alikhoudja</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <NavLinks />
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-4">
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="md:hidden">
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">Toggle Menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left">
                    <div className="flex flex-col p-4">
                        <Link href="/" className="font-bold font-headline text-lg mb-4">Zakaria Alikhoudja</Link>
                        <NavLinks inSheet={true} />
                    </div>
                </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
}
