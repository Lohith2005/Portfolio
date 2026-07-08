import { Card, CardContent } from "@/components/ui/card";
import { User, Code, Award, TrendingUp } from "lucide-react";

const aboutCards = [
  {
    title: "Background & Passion",
    icon: User,
    content: `Currently in my final year of Computer Science, I specialize in front-end web 
    development and am proficient in Java. My passion lies in crafting intuitive 
    and engaging user interfaces, while continuously expanding my expertise in 
    cloud computing, particularly with AWS and Linux OS. With a hands-on 
    approach and a constant drive for learning, I believe in writing clean, efficient 
    code that solves real-world problems.`,
    gradient: "from-primary/10 to-primary-glow/10",
  },
  {
    title: "Technical Expertise",
    icon: Code,
    content: `Proficient in Java, JavaScript and MySQL with hands-on experience in cloud 
    platforms. From EC2 instances to Lambda functions, I love diving into AWS 
    services and understanding how they can solve real-world problems.`,
    skills: [
      "Java Development",
      "AWS Cloud Services", 
      "Web Technologies",
      "Database Design"
    ],
    gradient: "from-success/10 to-success/20",
  },
  {
    title: "Academic Excellence",
    icon: Award,
    content: `Pursuing BTech in Computer Science with a CGPA of 9.1/10. Active participant 
    in coding competitions and hackathons. Strong foundation in data structures, 
    algorithms, and software engineering principles.`,
    tags: [
      "Data Structures",
      "Algorithms", 
      "System Design",
      "Object Oriented Design"
    ],
    gradient: "from-success/10 to-warning/10",
  },
  {
    title: "What I'm Working On",
    icon: TrendingUp,
    content: `Currently focused on mastering Data Structures and Algorithms with Java, 
    while also preparing for AWS certification and contributing to open-source 
    projects. Always excited about learning new technologies and taking on 
    challenging coding problems.`,
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
          <div className="inline-block text-primary text-sm font-medium mb-3 tracking-widest uppercase border border-primary/20 rounded-full px-4 py-1 bg-primary/5">
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
                    <div className="bg-primary/15 p-3 rounded-xl mr-4 group-hover:bg-primary/25 transition-all duration-300 ring-1 ring-primary/20 group-hover:ring-primary/40 group-hover:shadow-[0_0_15px_rgba(59,91,197,0.15)]">
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
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium transition-all duration-300 hover:bg-primary/20 ring-1 ring-primary/20 hover:ring-primary/40"
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
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium transition-all duration-300 hover:bg-primary/20 ring-1 ring-primary/20 hover:ring-primary/40"
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