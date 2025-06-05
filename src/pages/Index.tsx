import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Mail, Github, Linkedin, Code, User, FileText, Briefcase, Contact, GraduationCap, ArrowDown, Menu } from 'lucide-react';

const Index = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const skills = [
    { name: "Java", icon: "☕" },
    { name: "Data Structures & Algorithms", icon: "🔧" }, 
    { name: "Linux", icon: "🐧" },
    { name: "HTML/CSS", icon: "🌐" },
    { name: "JavaScript", icon: "⚡" },
    { name: "AWS Cloud Basics", icon: "☁️" },
    { name: "PHP", icon: "🐘" },
    { name: "MySQL", icon: "🗄️" }
  ];

  const projects = [
    {
      title: "Online Educational Resources Platform",
      description: "A comprehensive web platform for educational resources with user authentication, course management, and interactive learning modules.",
      tech: ["PHP", "MySQL", "HTML/CSS", "JavaScript"],
      status: "Completed"
    },
    {
      title: "Cloud-Based Task Manager",
      description: "A scalable task management application deployed on AWS with real-time collaboration features.",
      tech: ["Java", "AWS", "Spring Boot", "MySQL"],
      status: "In Progress"
    },
    {
      title: "DSA Visualizer",
      description: "Interactive data structure and algorithm visualization tool to help students understand complex concepts.",
      tech: ["JavaScript", "HTML/CSS", "Canvas API"],
      status: "Completed"
    }
  ];

  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "University Name",
      period: "2021 - 2025",
      cgpa: "8.5/10",
      description: "Specializing in software development, data structures, algorithms, and cloud computing. Active participant in coding competitions and technical workshops."
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { name: 'About', id: 'about', icon: User },
    { name: 'Education', id: 'education', icon: GraduationCap },
    { name: 'Skills', id: 'skills', icon: Code },
    { name: 'Projects', id: 'projects', icon: Briefcase },
    { name: 'Resume', id: 'resume', icon: FileText },
    { name: 'Contact', id: 'contact', icon: Contact }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Lohith
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-300 hover:scale-105 transform"
                >
                  <item.icon size={16} />
                  <span>{item.name}</span>
                </button>
              ))}
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden">
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu size={24} />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[280px] sm:w-[320px]">
                  <div className="flex flex-col space-y-4 mt-8">
                    {navItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors duration-300 p-3 rounded-lg hover:bg-blue-50"
                      >
                        <item.icon size={20} />
                        <span className="text-lg">{item.name}</span>
                      </button>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left side - Text content */}
            <div className="animate-fade-in text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
                  Hello, I'm Lohith
                </span>
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-8">
                A passionate Computer Science undergrad diving deep into 
                <span className="text-blue-600 font-semibold"> cloud computing</span>, 
                <span className="text-green-600 font-semibold"> web development</span>, and 
                <span className="text-purple-600 font-semibold"> problem-solving</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  onClick={() => scrollToSection('projects')}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-full transform hover:scale-105 transition-all duration-300"
                >
                  View My Work
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => scrollToSection('contact')}
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-full transform hover:scale-105 transition-all duration-300"
                >
                  Get In Touch
                </Button>
              </div>
            </div>

            {/* Right side - Profile image */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <div className="w-72 h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-2xl border-8 border-white bg-gradient-to-br from-blue-100 to-green-100 transform hover:scale-105 transition-all duration-300">
                  <img 
                    src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=800&h=800" 
                    alt="Lohith - Computer Science Student" 
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Floating elements around the image */}
                <div className="absolute -top-4 -right-4 bg-blue-500 text-white p-3 rounded-full shadow-lg animate-float">
                  <Code size={24} />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-green-500 text-white p-3 rounded-full shadow-lg animate-float" style={{animationDelay: '1s'}}>
                  <GraduationCap size={24} />
                </div>
              </div>
            </div>
          </div>

          {/* Scroll down arrow */}
          <div className="flex justify-center mt-16">
            <button 
              onClick={() => scrollToSection('about')}
              className="animate-bounce hover:animate-pulse transition-all duration-300"
            >
              <div className="flex flex-col items-center text-gray-600 hover:text-blue-600">
                <span className="text-sm mb-2 font-medium">Learn more about me</span>
                <ArrowDown size={32} className="animate-pulse" />
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* About Me Section - Enhanced */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-600 mt-6">My journey, passion, and what drives me</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left column */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-500 text-white p-3 rounded-full mr-4">
                    <User size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Background & Passion</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Currently in my final year of Computer Science, I'm passionate about building scalable solutions 
                  and exploring the endless possibilities of cloud computing. My fascination with AWS and modern 
                  web technologies drives me to constantly learn and innovate. I believe in writing clean, 
                  efficient code that solves real-world problems.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center mb-4">
                  <div className="bg-green-500 text-white p-3 rounded-full mr-4">
                    <GraduationCap size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Academic Excellence</h3>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Pursuing BTech in Computer Science with a CGPA of 8.5/10. Active participant in coding 
                  competitions, hackathons, and technical workshops. Strong foundation in data structures, 
                  algorithms, and software engineering principles.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="bg-blue-50 text-blue-700">Data Structures</Badge>
                  <Badge variant="outline" className="bg-green-50 text-green-700">Algorithms</Badge>
                  <Badge variant="outline" className="bg-purple-50 text-purple-700">System Design</Badge>
                </div>
              </div>
            </div>

            {/* Right column */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-blue-500 to-green-500 p-8 rounded-2xl text-white transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-white/20 p-3 rounded-full mr-4">
                    <Code size={24} />
                  </div>
                  <h3 className="text-2xl font-bold">Technical Expertise</h3>
                </div>
                <p className="leading-relaxed mb-4">
                  Proficient in Java, JavaScript, PHP, and MySQL with hands-on experience in cloud platforms. 
                  From EC2 instances to Lambda functions, I love diving into AWS services and understanding 
                  how they can solve real-world problems.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>• Java Development</div>
                  <div>• AWS Cloud Services</div>
                  <div>• Web Technologies</div>
                  <div>• Database Design</div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-500 text-white p-3 rounded-full mr-4">
                    <Briefcase size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Campus Placement Ready</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Actively preparing for campus placements with a strong foundation in DSA, system design 
                  principles, and hands-on project experience. Ready to contribute to innovative teams and 
                  tackle challenging problems in the tech industry.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center mb-4">
                  <div className="bg-orange-500 text-white p-3 rounded-full mr-4">
                    <FileText size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">What I'm Working On</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Currently building cloud-native applications, preparing for AWS certifications, and 
                  contributing to open-source projects. Always excited about learning new technologies 
                  and taking on challenging coding problems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Education</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-600 mt-6">Academic journey and achievements</p>
          </div>

          <div className="max-w-4xl mx-auto">
            {education.map((edu, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-2xl text-gray-800 mb-2">{edu.degree}</CardTitle>
                      <CardDescription className="text-lg text-blue-600 font-semibold">{edu.institution}</CardDescription>
                    </div>
                    <div className="text-right">
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 mb-2">
                        {edu.period}
                      </Badge>
                      <div className="text-lg font-bold text-gray-800">CGPA: {edu.cgpa}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{edu.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Skills & Expertise</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-600 mt-6">Technologies I work with and love</p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div key={skill.name} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800">{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-600 mt-6">Building solutions that make a difference</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0 shadow-lg">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl text-gray-800">{project.title}</CardTitle>
                    <Badge variant={project.status === "Completed" ? "default" : "secondary"} className="ml-2">
                      {project.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Resume</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto rounded-full mb-8"></div>
          
          <div className="bg-white p-10 rounded-2xl shadow-lg">
            <div className="mb-8">
              <FileText size={48} className="mx-auto text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Download My Resume</h3>
              <p className="text-gray-600 mb-8">
                Get a comprehensive overview of my experience, skills, and achievements
              </p>
            </div>
            
            <Button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-3 rounded-full transform hover:scale-105 transition-all duration-300">
              <FileText className="mr-2" size={20} />
              Download Resume (PDF)
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Let's Connect!</h2>
          <div className="w-24 h-1 bg-white mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-blue-100 mb-12">
            Ready to discuss opportunities, collaborate on projects, or just have a tech chat?
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <a 
              href="mailto:lohith@example.com" 
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
            >
              <Mail size={32} className="mx-auto text-white mb-4" />
              <h3 className="text-lg font-semibold text-white">Email</h3>
              <p className="text-blue-100">lohith@example.com</p>
            </a>
            
            <a 
              href="https://github.com/lohith" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
            >
              <Github size={32} className="mx-auto text-white mb-4" />
              <h3 className="text-lg font-semibold text-white">GitHub</h3>
              <p className="text-blue-100">@lohith</p>
            </a>
            
            <a 
              href="https://linkedin.com/in/lohith" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
            >
              <Linkedin size={32} className="mx-auto text-white mb-4" />
              <h3 className="text-lg font-semibold text-white">LinkedIn</h3>
              <p className="text-blue-100">/in/lohith</p>
            </a>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-white mb-6">Send me a message</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-100 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-100 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
            </div>
            <textarea 
              placeholder="Your Message" 
              rows={4}
              className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-100 focus:outline-none focus:ring-2 focus:ring-white/50 mb-4"
            ></textarea>
            <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full transform hover:scale-105 transition-all duration-300">
              Send Message
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Lohith. Built with ❤️ and lots of ☕ | Ready for amazing opportunities!
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
