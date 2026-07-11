import { Button } from "@/components/ui/button";
import { ArrowDown, Cloud, Code, ExternalLink, FileDown, Github, Linkedin, Mail } from "lucide-react";
import profilePhotoDark from "@/assets/profile-photodark.png";
import profilePhotoLight from "@/assets/profile-photolight.png";

export function HeroSection() {
  const handleViewWork = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadResume = () => {
    window.open("https://drive.google.com/file/d/17B_YmPohsdS9capak5WYP0ZlFa26bZCN/view?usp=sharing", "_blank");
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-transparent dark:bg-gradient-to-br dark:from-background dark:via-background dark:to-muted/30">

      {/* Background decoration - Abstract modern background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Very subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-30 dark:opacity-20"></div>
        {/* Floating Geometric Particles (Premium Feel) */}
        <div className="absolute top-20 left-10 md:left-1/4 w-3 h-3 rounded-full bg-primary/20 animate-float" style={{ animationDuration: '7s' }}></div>
        <div className="absolute top-40 right-10 md:right-1/4 w-4 h-4 rounded-full border border-primary/30 animate-float" style={{ animationDuration: '9s', animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 left-1/4 text-primary/20 animate-float text-xl select-none" style={{ animationDuration: '12s', animationDelay: '1s' }}>+</div>
        <div className="absolute bottom-32 right-1/4 w-3 h-3 rounded-full border border-indigo-500/30 animate-float" style={{ animationDuration: '8s', animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-10 md:left-1/3 text-indigo-500/20 animate-float text-2xl select-none" style={{ animationDuration: '15s', animationDelay: '4s' }}>+</div>
      </div>

      <div className="container mx-auto px-4 py-8 lg:py-20 relative z-10 flex flex-col justify-center h-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 max-w-6xl mx-auto w-full">
          {/* Content */}
          <div className="flex-1 text-left animate-fade-in lg:mt-12 xl:mt-16">
            <div className="flex items-center gap-4 mb-4 xl:mb-6">
              {/* Inline Mobile Avatar */}
              <div className="lg:hidden relative w-[56px] h-[56px] rounded-full overflow-hidden border-2 border-primary/20 shadow-[0_0_15px_rgba(59,91,197,0.15)] dark:shadow-[0_0_15px_rgba(59,91,197,0.3)] shrink-0">
                {/* Light Theme Avatar */}
                <img 
                  src={profilePhotoLight} 
                  alt="V Lohith" 
                  className="w-full h-full object-cover pointer-events-none select-none dark:hidden" 
                  draggable="false"
                  onContextMenu={(e) => e.preventDefault()}
                />
                {/* Dark Theme Avatar */}
                <img 
                  src={profilePhotoDark} 
                  alt="V Lohith" 
                  className="w-full h-full object-cover pointer-events-none select-none hidden dark:block" 
                  draggable="false"
                  onContextMenu={(e) => e.preventDefault()}
                />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-4xl xl:text-6xl font-bold leading-tight">
                Hi, I'm{" "}
                <span className="text-primary">
                  Lohith.
                </span>
              </h1>
            </div>

            <div className="text-base md:text-lg lg:text-base xl:text-xl text-muted-foreground mb-8 xl:mb-10 leading-relaxed max-w-2xl mx-0">
              Full-stack developer specializing in <span className="text-foreground font-medium">AI-powered applications</span>, <span className="text-foreground font-medium">real-time systems</span>, and <span className="text-foreground font-medium">scalable architectures</span>.
            </div>

            {/* Action Buttons */}
            <div className="flex flex-row gap-3 lg:gap-4 justify-start mb-12 w-full max-w-[400px] lg:max-w-none">
              <Button
                onClick={handleViewWork}
                size="lg"
                className="flex-1 lg:flex-none bg-primary hover:bg-[#3F5AF4] text-primary-foreground font-medium px-4 lg:px-8 py-3 rounded-2xl transition-premium hover:shadow-card-hover hover:-translate-y-1 shadow-md"
              >
                <ExternalLink className="hidden sm:inline-block w-4 h-4 mr-2" />
                <span className="whitespace-nowrap">View Work</span>
              </Button>

              <Button
                onClick={handleDownloadResume}
                variant="outline"
                size="lg"
                className="flex-1 lg:flex-none bg-white dark:bg-background/50 hover:bg-primary/5 text-foreground hover:text-primary border border-border hover:border-primary/40 font-medium px-4 lg:px-8 py-3 rounded-2xl transition-premium hover:shadow-card-hover hover:-translate-y-1"
              >
                <FileDown className="hidden sm:inline-block w-4 h-4 mr-2" />
                <span className="whitespace-nowrap">Resume</span>
              </Button>
            </div>

            {/* Social Icons Row */}
            <div className="flex flex-row gap-4 justify-center lg:justify-start items-center">
              <a
                href="https://github.com/lohith2005"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 flex items-center justify-center rounded-full bg-white dark:bg-card border border-[#DCE5FF] dark:border-white/5 text-foreground/80 hover:bg-primary/5 hover:text-primary hover:border-primary/40 hover:-translate-y-1 shadow-sm transition-premium"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/lohithvellure"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 flex items-center justify-center rounded-full bg-white dark:bg-card border border-[#DCE5FF] dark:border-white/5 text-foreground/80 hover:bg-primary/5 hover:text-primary hover:border-primary/40 hover:-translate-y-1 shadow-sm transition-premium"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:vellurelohith1@gmail.com"
                className="w-11 h-11 flex items-center justify-center rounded-full bg-white dark:bg-card border border-[#DCE5FF] dark:border-white/5 text-foreground/80 hover:bg-primary/5 hover:text-primary hover:border-primary/40 hover:-translate-y-1 shadow-sm transition-premium"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

          </div>

          {/* Profile Image - Hidden on mobile, shown on desktop */}
          <div className="hidden lg:block flex-shrink-0 animate-scale-in pl-8 xl:pl-12">
            <div className="relative">

              {/* Outer rotating dotted ring */}
              <div className="absolute -inset-6 xl:-inset-7 border-[4px] border-dashed border-primary/[0.18] dark:border-primary/30 rounded-full animate-[spin_30s_linear_infinite] pointer-events-none"></div>

              {/* Inner static solid light ring */}
              <div className="absolute -inset-4 xl:-inset-5 border-[2px] border-solid border-primary/[0.12] dark:border-primary/20 rounded-full pointer-events-none"></div>

              {/* Profile image container without dark border */}
              <div className="relative w-56 h-56 xl:w-80 xl:h-80 overflow-hidden rounded-full shadow-[0_20px_60px_rgba(79,107,255,0.08)] dark:shadow-2xl transition-all duration-500 hover:scale-[1.02] z-10 bg-slate-900">
                {/* Light Theme Profile Image */}
                <img
                  src={profilePhotoLight}
                  alt="V Lohith - Full-Stack Developer"
                  className="w-full h-full object-cover pointer-events-none select-none dark:hidden"
                  draggable="false"
                  onContextMenu={(e) => e.preventDefault()}
                />
                {/* Dark Theme Profile Image */}
                <img
                  src={profilePhotoDark}
                  alt="V Lohith - Full-Stack Developer"
                  className="w-full h-full object-cover pointer-events-none select-none hidden dark:block"
                  draggable="false"
                  onContextMenu={(e) => e.preventDefault()}
                />
              </div>

              {/* Top Left Cloud Icon Badge (Intersecting outer ring) */}
              <div className="absolute -top-1 -left-1 xl:-top-0 xl:-left-0 bg-background rounded-full p-2.5 xl:p-3 shadow-xl border border-border/10 z-20 animate-float" style={{ animationDuration: '6s' }}>
                <Cloud className="w-5 h-5 xl:w-6 xl:h-6 text-emerald-600 dark:text-emerald-400" strokeWidth={2.5} />
              </div>

              {/* Bottom Right Code Icon Badge (Intersecting outer ring) */}
              <div className="absolute -bottom-1 -right-1 xl:-bottom-0 xl:-right-0 bg-background rounded-full p-2.5 xl:p-3 shadow-xl border border-border/10 z-20 animate-float" style={{ animationDuration: '7s', animationDelay: '1s' }}>
                <Code className="w-5 h-5 xl:w-6 xl:h-6 text-blue-600 dark:text-blue-500" strokeWidth={2.5} />
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - Centered at bottom */}
      <div
        className="absolute bottom-28 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-sm text-muted-foreground animate-fade-in-up z-20 cursor-pointer hover:text-primary transition-colors duration-300"
        onClick={handleViewWork}
      >
        <span className="mb-2 hidden md:block">Discover my journey</span>
        <ArrowDown className="w-6 h-6 md:w-4 md:h-4 animate-bounce text-primary/80 md:text-inherit" />
      </div>
    </section>
  );
}