'use client';

import Image from 'next/image';
import {
  Briefcase,
  GraduationCap,
  Mail,
  Phone,
  Linkedin,
  MapPin,
  Award,
  BookOpen,
  Cpu,
  Languages,
  Lightbulb,
  Bot,
  Leaf,
  Glasses,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import React from 'react';

const professionalExperience = [
  {
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/U.S._Department_of_State_official_seal.svg/1200px-U.S._Department_of_State_official_seal.svg.png',
    title: 'YLPA',
    company: 'United States Department of State',
    date: '2024',
    description: [
      'Selected among top young leaders to represent Algeria in an international leadership program funded by the U.S. Department of State.',
      'Engaged in exchanges regarding leadership, citizenship, and diplomacy with youths from various countries.',
      'Developed skills in negotiation, communication, and managing high-impact social projects.',
    ],
  },
  {
    logoUrl: 'https://res.cloudinary.com/dof5da1cj/image/upload/v1769730226/1024px-Logo_of_the_United_Nations_uga2m7.webp',
    title: 'Distinguished Delegate',
    company: 'Istanbul International Model United Nations',
    date: '2025',
    description: [
      'Represented Algeria on the DISEC committee during an international conference in Istanbul.',
      'Awarded the Outstanding Delegate prize for exceptional skills in diplomacy and conflict resolution.',
      'Demonstrated an analytical mindset, persuasive communication, and understanding of global issues.',
    ],
  },
  {
    logoUrl: 'https://pbs.twimg.com/media/G2AP-_qXEAAhO2B.png',
    title: 'Head of Robotics Team',
    company: 'International Robotics Competition (Qatar)',
    date: '2023',
    description: [
      'Led a 12-person team that won the Best Robot Design award at an international competition organized by the Qatari Ministry of Education and Higher Education.',
      'Supervised the design, coding, and optimization of the robot for top-level performance.',
      'Managed the entire project, partnerships, and technical strategy.',
    ],
  },
  {
    icon: Glasses,
    title: 'Founder & Developer',
    company: 'Project Vision Guard',
    date: '2024-2025',
    description: [
      'Designed AI-powered smart glasses for visually impaired people.',
      'Tech Stack: Integrated ultrasonic sensors, Google Maps, and an object recognition system.',
      'Collaborated with experts and users to improve device accuracy and ergonomics.',
    ],
  },
  {
    icon: Bot,
    title: 'Mechanical Specialist',
    company: 'FGC Team Algeria',
    date: '2025',
    description: [
      'Member of the FGC team specializing in designing multiple mechanisms for the competition robot.',
      'Participating in the FGC 2025 international competition in Panama, sponsored by World Learning Algeria.',
    ],
  },
  {
    icon: Leaf,
    title: 'Creator of ARTH Intelligent Plant System',
    company: 'Personal Project',
    date: '2025',
    description: [
      'Developed an intelligent IoT system to monitor light, humidity, and temperature, connected to an interactive mobile application.',
      'Integrated an AI chatbot and image recognition tool to diagnose plant health and recommend care.',
    ],
  },
];

const education = [
  {
    institution: 'Lycée du 1er Novembre 1954 - Algérie',
    degree: 'High School Diploma, Mathematics Speciality',
    date: 'Exp. June 2026',
  },
  {
    institution: 'University of Nevada, Reno - USA',
    degree: 'Intensive training in Leadership-Entrepreneurship',
    date: '2024',
  },
  {
    institution: 'Gomycode International',
    degree: 'Formation in Web Development and Cyber Security',
    date: 'Ongoing',
  },
  {
    institution: 'MITxPRO',
    degree: 'Negotiation Course',
    date: '2024 (7 months)',
  },
];

const skills = {
  'Neuro-Linguistic Programming': ['Level 1 Coach, Certified by Dr. Richard Bandler'],
  Programming: ['Arduino', 'Python', 'JavaScript', 'HTML/CSS'],
  'Soft Skills': ['Problem-solving', 'Analytical thinking', 'Entrepreneurship', 'Digital Sales'],
  Other: ['NASA Space Apps Challenge Participant'],
};

const languages = [
  { lang: 'Arabic', level: 'Native' },
  { lang: 'French', level: 'Native' },
  { lang: 'English', level: 'Fluent (IELTS: 7.5)' },
  { lang: 'Russian', level: 'Beginner' },
];

const certifications = [
  'Gomycode: Web Dev Certified & Cyber Security Certified',
  'Youth Leadership Program: U.S. Department of State (2024)',
  'Awards: Outstanding Delegate United Nations & Qatar Best Robot Design 2023',
  'Ambassadorship: HundrED Youth Ambassador',
];

export function KnowMoreClient() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto py-16 px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <aside className="lg:col-span-1 space-y-8">
            {/* Contact Card */}
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Avatar className="h-20 w-20">
                    <AvatarImage src="https://res.cloudinary.com/dof5da1cj/image/upload/v1759076666/1738621211903_mdqxia.jpg" alt="Zakaria Alikhoudja" />
                    <AvatarFallback>ZA</AvatarFallback>
                  </Avatar>
                  <div>
                    <h1 className="text-2xl font-bold">Alikhoudja Zakaria</h1>
                    <p className="text-muted-foreground">Innovator & Developer</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <a href="mailto:alikhoudjazakariia@gmail.com" className="flex items-center gap-3 hover:text-primary">
                  <Mail className="h-4 w-4" />
                  <span>alikhoudjazakariia@gmail.com</span>
                </a>
                <a href="tel:+213656243117" className="flex items-center gap-3 hover:text-primary">
                  <Phone className="h-4 w-4" />
                  <span>+213 656 24 31 17</span>
                </a>
                 <a href="https://www.linkedin.com/in/alikhoudja-zakaria-668a73322" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-primary">
                  <Linkedin className="h-4 w-4" />
                  <span>LinkedIn Profile</span>
                </a>
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4" />
                  <span>03000-Laghouat-Algeria</span>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><GraduationCap /> Education</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {education.map((edu, i) => (
                  <div key={i}>
                    <p className="font-semibold">{edu.institution}</p>
                    <p className="text-sm text-muted-foreground">{edu.degree}</p>
                    <p className="text-xs text-muted-foreground">{edu.date}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Cpu /> Skills</CardTitle>
              </CardHeader>
              <CardContent>
                {Object.entries(skills).map(([category, skillList]) => (
                    <div key={category} className="mb-4">
                        <h4 className="font-semibold mb-2">{category}</h4>
                        <div className="flex flex-wrap gap-2">
                        {skillList.map((skill) => <Badge key={skill} variant="secondary">{skill}</Badge>)}
                        </div>
                    </div>
                ))}
              </CardContent>
            </Card>

             <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Languages /> Languages</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {languages.map((lang, i) => (
                  <div key={i} className="flex justify-between items-center text-sm">
                    <span>{lang.lang}</span>
                    <span className="text-muted-foreground">{lang.level}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Award /> Certifications & Awards</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                {certifications.map((cert, i) => (
                    <p key={i} className="text-muted-foreground">&#8226; {cert}</p>
                ))}
              </CardContent>
            </Card>
          </aside>

          <main className="lg:col-span-3 space-y-8">
             <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Lightbulb /> Profile</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>A 17-year-old innovator driven to create solutions with real impact. Designed smart glasses for the visually impaired, led a robotics team to international victory, and represented Algeria at the United Nations.</p>
                <p>My journey combines science, technology, creativity, and empathy, proving age does not define vision. Guided by curiosity, purpose, and the belief that technology must serve humanity.</p>
              </CardContent>
            </Card>
          
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Briefcase /> Professional Experience</CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                {professionalExperience.map((exp, i) => (
                  <div key={i} className="flex gap-6">
                     <Avatar className="h-12 w-12 flex-shrink-0">
                      {exp.logoUrl && <AvatarImage src={exp.logoUrl} alt={`${exp.company} logo`} />}
                      <AvatarFallback>
                        {exp.icon ? React.createElement(exp.icon) : exp.company.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-lg font-semibold">{exp.title}</h3>
                      <p className="text-muted-foreground">{exp.company} &bull; {exp.date}</p>
                      <ul className="mt-2 list-disc list-inside text-sm text-muted-foreground space-y-1">
                        {exp.description.map((item, j) => <li key={j}>{item}</li>)}
                      </ul>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </main>
        </div>
      </div>
    </div>
  );
}
