import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, CheckCircle, Clock, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { projects } from "@/data/projects";
import { ScrollReveal } from "@/components/ScrollReveal";

export function ProjectsSection() {
  const navigate = useNavigate();
  const displayedProjects = projects.slice(0, 3);

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 -right-32 w-80 h-80 bg-primary/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/3 -left-32 w-80 h-80 bg-indigo-500/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <div className="inline-block text-primary text-xs font-semibold mb-3 tracking-wider uppercase border border-primary/10 rounded-full px-2.5 py-0.5 bg-primary/5">
            Portfolio
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Engineered solutions that combine technical excellence with user-centric design
          </p>
        </ScrollReveal>

        {/* Projects List */}
        <div className="space-y-16 max-w-6xl mx-auto">
          {displayedProjects.map((project, index) => {
            const StatusIcon = project.status === "Completed" ? CheckCircle : Clock;
            const isEven = index % 2 === 0;
            
            return (
              <ScrollReveal 
                key={project.title}
                delay={index * 0.1}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center group`}
              >
                {/* Image Side */}
                <div className="w-full lg:w-[45%] xl:w-1/2 rounded-2xl overflow-hidden glass-card border border-border shadow-md relative">
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105 pointer-events-none select-none"
                    draggable="false"
                  />
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-[55%] xl:w-1/2 space-y-6">
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold transition-colors duration-300">
                        {project.title}
                      </h3>
                      <Badge 
                        variant="outline"
                        className={`${
                          project.status === "Completed" 
                            ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/20" 
                            : "bg-amber-500/10 text-amber-400 border-amber-500/20"
                        } transition-colors duration-300 shrink-0`}
                      >
                        <StatusIcon className="w-3 h-3 mr-1" />
                        {project.status}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech}
                        variant="secondary"
                        className="bg-[#EEF2FF] dark:bg-primary/10 text-primary hover:bg-primary hover:text-white dark:hover:bg-primary/20 dark:hover:text-primary transition-all duration-300 border border-[#DCE5FF] dark:border-transparent px-3 py-1 rounded-full hover:-translate-y-0.5 cursor-default"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Key Features (Optional in this layout, but let's keep a short list if wanted, or omit to match image. The reference image doesn't show bullet features, just description and tech stack. We'll skip features for a cleaner look matching the image, but the data is there). */}

                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-4">
                    <Button 
                      variant="outline"
                      className="bg-white dark:bg-background/50 hover:bg-primary/5 text-foreground hover:text-primary border border-border hover:border-primary/40 font-medium transition-premium rounded-2xl"
                      onClick={() => window.open(project.github, "_blank")}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    {project.demo !== "#" && (
                      <Button 
                        className="bg-primary hover:bg-[#3F5AF4] text-primary-foreground font-medium transition-premium rounded-2xl shadow-md hover:shadow-card-hover hover:-translate-y-1"
                        onClick={() => window.open(project.demo, "_blank")}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Call to Action - Show More */}
        <ScrollReveal className="text-center mt-20" delay={0.3}>
          <Button 
            size="lg"
            onClick={() => navigate('/projects')}
            className="bg-primary hover:bg-[#3F5AF4] text-primary-foreground rounded-2xl px-8 transition-premium hover:shadow-card-hover hover:-translate-y-1 font-medium group shadow-md"
          >
            View All Projects
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
}