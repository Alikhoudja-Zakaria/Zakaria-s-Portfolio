
import Image from 'next/image';
import Link from 'next/link';
import { AnimatedIntro } from '@/components/animated-intro';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Award, Bot, BrainCircuit, CodeXml, Glasses, Globe, Smartphone, Zap, ArrowRight } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { PlaceHolderImages } from '@/lib/placeholder-images';

const accomplishments = [
  { title: 'US Alumni', icon: Award, description: 'Engaged with international leadership and cultural exchange programs.' },
  { title: 'UN Representative', icon: Globe, description: 'Represented youth voices on a global stage at the United Nations.' },
  { title: 'NLP Certification', icon: BrainCircuit, description: 'Certified expert in Natural Language Processing, bridging human-computer interaction.' },
  { title: 'Robotics', icon: Bot, description: 'Developed and programmed autonomous robots for various applications.' },
  { title: 'AI Glasses', icon: Glasses, description: 'Innovated a wearable AI device to assist with daily tasks.', seeMoreLink: '#ai-glasses-details' },
  { title: 'Web Development', icon: CodeXml, description: 'Built modern, responsive web applications with a focus on performance.', seeMoreLink: '#web-dev-details' },
];

const essentialFeatures = [
    { 
        icon: Smartphone, 
        title: 'Responsive Layout',
        description: 'My designs are fully responsive, ensuring a seamless experience across all devices, from mobile phones to desktop computers. I prioritize a mobile-first approach to guarantee accessibility and usability for everyone, everywhere.'
    },
    { 
        icon: Zap, 
        title: 'Fast Performance',
        description: 'Performance is not an afterthought; it\'s a core feature. By leveraging modern web technologies, optimizing assets, and employing efficient coding practices, I build websites that are not only beautiful but also incredibly fast and lightweight.'
    },
];

const projects = PlaceHolderImages.filter(img => img.id.startsWith('project-'));
const galleryImages = PlaceHolderImages.filter(img => img.id.startsWith('gallery-'));

export default function Home() {
  return (
    <>
      <AnimatedIntro />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <section id="hero" className="w-full py-20 md:py-32 lg:py-40 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4 md:px-6 text-center">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline">
                Innovator in AI, Robotics, and Web
              </h1>
              <p className="mx-auto max-w-[700px] text-primary-foreground/80 md:text-xl mt-4">
                Zakaria Alikhoudja. A passionate developer and leader shaping the future of technology.
              </p>
            </div>
          </section>

          <section id="accomplishments" className="w-full py-12 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center font-headline mb-12">Key Accomplishments</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {accomplishments.map((item) => (
                  <Card key={item.title} className="flex flex-col transition-transform transform hover:-translate-y-2 hover:shadow-xl bg-card">
                    <CardHeader className="flex flex-row items-center gap-4">
                      <item.icon className="w-10 h-10 text-accent" />
                      <CardTitle className="font-headline">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p>{item.description}</p>
                    </CardContent>
                    {item.seeMoreLink && (
                      <CardFooter>
                        <Button asChild variant="link" className="text-foreground/80 group hover:text-foreground">
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
                <p className="text-lg text-secondary-foreground/80">
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
            <div className="container mx-auto px-4 md:px-6 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline mb-12">Essential Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {essentialFeatures.map(feature => (
                    <Dialog key={feature.title}>
                        <DialogTrigger asChild>
                             <Card className="text-left cursor-pointer transition-transform transform hover:-translate-y-2 hover:shadow-xl bg-card">
                                <CardHeader className="flex flex-row items-center gap-4">
                                    <feature.icon className="w-10 h-10 text-accent" />
                                    <CardTitle className="font-headline">{feature.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground">Click to learn more about my approach to {feature.title.toLowerCase()}.</p>
                                </CardContent>
                            </Card>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle className="font-headline flex items-center gap-2"><feature.icon className="w-6 h-6" /> {feature.title}</DialogTitle>
                                <DialogDescription asChild>
                                    <p className="pt-4">{feature.description}</p>
                                </DialogDescription>
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>
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
