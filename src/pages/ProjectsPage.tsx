import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, CheckCircle, Clock } from "lucide-react";
import { projects } from "@/data/projects";

const ProjectsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">All Projects</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A comprehensive list of my engineered solutions and side projects.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => {
              const StatusIcon = project.status === "Completed" ? CheckCircle : Clock;
              
              return (
                <Card 
                  key={project.title}
                  className="group glass-card overflow-hidden animate-fade-in-up flex flex-col"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-full h-48 overflow-hidden relative">
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105 pointer-events-none select-none"
                      draggable="false"
                    />
                  </div>
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-xl transition-colors duration-300">
                        {project.title}
                      </CardTitle>
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
                    
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </CardHeader>

                  <CardContent className="space-y-5 flex-1 flex flex-col">
                    {/* Technologies */}
                    <div>
                      <h4 className="text-xs font-semibold mb-3 text-muted-foreground tracking-widest uppercase">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge 
                            key={tech}
                            variant="secondary"
                            className="bg-primary/5 text-primary hover:bg-primary/15 transition-all duration-300 ring-1 ring-primary/20 hover:ring-primary/40"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-2 mt-auto">
                      <Button 
                        size="sm" 
                        className="flex-1 bg-primary/15 hover:bg-primary text-primary hover:text-primary-foreground border border-primary/30 hover:border-primary transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,91,197,0.3)]"
                        onClick={() => window.open(project.github, "_blank")}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                      {project.demo !== "#" && (
                        <Button 
                          size="sm" 
                          className="flex-1 bg-transparent hover:bg-foreground/10 text-muted-foreground hover:text-foreground border border-border hover:border-foreground/30 transition-all duration-300"
                          onClick={() => window.open(project.demo, "_blank")}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </main>
      
      <footer className="bg-card border-t border-border/10 py-8 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2025 Vellure Lohith. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ProjectsPage;
