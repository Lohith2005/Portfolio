import { Card, CardContent } from "@/components/ui/card";
import { User, Code, Award, TrendingUp, Target } from "lucide-react";

const aboutCards = [
  {
    title: "Background & Passion",
    icon: User,
    content: `I'm a B.Tech Computer Science graduate passionate about building modern full-stack web applications 
      and AI-powered solutions. Currently working as an Associate SAP BTP Technical Consultant, 
      I enjoy turning ideas into fast, scalable, and user-friendly digital experiences while continuously 
      exploring emerging technologies.`,
    gradient: "from-primary/10 to-primary-glow/10",
  },
  {
    title: "Technical Expertise",
    icon: Code,
    content: `I work with React, JavaScript, Java, Node.js, MySQL, AWS, 
      and Git to build responsive frontends, scalable backends, and AI-integrated applications.`,
    skills: [
      "Full-Stack Development",
      "Java & Node.js",
      "AWS Cloud Services",
      "AI API Integration",
      "Git & GitHub"
    ],
    gradient: "from-success/10 to-success/20",
  },
  {
    title: "Professional Focus",
    icon: Target,
    content: `Currently working as an Associate SAP BTP Technical Consultant, 
      with a strong focus on building scalable full-stack applications, AI-powered solutions, 
      and modern cloud-based software.`,
    tags: [
      "SAP BTP",
      "Full-Stack Development",
      "AI Applications",
      "Cloud Technologies"
    ],
    gradient: "from-success/10 to-warning/10",
  },
  {
    title: "What I'm Working On",
    icon: TrendingUp,
    content: `Currently developing enterprise applications on SAP BTP while building 
      AI-powered full-stack projects. I'm continuously exploring backend development, 
      scalable architectures, cloud technologies, and emerging AI frameworks to create 
      impactful software solutions.`,
    gradient: "from-warning/10 to-primary/10",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-[80px]"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-indigo-500/5 rounded-full blur-[80px]"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block text-primary text-xs font-semibold mb-3 tracking-wider uppercase border border-primary/10 rounded-full px-2.5 py-0.5 bg-primary/5">
            About Me
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Story & Vision</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Crafting innovative solutions through code and creativity
          </p>
        </div>

        {/* About Cards Grid */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 lg:gap-8">
          {aboutCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <Card
                key={card.title}
                className={`group glass-card overflow-hidden animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-7">
                  <div className="flex items-center mb-5">
                    <div className="bg-[#EEF2FF] dark:bg-primary/15 p-3 rounded-xl mr-4 group-hover:bg-primary/25 transition-premium border border-[#DCE5FF] dark:border-transparent group-hover:shadow-[0_0_15px_rgba(79,107,255,0.15)]">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{card.title}</h3>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-5">
                    {card.content}
                  </p>

                  {/* Skills tags */}
                  {card.skills && (
                    <div className="flex flex-wrap gap-2">
                      {card.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-[#EEF2FF] dark:bg-primary/10 text-primary rounded-full text-sm font-medium transition-premium hover:-translate-y-0.5 hover:bg-primary hover:text-white border border-[#DCE5FF] dark:border-transparent cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Tags */}
                  {card.tags && (
                    <div className="flex flex-wrap gap-2">
                      {card.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-[#EEF2FF] dark:bg-primary/10 text-primary rounded-full text-sm font-medium transition-premium hover:-translate-y-0.5 hover:bg-primary hover:text-white border border-[#DCE5FF] dark:border-transparent cursor-default"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}