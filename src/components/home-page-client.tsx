"use client";

import Image from 'next/image';
import Link from 'next/link';
import { AnimatedIntro } from '@/components/animated-intro';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Palette, Server, Sparkles } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const accomplishments = [
  { title: 'US Alumni', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/U.S._Department_of_State_official_seal.svg/1200px-U.S._Department_of_State_official_seal.svg.png', description: 'Participated in the Youth Leadership Program with Algeria, sponsored by the U.S. Department of State.' },
  { title: 'UN Representative', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Logo_of_the_United_Nations.svg/1024px-Logo_of_the_United_Nations.svg.png', description: 'Served as a youth ambassador for Algeria at the United Nations, representing the nation in the DISEC committee.' },
  { title: 'NLP Certified', imageUrl: 'https://thesocietyofnlp.org/wp-content/uploads/2024/05/LogoSocietyNLP.png', description: 'Certified in Neuro-Linguistic Programming by co-creator Dr. Richard Bandler.' },
  { title: 'Robotics Winner', imageUrl: 'https://pbs.twimg.com/media/G2AP-_qXEAAhO2B.png', description: 'Won "Best Robot Design" at the FLL Robotics Competition in Qatar.' },
];

const features = [
    {
      icon: Code,
      title: 'Clean, Modern Code',
      description: 'I write high-quality, well-documented code using modern best practices, including React, Next.js, and TypeScript.',
    },
    {
      icon: Palette,
      title: 'Thoughtful UI/UX',
      description: 'I design and build user-friendly interfaces with a focus on aesthetics, accessibility, and intuitive navigation.',
    },
    {
      icon: Sparkles,
      title: 'AI Integration',
      description: 'I have experience integrating cutting-edge AI and machine learning models to create intelligent, data-driven applications.',
    },
    {
      icon: Server,
      title: 'Scalable Architecture',
      description: 'I build robust, scalable back-end systems with Node.js and modern databases, ensuring performance and reliability.',
    },
];

const projects = [
    {
      id: "project-group-frenchy",
      title: "Groupe Frenchy",
      description: "UI/UX Development for a corporate group.",
      imageUrl: PlaceHolderImages.find(p => p.id === 'project-corporate-site')?.imageUrl || '',
      link: "https://group-frenchy.com",
      imageHint: "corporate website"
    },
    {
      id: "project-e-commerce",
      title: "Khadidja's E-commerce",
      description: "A small-scale online retail platform.",
      imageUrl: PlaceHolderImages.find(p => p.id === 'project-ecommerce-site')?.imageUrl || '',
      link: "https://khadidjaa.vercel.app/",
      imageHint: "online store"
    },
    {
      id: "project-portfolio-editor",
      title: "Amine Editor Portfolio",
      description: "Portfolio for an independent video editor.",
      imageUrl: PlaceHolderImages.find(p => p.id === 'project-portfolio-site')?.imageUrl || '',
      link: "https://amine-editor.vercel.app",
      imageHint: "video editor portfolio"
    }
];

const galleryImages = PlaceHolderImages.filter(img => img.id.startsWith('gallery-'));
const projectSpotlightImages = PlaceHolderImages.filter(img => img.id.startsWith('project-'));

export function HomePageClient() {
  return (
    <>
      <AnimatedIntro />
      <div className="relative">
        <div 
          className="fixed inset-0 w-full h-screen text-white"
          style={{
              backgroundImage: `url('https://res.cloudinary.com/dof5da1cj/image/upload/v1759251142/0a86c7d3-db4b-4f0a-a79b-01d6a459d0f9_eucmg8.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 flex items-center justify-center h-full">
            <section id="hero" className="w-full text-center">
                <h1 className="text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl text-white">
                    Zakaria Alikhoudja
                </h1>
                <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-white px-4">
                    I build modern, user-friendly, and scalable web solutions. From sleek portfolios to AI-integrated platforms, my work combines clean code with thoughtful design to create meaningful digital experiences.
                </p>
            </section>
          </div>
        </div>

        <main 
          className="relative bg-background container mx-auto px-4 md:px-6 py-24" 
          style={{ marginTop: '100vh' }}
        >
            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-center">Key Accomplishments</CardTitle>
              </CardHeader>
              <CardContent>
                <section id="accomplishments" className="w-full">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {accomplishments.map((item) => (
                      <Card key={item.title} className="flex flex-col items-center justify-center text-center gap-4 p-6 transition-shadow duration-300 hover:shadow-lg border">
                        {item.imageUrl && (
                          <div className="flex-shrink-0">
                            <Image
                              src={item.imageUrl}
                              alt={`${item.title} logo`}
                              width={item.title === 'UN Representative' ? 200 : 120}
                              height={item.title === 'UN Representative' ? 200 : 120}
                              className="object-contain"
                            />
                          </div>
                        )}
                        <div>
                          <CardTitle className={`font-semibold mb-2 ${item.title === 'UN Representative' ? 'text-2xl' : 'text-xl'}`}>{item.title}</CardTitle>
                          <p className={`text-muted-foreground ${item.title === 'UN Representative' ? 'text-lg' : 'text-base'}`}>{item.description}</p>
                        </div>
                      </Card>
                    ))}
                  </div>
                </section>
              </CardContent>
            </Card>

            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-center">Features</CardTitle>
              </CardHeader>
              <CardContent>
                <section id="features" className="w-full">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature) => (
                      <Card key={feature.title} className="flex flex-col text-center items-center transition-shadow duration-300 hover:shadow-lg border">
                        <CardHeader>
                          <div className="flex justify-center items-center">
                            <feature.icon className="w-10 h-10 text-primary mb-4" />
                          </div>
                          <CardTitle>{feature.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground">{feature.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </section>
              </CardContent>
            </Card>
            
            <Card className="mb-12">
              <CardContent className="pt-6">
                <section id="ai-glasses-details" className="w-full">
                  <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
                      <div className="space-y-4">
                          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Project Spotlight: AI Glasses</h2>
                          <p className="text-lg text-muted-foreground">
                              This project explored wearable augmented intelligence, focusing on a voice-activated assistant to enhance daily life. We combined hardware prototyping, embedded systems, and machine learning to create a device that felt like an extension of one's own capabilities.
                          </p>
                      </div>
                      <Image
                          src={projectSpotlightImages.find(p => p.id === 'project-ai-glasses')?.imageUrl || ''}
                          alt="AI Glasses Project"
                          width={600}
                          height={400}
                          className="rounded-lg shadow-md"
                          data-ai-hint="AI glasses"
                      />
                  </div>
                </section>
              </CardContent>
            </Card>

            <Card className="mb-12">
              <CardContent className="pt-6">
                <section id="web-dev-details" className="w-full">
                  <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
                      <Image
                          src={projectSpotlightImages.find(p => p.id === 'project-web-dev')?.imageUrl || ''}
                          alt="Web Development Project"
                          width={600}
                          height={400}
                          className="rounded-lg shadow-md order-last md:order-first"
                          data-ai-hint="code laptop"
                      />
                      <div className="space-y-4">
                          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Expertise in Web Development</h2>
                          <p className="text-lg text-muted-foreground">
                              I specialize in full-stack development, with a strong command of React, Next.js, and Node.js. My philosophy is to build applications that are not just functional but also scalable, maintainable, and performant, with a commitment to quality and an eye for detail.
                          </p>
                      </div>
                  </div>
                </section>
              </CardContent>
            </Card>

            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-center">Selected Work</CardTitle>
              </CardHeader>
              <CardContent>
                <section id="projects" className="w-full">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map(project => (
                        <Link key={project.id} href={project.link} target="_blank" rel="noopener noreferrer" className="block group">
                            <Card className="h-full overflow-hidden transition-shadow duration-300 hover:shadow-lg border">
                                <CardHeader className="p-0">
                                    <Image
                                        src={project.imageUrl || ''}
                                        alt={project.title}
                                        width={600}
                                        height={400}
                                        className="w-full h-auto aspect-video object-cover"
                                        data-ai-hint={project.imageHint}
                                    />
                                </CardHeader>
                                <CardContent className="p-6">
                                    <CardTitle className="mb-2 text-lg font-semibold">{project.title}</CardTitle>
                                    <CardDescription>{project.description}</CardDescription>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                    </div>
                </section>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-center">Gallery</CardTitle>
              </CardHeader>
              <CardContent>
                <section id="gallery" className="w-full">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {galleryImages.map((image) => (
                        <div key={image.id} className="overflow-hidden rounded-lg group">
                            <Image
                            src={image.imageUrl}
                            alt={image.description}
                            width={600}
                            height={600}
                            className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-105"
                            data-ai-hint={image.imageHint}
                            />
                        </div>
                        ))}
                    </div>
                </section>
              </CardContent>
            </Card>
        </main>
      </div>
    </>
  );
}
