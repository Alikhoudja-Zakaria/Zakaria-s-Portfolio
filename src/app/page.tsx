
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
  { title: 'US Alumni', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/U.S._Department_of_State_official_seal.svg/1200px-U.S._Department_of_State_official_seal.svg.png', description: 'Participated in the Youth Leadership Program with Algeria 🇩🇿, sponsored by the U.S. 🇺🇸 Department of State, and now a member of the U.S. alumni network.' },
  { title: 'UN Representative', imageUrl: 'https://images.seeklogo.com/logo-png/14/1/united-nations-logo-png_seeklogo-145466.png', description: 'Served as a youth ambassador for Algeria 🇩🇿 at the United Nations, representing the nation in the DISEC committee.' },
  { title: 'NLP Certification', icon: BrainCircuit, description: 'Certified as an NLP Coach in Neuro-Linguistic Programming by co-creator Dr. Richard Bandler.' },
  { title: 'Robotics', icon: Bot, description: 'Won the "Best Robot Design" prize at the FLL Robotics Competition in Qatar 🇶🇦, awarded by the Ministry of Education.' },
  { title: 'AI Glasses', icon: Glasses, description: 'Developed innovative AI glasses to help disabled individuals identify and avoid environmental dangers.', seeMoreLink: '#ai-glasses-details' },
  { title: 'Web Development', icon: CodeXml, description: 'Certified Web Developer by GoMyCode and Google, specializing in building modern and scalable web solutions.', seeMoreLink: '#web-dev-details' },
];

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

const projects = PlaceHolderImages.filter(img => img.id.startsWith('project-'));
const galleryImages = PlaceHolderImages.filter(img => img.id.startsWith('gallery-'));

export default function Home() {
  return (
    <>
      <AnimatedIntro />
      <div className="flex min-h-screen flex-col bg-background" >
        <Header />
        <main className="flex-1">
        <section id="hero" className="w-full py-20 md:py-32 lg:py-40 bg-card text-card-foreground">
            <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline">
                  Zakaria Alikhoudja
                </h1>
                <p className="text-lg text-muted-foreground">
                  I’m Zakaria Alikhoudja, a 17 years old Algerian, a certified web developer with a strong focus on building modern, user-friendly, and scalable web solutions. My work ranges from creating sleek portfolio websites to developing platforms that integrate AI, real-time features, and accessibility at their core. Beyond coding, I bring leadership and problem-solving experience from robotics, innovation projects, and international programs. My goal is to use technology to create tools that make a real impact and improve people’s lives.
                </p>
              </div>
              <div className="flex justify-center">
                <Image
                  src="https://res.cloudinary.com/dof5da1cj/image/upload/v1759076666/1738621211903_mdqxia.jpg"
                  alt="Zakaria Alikhoudja"
                  width={400}
                  height={400}
                  className="rounded-full object-cover aspect-square shadow-2xl"
                  data-ai-hint="profile picture"
                />
              </div>
            </div>
          </section>

          <section id="accomplishments" className="w-full py-12 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center font-headline mb-12">Key Accomplishments</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {accomplishments.map((item) => (
                  <Card key={item.title} className="flex flex-col transition-transform transform hover:-translate-y-2 hover:shadow-xl bg-card">
                    <CardHeader className="flex flex-row items-center gap-4">
                      {item.icon && <item.icon className="w-10 h-10 text-primary" />}
                      {item.imageUrl && <Image src={item.imageUrl} alt={`${item.title} logo`} width={40} height={40} className="object-contain"/>}
                      <CardTitle className="font-headline">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p>{item.description}</p>
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

          <section id="ai-glasses-details" className="w-full py-12 md:py-24 bg-secondary text-secondary-foreground">
            <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline mb-4">Project Spotlight: AI Glasses</h2>
                <p className="text-lg text-muted-foreground">
                  The AI Glasses project was an exploration into the potential of wearable augmented intelligence. The goal was to create a non-intrusive, voice-activated assistant that could provide real-time information, manage tasks, and enhance daily life through a seamless interface. We focused on low-power processing, natural language understanding, and a minimalist heads-up display to create a device that felt like an extension of one's own capabilities, rather than a piece of technology. This project combined hardware prototyping, embedded systems programming, and machine learning model optimization.
                </p>
              </div>
              <Image
                  src={projects.find(p => p.id === 'project-ai-glasses')?.imageUrl || ''}
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
                    src={projects.find(p => p.id === 'project-web-dev')?.imageUrl || ''}
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

            <section id="features" className="w-full py-12 md:py-24 bg-secondary text-secondary-foreground">
                <div className="container mx-auto px-4 md:px-6">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center font-headline mb-12">Core Technical Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {featureCategories.map((category) => (
                            <Card key={category.title} className="flex flex-col bg-card text-card-foreground">
                                <CardHeader className="flex flex-row items-center gap-4">
                                    <category.icon className="w-10 h-10 text-primary" />
                                    <CardTitle className="font-headline">{category.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow space-y-4">
                                    {category.features.map(feature => (
                                        <div key={feature.title} className="flex items-start gap-4">
                                            <feature.icon className="w-6 h-6 text-accent shrink-0 mt-1" />
                                            <div>
                                                <h3 className="font-semibold">{feature.title}</h3>
                                                <p className="text-sm text-muted-foreground">{feature.description}</p>
                                            </div>
                                        </div>
                                    ))}
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
                  <Card key={project.id} className="overflow-hidden transition-shadow hover:shadow-xl bg-card">
                    <CardHeader className="p-0">
                      <Image
                        src={project.imageUrl}
                        alt={project.description}
                        width={600}
                        height={400}
                        className="w-full h-auto aspect-video object-cover"
                        data-ai-hint={project.imageHint}
                      />
                    </CardHeader>
                    <CardContent className="p-6">
                      <CardTitle className="font-headline mb-2 capitalize">{project.id.replace('project-', '').replace('-', ' ')}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <section id="gallery" className="w-full py-12 md:py-24 bg-secondary">
             <div className="container mx-auto px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center font-headline mb-12 text-secondary-foreground">Gallery</h2>
               <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                 {galleryImages.map((image) => (
                   <div key={image.id} className="overflow-hidden rounded-lg shadow-lg">
                     <Image
                       src={image.imageUrl}
                       alt={image.description}
                       width={600}
                       height={600}
                       className="w-full h-full object-cover transition-transform transform hover:scale-105"
                       data-ai-hint={image.imageHint}
                     />
                   </div>
                 ))}
               </div>
             </div>
          </section>

        </main>
        <Footer />
      </div>
    </>
  );
}

    
