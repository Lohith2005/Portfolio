import { useState, useEffect } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { useLocation, useNavigate } from "react-router-dom";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Resume", href: "#resume" },
];

export function Navigation() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      const sections = navItems.map(item => item.href.substring(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      } else if (window.scrollY < 100) {
        setActiveSection("hero");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (href: string) => {
    setIsMobileMenuOpen(false); // Close mobile menu when a link is clicked
    if (location.pathname !== "/") {
      navigate(`/${href}`);
      // Wait for navigation and then scroll
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav 
      className={`fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[95%] md:w-[90%] xl:w-auto max-w-6xl ${
        isMobileMenuOpen ? "rounded-2xl lg:rounded-full" : "rounded-full"
      } ${
        isScrolled || isMobileMenuOpen
          ? "nav-glass shadow-md dark:shadow-black/20" 
          : "bg-transparent md:nav-glass"
      }`}
    >
      <div className="px-3 py-3 md:px-4 md:py-2 xl:px-6 xl:py-2">
        <div className="flex items-center justify-between gap-2 md:gap-4 xl:gap-8">
          {/* Logo */}
          <div 
            className="text-lg xl:text-xl font-bold cursor-pointer transition-all duration-300 hover:scale-105 whitespace-nowrap"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <span className="text-primary">V</span>ellure Lohith
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-0.5 xl:space-x-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              
              return (
                <Button
                  key={item.name}
                  variant="ghost"
                  size="sm"
                  onClick={() => handleScrollTo(item.href)}
                  className={`transition-all duration-300 hover:bg-primary/10 hover:text-primary rounded-full px-3 py-1.5 text-sm xl:px-4 xl:text-base ${
                    isActive ? "bg-primary/10 text-primary" : "text-foreground/80"
                  }`}
                >
                  {item.name}
                </Button>
              );
            })}
          </div>
          
          {/* Right section - Theme & CTA */}
          <div className="flex items-center gap-2 xl:gap-4">
            <ThemeToggle />
            <Button 
              onClick={() => handleScrollTo('#contact')}
              className="hidden md:flex bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-full px-4 py-1.5 xl:px-6 xl:py-2 text-sm xl:text-base transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5"
            >
              Connect
            </Button>

            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden relative w-10 h-10 flex flex-col justify-center items-center group bg-primary/5 hover:bg-primary/10 rounded-full transition-colors ring-1 ring-primary/20"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              <div className="flex flex-col justify-between w-[16px] h-[12px] transform transition-all duration-300 origin-center overflow-hidden">
                <span className={`bg-primary h-[2px] w-full transform transition-all duration-300 origin-left ${isMobileMenuOpen ? "rotate-[42deg] w-[18px]" : ""}`}></span>
                <span className={`bg-primary h-[2px] w-full rounded transform transition-all duration-300 ${isMobileMenuOpen ? "opacity-0 -translate-x-10" : ""}`}></span>
                <span className={`bg-primary h-[2px] w-full transform transition-all duration-300 origin-left ${isMobileMenuOpen ? "-rotate-[42deg] w-[18px]" : ""}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        <div 
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMobileMenuOpen ? "max-h-[1000px] opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-2 py-4 border-t border-border/10">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <Button
                  key={item.name}
                  variant="ghost"
                  onClick={() => handleScrollTo(item.href)}
                  className={`justify-start text-base px-6 py-6 rounded-2xl transition-all duration-300 ${
                    isActive ? "bg-primary/10 text-primary font-bold" : "text-foreground/80 hover:bg-primary/5 font-medium"
                  }`}
                  style={{ transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : '0ms' }}
                >
                  <span className={`w-1.5 h-1.5 rounded-full mr-3 ${isActive ? 'bg-primary' : 'bg-transparent'}`}></span>
                  {item.name}
                </Button>
              );
            })}
            
            <Button 
              onClick={() => handleScrollTo('#contact')}
              className="md:hidden bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-2xl px-6 py-6 mt-2 transition-all duration-300"
            >
              Connect With Me
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}