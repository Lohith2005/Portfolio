
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Github, Linkedin, Code, User, FileText, Briefcase, Contact } from 'lucide-react';

const Index = () => {
  const skills = [
    { name: "Java", level: 90 },
    { name: "Data Structures & Algorithms", level: 85 },
    { name: "Linux", level: 80 },
    { name: "HTML/CSS", level: 88 },
    { name: "JavaScript", level: 82 },
    { name: "AWS Cloud Basics", level: 75 },
    { name: "PHP", level: 70 },
    { name: "MySQL", level: 78 }
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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Lohith
            </div>
            <div className="hidden md:flex space-x-8">
              {[
                { name: 'About', id: 'about', icon: User },
                { name: 'Skills', id: 'skills', icon: Code },
                { name: 'Projects', id: 'projects', icon: Briefcase },
                { name: 'Resume', id: 'resume', icon: FileText },
                { name: 'Contact', id: 'contact', icon: Contact }
              ].map((item) => (
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
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
                Hello, I'm Lohith
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              A passionate Computer Science undergrad diving deep into 
              <span className="text-blue-600 font-semibold"> cloud computing</span>, 
              <span className="text-green-600 font-semibold"> web development</span>, and 
              <span className="text-purple-600 font-semibold"> problem-solving</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">🚀 My Journey</h3>
                <p className="text-gray-600 leading-relaxed">
                  Currently in my final year of Computer Science, I'm passionate about building scalable solutions 
                  and exploring the endless possibilities of cloud computing. My fascination with AWS and modern 
                  web technologies drives me to constantly learn and innovate.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">☁️ Cloud Enthusiast</h3>
                <p className="text-gray-600 leading-relaxed">
                  From EC2 instances to Lambda functions, I love diving into AWS services and understanding 
                  how they can solve real-world problems. I'm actively preparing for AWS certifications 
                  while building cloud-native applications.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-500 to-green-500 p-8 rounded-2xl text-white transform hover:scale-105 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4">🎯 Campus Placement Ready</h3>
                <p className="leading-relaxed">
                  Actively preparing for campus placements with a strong foundation in DSA, 
                  system design principles, and hands-on project experience. Ready to contribute 
                  to innovative teams and tackle challenging problems.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">💻 Code & Create</h3>
                <p className="text-gray-600 leading-relaxed">
                  Whether it's optimizing algorithms, building responsive web interfaces, or 
                  deploying applications to the cloud, I enjoy every aspect of the development 
                  lifecycle and the satisfaction of solving complex problems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Skills & Expertise</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-600 mt-6">Technologies I work with and love</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={skill.name} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-semibold text-gray-800">{skill.name}</h3>
                  <span className="text-blue-600 font-bold">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-green-500 h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
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
