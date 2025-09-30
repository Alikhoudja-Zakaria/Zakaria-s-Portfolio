"use client";
import { Mail, Phone, Instagram, Linkedin as LinkedinIcon } from 'lucide-react';
import { useState, useEffect } from 'react';

const contactInfo = [
    {
        icon: Phone,
        text: '+213 656 24 3117',
        href: 'tel:+213656243117',
        ariaLabel: 'Call Zakaria Alikhoudja',
    },
    {
        icon: Mail,
        text: 'alikhoudjazakariia@gmail.com',
        href: 'mailto:alikhoudjazakariia@gmail.com',
        ariaLabel: 'Email Zakaria Alikhoudja',
    },
    {
        icon: Instagram,
        text: '@alikhoudja_zakaria',
        href: 'https://www.instagram.com/alikhoudja_zakaria',
        ariaLabel: 'Visit Zakaria Alikhoudja on Instagram',
    },
    {
        icon: LinkedinIcon,
        text: 'Zakaria Alikhoudja',
        href: 'https://www.linkedin.com/in/alikhoudja-zakaria-668a73322',
        ariaLabel: 'Visit Zakaria Alikhoudja on LinkedIn',
    },
];

export function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);
  
  return (
    <footer id="contact" className="w-full py-12 border-t mt-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8">
            Get in Touch
          </h2>
          <div className="space-y-4">
            {contactInfo.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.ariaLabel}
                className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary text-lg"
              >
                <item.icon className="h-6 w-6" />
                <span>{item.text}</span>
              </a>
            ))}
          </div>
          <p className="mt-12 text-sm text-muted-foreground">
            © {year} Zakaria Alikhoudja. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
