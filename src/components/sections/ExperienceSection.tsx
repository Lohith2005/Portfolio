import { Badge } from "@/components/ui/badge";
import { experiences } from "@/data/experience";
import { ScrollReveal } from "@/components/ScrollReveal";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 mb-4 ring-1 ring-primary/20">
            <span className="w-2 h-2 rounded-full bg-primary mr-2 animate-pulse"></span>
            Journey
          </Badge>
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-4 tracking-tight">Experience</h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Internships and open-source work where I've shipped real features.
          </p>
        </ScrollReveal>

        {/* Experience Timeline List */}
        <div className="max-w-4xl mx-auto relative">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <ScrollReveal 
                key={index}
                delay={index * 0.15}
                className="relative pl-8 md:pl-12"
              >
                {/* Timeline Line & Dot */}
                <div className="absolute left-0 top-0 bottom-[-2rem] w-px bg-border/50 group-last:bottom-0">
                  <div className="absolute left-[-4px] top-6 w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_10px_rgba(59,91,197,0.8)]"></div>
                </div>

                {/* Experience Card */}
                <div className="glass-panel rounded-2xl p-6 md:p-8 hover:bg-card/80 transition-colors duration-300">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                      <div className="text-primary font-medium">{exp.company}</div>
                    </div>
                    <div className="text-sm text-muted-foreground whitespace-nowrap">
                      {exp.duration}
                    </div>
                  </div>
                  
                  <ul className="space-y-3">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className="text-muted-foreground text-sm md:text-base flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-primary/60 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
