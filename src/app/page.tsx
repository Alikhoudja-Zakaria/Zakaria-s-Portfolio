

import Image from 'next/image';
import Link from 'next/link';
import { AnimatedIntro } from '@/components/animated-intro';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bot, BrainCircuit, CodeXml, Glasses, ArrowRight, Server, Palette, Lock, Database, Code, ShieldCheck, Languages, GitBranch, TestTube, Search, Wind, BotMessageSquare, Sparkles, SlidersHorizontal, Settings, Monitor, PieChart, Mail, Accessibility, ToggleRight, Zap } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';


const accomplishments = [
  { title: 'US Alumni', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/U.S._Department_of_State_official_seal.svg/1200px-U.S._Department_of_State_official_seal.svg.png', description: 'Participated in the Youth Leadership Program with Algeria, sponsored by the U.S. Department of State, and now a member of the U.S. alumni network.' },
  { title: 'Representative', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Logo_of_the_United_Nations.svg/1024px-Logo_of_the_United_Nations.svg.png', description: 'Served as a youth ambassador for Algeria at the United Nations, representing the nation in the DISEC committee.' },
  { title: 'NLP Certification', icon: BrainCircuit, description: 'Certified as an NLP Coach in Neuro-Linguistic Programming by co-creator Dr. Richard Bandler.' },
  { title: 'Robotics', icon: Bot, description: 'Won the "Best Robot Design" prize at the FLL Robotics Competition in Qatar, awarded by the Ministry of Education.' },
  { title: 'AI Glasses', icon: Glasses, description: 'Developed innovative AI glasses to help disabled individuals identify and avoid environmental dangers.', seeMoreLink: '#ai-glasses-details' },
  { title: 'Web Development', icon: CodeXml, description: 'Certified Web Developer by GoMyCode and Google, specializing in building modern and scalable web solutions.', seeMoreLink: '#web-dev-details' },
];

const projects = [
    {
      id: "project-group-frenchy",
      title: "Groupe Frenchy",
      description: "Worked as UI/UX Dev with Groupe Frenchy.",
      imageUrl: "https://images.unsplash.com/photo-1559028006-448665bd7c20?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://group-frenchy.com",
      imageHint: "corporate website"
    },
    {
      id: "project-e-commerce",
      title: "Khadidja's E-commerce",
      description: "Worked on a small e-commerce website.",
      imageUrl: "https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://khadidjaa.vercel.app/",
      imageHint: "online store"
    },
    {
      id: "project-portfolio-editor",
      title: "Amine Editor Portfolio",
      description: "Worked on a portfolio for a small independent video editor.",
      imageUrl: "https://images.unsplash.com/photo-1626544827763-d516d7387d15?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://amine-editor.vercel.app",
      imageHint: "video editor portfolio"
    }
  ];

const DescriptionWithFlags = ({ text }: { text: string }) => {
    const flagMap: { [key: string]: string } = {
        'Algeria': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_Algeria.svg/20px-Flag_of_Algeria.svg.png',
        'U.S.': 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/20px-Flag_of_the_United_States.svg.png',
        'Qatar': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Qatar.svg/20px-Flag_of_Qatar.svg.png'
    };

    const renderText = (inputText: string) => {
        let elements: (string | JSX.Element)[] = [];
        let lastIndex = 0;

        const regex = new RegExp(Object.keys(flagMap).map(name => name.replace('.', '\\.')).join('|'), 'g');
        let match;

        while ((match = regex.exec(inputText)) !== null) {
            if (match.index > lastIndex) {
                elements.push(inputText.substring(lastIndex, match.index));
            }

            const country = match[0];
            elements.push(
                <span key={match.index} className="inline-flex items-center">
                    {country}
                    <Image src={flagMap[country]} alt={`${country} flag`} width={20} height={12} className="ml-1.5 inline-block" />
                </span>
            );

            lastIndex = match.index + country.length;
        }

        if (lastIndex < inputText.length) {
            elements.push(inputText.substring(lastIndex));
        }
        
        return <>{elements}</>;
    };

    return <p className="text-muted-foreground">{renderText(text)}</p>;
};

const featureCategories = [
    {
        title: "Core Technical Features",
        icon: Settings,
        features: [
            { icon: Monitor, title: "Responsive Design", description: "Works smoothly on desktop, tablet, and mobile." },
            { icon: Wind, title: "Fast Performance", description: "Optimized loading times (lazy loading, minification, caching)." },
            { icon: Lock, title: "Secure Authentication", description: "Email/password, social logins, JWT sessions." },
            { icon: Database, title: "Database Integration", description: "Real-time or dynamic data handling (Firebase, MongoDB, SQL)." },
            { icon: Code, title: "Scalable Architecture", description: "Clean code, modular components, reusable functions." },
        ]
    },
    {
        title: "User Experience (UX) Features",
        icon: Palette,
        features: [
            { icon: Sparkles, title: "Interactive UI", description: "Smooth animations, transitions, and hover effects." },
            { icon: ToggleRight, title: "Dark/Light Mode Toggle", description: "Personalization for users." },
            { icon: SlidersHorizontal, title: "Search & Filters", description: "Easy navigation of large content or product lists." },
            { icon: Accessibility, title: "Accessibility (A11Y)", description: "Screen reader support, color contrast, keyboard navigation." },
            { icon: Languages, title: "Multi-language Support", description: "Useful if targeting international users." },
        ]
    },
    {
        title: "Advanced/Show-off Features",
        icon: BotMessageSquare,
        features: [
            { icon: Bot, title: "AI Integrations", description: "Chatbots, recommendation systems, or AI-powered search." },
            { icon: Server, title: "API Integrations", description: "Maps, weather, payment gateways, or social feeds." },
            { icon: Zap, title: "Real-time Features", description: "Chat systems, notifications, live dashboards." },
            { icon: ShieldCheck, title: "CMS or Admin Panel", description: "Let non-devs manage content easily." },
            { icon: Wind, title: "Custom Animations/Scroll Effects", description: "Unique visuals that make your site feel premium." },
        ]
    },
    {
        title: "Professional Touch",
        icon: Search,
        features: [
            { icon: Search, title: "SEO Optimization", description: "Proper metadata, schema, fast indexing." },
            { icon: PieChart, title: "Analytics Integration", description: "Google Analytics, custom dashboards." },
            { icon: Mail, title: "Email Subscription & Contact Forms", description: "With validation and database storage." },
            { icon: GitBranch, title: "Version Control & CI/CD", description: "GitHub, Vercel, Netlify for deployment." },
            { icon: TestTube, title: "Testing & Error Handling", description: "Unit tests, error boundaries, fallback pages." },
        ]
    }
];

const galleryImages = PlaceHolderImages.filter(img => img.id.startsWith('gallery-'));
const projectSpotlightImages = PlaceHolderImages.filter(img => img.id.startsWith('project-'));


export default function Home() {
  return (
    <>
      <AnimatedIntro />
      <Header />
      <main>
        <section id="hero-content" className="w-full h-screen flex items-start pt-32 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="md:w-1/2 lg:w-2/3">
                    <div className="space-y-4 p-8 rounded-lg">
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline text-foreground">
                            Zakaria Alikhoudja
                        </h1>
                        <p className="text-lg text-muted-foreground">
                            I’m Zakaria Alikhoudja, a 17 years old Algerian, a certified web developer with a strong focus on building modern, user-friendly, and scalable web solutions. My work ranges from creating sleek portfolio websites to developing platforms that integrate AI, real-time features, and accessibility at their core. Beyond coding, I bring leadership and problem-solving experience from robotics, innovation projects, and international programs. My goal is to use technology to create tools that make a real impact and improve people’s lives.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <div className="bg-background">
            <section id="accomplishments" className="w-full py-12 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center font-headline mb-12">Key Accomplishments</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {accomplishments.map((item) => (
                    <Card key={item.title} className="flex flex-col transition-transform transform hover:-translate-y-2 hover:shadow-xl bg-card">
                    <CardHeader className="flex flex-row items-center gap-4">
                        {item.icon && <item.icon className="w-10 h-10 text-primary" />}
                        {item.imageUrl && (
                            <Image
                            src={item.imageUrl}
                            alt={`${item.title} logo`}
                            width={item.title === 'Representative' ? 80 : 40}
                            height={item.title === 'Representative' ? 80 : 40}
                            className="object-contain"
                            />
                        )}
                        <CardTitle className="font-headline">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <DescriptionWithFlags text={item.description} />
                    </CardContent>
                    {item.seeMoreLink && (
                        <CardFooter>
                        <Button asChild variant="link" className="text-primary group">
                            <Link href={item.seeMoreLink}>
                            See More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </Button>
                        </CardFooter>
                    )}
                    </Card>
                ))}
                </div>
            </div>
            </section>

            <section id="ai-glasses-details" className="w-full py-12 md:py-24 bg-card/50">
            <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
                <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline mb-4">Project Spotlight: AI Glasses</h2>
                <p className="text-lg text-muted-foreground">
                    The AI Glasses project was an exploration into the potential of wearable augmented intelligence. The goal was to create a non-intrusive, voice-activated assistant that could provide real-time information, manage tasks, and enhance daily life through a seamless interface. We focused on low-power processing, natural language understanding, and a minimalist heads-up display to create a device that felt like an extension of one's own capabilities, rather than a piece of technology. This project combined hardware prototyping, embedded systems programming, and machine learning model optimization.
                </p>
                </div>
                <Image
                    src={projectSpotlightImages.find(p => p.id === 'project-ai-glasses')?.imageUrl || ''}
                    alt="AI Glasses Project"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-2xl"
                    data-ai-hint="AI glasses"
                />
            </div>
            </section>

            <section id="web-dev-details" className="w-full py-12 md:py-24">
            <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
                    <Image
                    src={projectSpotlightImages.find(p => p.id === 'project-web-dev')?.imageUrl || ''}
                    alt="Web Development Project"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-2xl order-last md:order-first"
                    data-ai-hint="code laptop"
                />
                <div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline mb-4">Expertise in Web Development</h2>
                    <p className="text-lg text-muted-foreground">
                    My web development journey is driven by a passion for creating clean, efficient, and user-centric digital experiences. I specialize in the full stack, with a strong command of modern frameworks like React and Next.js for the front-end, and Node.js for the back-end. My philosophy is to build applications that are not just functional but also scalable, maintainable, and performant. From complex single-page applications to robust e-commerce platforms, I bring a commitment to quality and an eye for detail to every project.
                    </p>
                </div>
            </div>
            </section>

            <section id="features" className="w-full py-12 md:py-24 bg-card/50">
                <div className="container mx-auto px-4 md:px-6">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center font-headline mb-12">Features</h2>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {featureCategories.map((category) => (
                            <Card key={category.title} className="w-full transition-transform transform hover:-translate-y-2 hover:shadow-xl bg-card">
                                <CardHeader>
                                    <div className="flex items-center gap-4">
                                        <category.icon className="w-10 h-10 text-primary" />
                                        <CardTitle className="font-headline text-xl">{category.title}</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                                        {category.features.map(feature => (
                                            <div key={feature.title} className="flex items-start gap-4">
                                                <feature.icon className="w-6 h-6 text-primary/80 shrink-0 mt-1" />
                                                <div>
                                                    <h4 className="font-semibold">{feature.title}</h4>
                                                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <section id="projects" className="w-full py-12 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center font-headline mb-12">Projects</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map(project => (
                    <Link key={project.id} href={project.link} target="_blank" rel="noopener noreferrer" className="block overflow-hidden rounded-lg group">
                        <Card className="h-full overflow-hidden transition-shadow hover:shadow-xl bg-card">
                            <CardHeader className="p-0">
                            <Image
                                src={project.imageUrl}
                                alt={project.title}
                                width={600}
                                height={400}
                                className="w-full h-auto aspect-video object-cover transition-transform transform group-hover:scale-105"
                                data-ai-hint={project.imageHint}
                            />
                            </CardHeader>
                            <CardContent className="p-6">
                            <CardTitle className="font-headline mb-2">{project.title}</CardTitle>
                            <CardDescription>{project.description}</CardDescription>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
                </div>
            </div>
            </section>

            <section id="gallery" className="w-full py-12 md:py-24 bg-card/50">
                <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center font-headline mb-12">Gallery</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {galleryImages.map((image) => (
                    <div key={image.id} className="overflow-hidden rounded-lg shadow-lg group">
                        <Image
                        src={image.imageUrl}
                        alt={image.description}
                        width={600}
                        height={600}
                        className="w-full h-full object-cover transition-transform transform group-hover:scale-105"
                        data-ai-hint={image.imageHint}
                        />
                    </div>
                    ))}
                </div>
                </div>
            </section>

            <Footer />
        </div>
      </main>
    </>
  );
}

