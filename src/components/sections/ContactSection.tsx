import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, FileDown } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { ScrollReveal } from "@/components/ScrollReveal";

const socialLinks = [
  {
    name: "Email",
    icon: Mail,
    href: "mailto:vellurelohith1@gmail.com",
    username: "vellurelohith1@gmail.com",
    color: "primary",
    description: "Send me an email"
  },
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/lohith2005",
    username: "@lohith2005",
    color: "foreground",
    description: "Check out my code"
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/in/lohithvellure",
    username: "/in/lohithvellure",
    color: "primary",
    description: "Let's connect professionally"
  }
];

export function ContactSection() {
  const { toast } = useToast();

  return (
    <>
      {/* Resume Section */}
      <section id="resume" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <ScrollReveal>
              <div className="glass-card p-10 mb-8">
                <div className="w-16 h-16 bg-[#EEF2FF] dark:bg-primary/15 rounded-2xl border border-[#DCE5FF] dark:border-transparent flex items-center justify-center mx-auto mb-6 shadow-sm">
                  <FileDown className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3">Download My Resume</h3>
                <p className="text-muted-foreground text-base md:text-lg mb-8">
                  Get a comprehensive overview of my experience, skills, and achievements
                </p>
                <Button
                  size="lg"
                  className="bg-primary hover:bg-[#3F5AF4] text-primary-foreground rounded-2xl px-8 transition-premium shadow-md hover:shadow-card-hover hover:-translate-y-1 font-medium"
                  onClick={() => {
                    toast({
                      title: "Resume Loading",
                      description: "Resume is Loading!",
                    });
                    const resumeUrl = "https://drive.google.com/file/d/17B_YmPohsdS9capak5WYP0ZlFa26bZCN/view?usp=sharing";
                    const link = document.createElement("a");
                    link.href = resumeUrl;
                    link.download = "Lohith_Resume.pdf";
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                >
                  <FileDown className="w-4 h-4 mr-2" />
                  Download Resume (PDF)
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-primary/3"></div>
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/8 rounded-full blur-[120px]"></div>
          <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-indigo-500/8 rounded-full blur-[120px]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal className="text-center mb-16">
            <div className="inline-block text-primary text-xs font-semibold mb-3 tracking-wider uppercase border border-primary/10 rounded-full px-2.5 py-0.5 bg-primary/5">
              Get in Touch
            </div>
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-4 mt-2">Let's Connect!</h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
              Ready to discuss opportunities, collaborate on projects, or just have a tech chat?
            </p>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                
                return (
                  <ScrollReveal
                    key={social.name}
                    delay={index * 0.1}
                  >
                    <Card 
                      className="group glass-card cursor-pointer h-full"
                    onClick={() => window.open(social.href, "_blank")}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="bg-[#EEF2FF] dark:bg-primary/15 p-3 rounded-xl group-hover:bg-primary/25 transition-premium border border-[#DCE5FF] dark:border-transparent group-hover:shadow-[0_0_15px_rgba(79,107,255,0.2)]">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold">{social.name}</h4>
                          <p className="text-muted-foreground text-sm">{social.username}</p>
                          <p className="text-muted-foreground/70 text-xs mt-0.5">{social.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}