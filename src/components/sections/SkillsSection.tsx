import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Users, Wrench } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

const skillCategories = [
  {
    title: "Technical Skills",
    icon: Code,
    color: "success",
    skills: ["Java", "HTML", "CSS", "AWS", "JavaScript", "React", "SQL", "Python"]
  },
  {
    title: "Soft Skills", 
    icon: Users,
    color: "primary",
    skills: ["Communication", "Teamwork", "Problem Solving", "Time Management", "Adaptability"]
  },
  {
    title: "Tools",
    icon: Wrench,
    color: "warning",
    skills: ["Git", "GitHub", "VS Code", "Canva"]
  }
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <div className="inline-block text-primary text-sm font-medium mb-3 tracking-widest uppercase border border-primary/20 rounded-full px-4 py-1 bg-primary/5">
            Skills & Technologies
          </div>
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-4">Technical Expertise</h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Technologies, tools, and soft skills I work with
          </p>
        </ScrollReveal>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            
            return (
              <ScrollReveal 
                key={category.title}
                delay={index * 0.1}
              >
                <Card className="group glass-card overflow-hidden h-full">
                <CardHeader className="pb-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/15 p-3 rounded-xl group-hover:bg-primary/25 transition-all duration-300 ring-1 ring-primary/20 group-hover:ring-primary/40 group-hover:shadow-[0_0_15px_rgba(59,91,197,0.15)]">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge 
                        key={skill}
                        variant="outline" 
                        className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 hover:border-primary/40 transition-all duration-300 ring-1 ring-primary/10 hover:ring-primary/30"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                </Card>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}