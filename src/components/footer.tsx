import { Mail, Phone, Instagram, Linkedin as LinkedinIcon } from 'lucide-react';

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
  return (
    <footer id="contact" className="w-full py-12 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline mb-8">
            Get in Touch
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-2xl">
            {contactInfo.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.ariaLabel}
                className="flex items-center justify-center sm:justify-start gap-4 p-4 rounded-lg transition-colors hover:bg-card hover:text-card-foreground"
              >
                <item.icon className="h-6 w-6 text-accent" />
                <span className="font-medium">{item.text}</span>
              </a>
            ))}
          </div>
          <p className="mt-8 text-xs text-muted-foreground">
            © {new Date().getFullYear()} Zakaria Alikhoudja. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
