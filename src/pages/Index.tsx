import React, { useState, useEffect } from 'react';  // Adjust path accordingly
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Award, icons } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselApi } from "@/components/ui/carousel";
import { Mail, Github, Linkedin, Code, User, FileText, Briefcase, ExternalLink, GraduationCap, TrendingUp, ArrowDown, Menu } from 'lucide-react';

const Index = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [currentCertificatePage, setCurrentCertificatePage] = useState(0);
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update carousel when pagination button is clicked
  useEffect(() => {
    if (carouselApi) {
      carouselApi.scrollTo(currentCertificatePage);
    }
  }, [currentCertificatePage, carouselApi]);

  // Update pagination state when carousel changes
  useEffect(() => {
    if (!carouselApi) return;

    const onSelect = () => {
      setCurrentCertificatePage(carouselApi.selectedScrollSnap());
    };

    carouselApi.on("select", onSelect);
    return () => {
      carouselApi.off("select", onSelect);
    };
  }, [carouselApi]);
  
  const handleDownload = () => {
    const link = document.createElement('a');
    window.open('https://drive.google.com/file/d/18_Cz64IZQK8RzaE4nnMZhrPziOLKNV62/view?usp=sharing', '_blank');
    link.download = 'Lohith_Resume_2025.pdf'; // File name after download
    link.click();
  };

  const technicalSkills = [
    "Java",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "AWS",
    "SQL",
    "Python"
  ];

  const softSkills = [
    "Communication",
    "Teamwork",
    "Problem Solving",
    "Time Management",
    "Adaptability",
  ];

  const tools = ["Git", "GitHub", "VS Code", "Canva", "Figma"];
  const projects = [
    {
      title: "Job Application Tracker",
      description: "A web-based job application tracking system that allows users to efficiently organize and manage job applications.",
      tech: ["HTML", "CSS", "JavaScript"],
      status: "Completed",
      previewLink: "https://job-application-tracker-bk1u.onrender.com/"
    },
    {
      title: "AI Code Analyzer",
      description: "A web-based AI-powered code analyzer that helps users quickly review, understand, and improve their code.",
      tech: ["HTML/CSS", "JavaScript", "React JS", "Gemini API"],
      status: "Completed",
      previewLink: "https://aicodeanalyzer.onrender.com/"
    },
    {
      title: "Weather Wave ",
      description: "Responsive Weather App using OpenWeather API & GeoLocation Services",
      tech: ["HTML/CSS","JavaScript","TypeScript", "OpenWeather API"],
      status: "In Progress"
    }
  ];

  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "MohanBabu University",
      period: "2022 - 2026 (Expected)",
      cgpa: "9.1/10",
      description: "Specializing in software development, data structures, algorithms, and cloud computing. Member of the AWS Cloud Club and Coordinator of the CETA-Technova Club, actively involved in organizing and participating in technical workshops and community initiatives."
    }
  ];

  const certificates = [
    {
      title: "AWS Academy Cloud Foundations",
      issuer: "Amazon Web Services - Academy",
      date: "2024",
      status: "Completed",
      description: "Foundational understanding of AWS Cloud concepts, services, and terminology.",
      priority: "medium",
      verifyLink: "https://www.credly.com/badges/593bef98-fa51-4024-b09c-2603b3fac2a8/public_url"
    },
    {
      title: "Programming using Java",
      issuer: "Infosys - SpringBoard",
      date: "2025",
      status: "completed",
      description: "Comprehensive knowledge of Java programming fundamentals and object-oriented concepts.",
      priority: "high",
      verifyLink: "https://ik.imagekit.io/lohith/infosys-java.pdf?updatedAt=1749271709810"
    },
    // {
    //   title: "Data Structures & Algorithms",
    //   issuer: "Coursera",
    //   date: "2023",
    //   status: "Completed",
    //   description: "Advanced problem-solving techniques and algorithmic thinking for competitive programming.",
    //   priority: "medium",
    //   verifyLink: ""
    // },
    {
      title: "Front-Web Development Bootcamp",
      issuer: "IBM-COURSERA",
      date: "2023",
      status: "Completed",
      description: "Front end web development using modern technologies and best practices.",
      priority: "medium",
      verifyLink: "https://coursera.org/share/4e9e3cdfcd7ea069f823c8ef2d45fa6a"
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
    { name: 'Resume', id: 'resume', icon: FileText }
  ];


    const certificatesPerPage = 2;
  const totalPages = Math.ceil(certificates.length / certificatesPerPage);
  const paginatedCertificates = Array.from({ length: totalPages }, (_, index) =>
    certificates.slice(index * certificatesPerPage, (index + 1) * certificatesPerPage)
  );




  return (  
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent relative">
              V Lohith
              <div className="absolute -top-1 -right-2 w-2 h-2 bg-emerald-200 rounded-full animate-pulse"></div>
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
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Image - First on mobile, second on desktop */}
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-2xl border-8 border-white bg-gradient-to-br from-blue-100 to-green-100 transform hover:scale-105 transition-all duration-300">
                  <img
                    src="..\public\Professional LinkedIn Profile Picture.png"
                    alt="Lohith - Computer Science Student"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Floating elements around the image */}
                <div className="absolute -top-4 -right-4 bg-blue-500 text-white p-3 rounded-full shadow-lg animate-float">
                  <Code size={24} />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-green-500 text-white p-3 rounded-full shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                  <GraduationCap size={24} />
                </div>
              </div>
            </div>

            {/* Text content - Second on mobile, first on desktop */}
            <div className="order-2 lg:order-1 animate-fade-in text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl flex lg:text-7xl font-bold mb-6">
                  <span className="block bg-gradient-to-r from-slate-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent mb-2">
                    Hello, I'm
                  </span>
                  <span className="block bg-gradient-to-r pl-5 from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent animate-gradient">
                     Lohith
                  </span>
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-8">
                A passionate Computer Science undergrad diving deep into
                <span className="text-blue-600 font-semibold"> cloud computing</span>,
                <span className="text-green-600 font-semibold"> web development</span>, and
                <span className="text-purple-600 font-semibold"> problem-solving</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <Button 
                  onClick={() => scrollToSection('projects')}
                  className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <span className="flex items-center space-x-2">
                    <TrendingUp size={18} className="group-hover:rotate-12 transition-transform duration-300" />
                    <span>View My Work</span>
                  </span>
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => scrollToSection('resume')}
                  className="group border-2 border-blue-600 text-blue-600 hover:text-blue px-8 py-3 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <span className="flex items-center space-x-2">
                    <FileText size={18} className="group-hover:rotate-12 transition-transform duration-300" />
                    <span>My Resume</span>
                  </span>
                </Button>
              </div>
            </div>
          </div>

          {/* Scroll down arrow */}
          <div className="flex justify-center mt-20">
            <button
              onClick={() => scrollToSection('about')}
              className="group flex flex-col items-center space-y-3 text-slate-600 hover:text-blue-600 transition-all duration-300"
            >
              <span className="text-sm font-medium group-hover:text-blue-600 transition-colors duration-300">Discover my journey</span>
              <div className="relative">
                <ArrowDown size={32} className="animate-bounce group-hover:animate-pulse" />
                <div className="absolute inset-0 bg-blue-500/20 rounded-full animate-ping opacity-75"></div>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* About Me Section - Enhanced */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/70 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full mb-6">
              <User size={16} className="text-blue-600" />
              <span className="text-sm font-medium text-blue-700">About Me</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">My Story & Vision</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
            <p className="text-xl text-slate-600 mt-6 max-w-2xl mx-auto">Crafting innovative solutions through code and creativity</p>
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
                  Currently in my final year of Computer Science, I specialize in front-end web development and am proficient in Java.
                  My passion lies in crafting intuitive and engaging user interfaces, while continuously expanding my expertise in cloud computing,
                  particularly with AWS and Linux OS. With a hands-on approach and a constant drive for learning. I believe in writing clean,
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
                  Pursuing BTech in Computer Science with a CGPA of 9.1/10. Active participant in coding
                  competitions and hackathonss. Strong foundation in data structures,
                  algorithms, and software engineering principles.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="bg-blue-50 text-blue-700">Data Structures</Badge>
                  <Badge variant="outline" className="bg-green-50 text-green-700">Algorithms</Badge>
                  <Badge variant="outline" className="bg-purple-50 text-purple-700">System Design</Badge>
                  <Badge variant="outline" className="bg-yellow-50 text-yellow-700">Object Oriented Design</Badge>

                </div>
              </div>
            </div>

            {/* Right column */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-blue-500 to-green-500 p-7 rounded-2xl text-white transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-white/20 p-3 rounded-full mr-4">
                    <Code size={24} />
                  </div>
                  <h3 className="text-2xl font-bold">Technical Expertise</h3>
                </div>
                <p className="leading-relaxed mb-4">
                  Proficient in Java, JavaScript and MySQL with hands-on experience in cloud platforms.
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
                  <div className="bg-orange-500 text-white p-3 rounded-full mr-4">
                    <FileText size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">What I'm Working On</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Currently focused on mastering Data Structures and Algorithms with Java, while also preparing for AWS certification and
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
            <div className="inline-flex items-center space-x-2 bg-emerald-50 px-4 py-2 rounded-full mb-6">
              <GraduationCap size={16} className="text-emerald-600" />
              <span className="text-sm font-medium text-emerald-700">Education</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Academic Journey</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto rounded-full"></div>
            <p className="text-xl text-slate-600 mt-6">Building the foundation for innovation</p>
          </div>

          <div className="max-w-4xl mx-auto">
            {education.map((edu, index) => (
              <Card key={index} className="group bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border-0">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white p-4 rounded-xl group-hover:scale-110 transition-transform duration-300">
                        <GraduationCap size={32} />
                      </div>
                      <div>
                        <CardTitle className="text-2xl text-slate-800 mb-2 group-hover: transition-colors duration-300">{edu.degree}</CardTitle>
                        <CardDescription className="text-lg text-emerald-600 font-semibold">{edu.institution}</CardDescription>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200 mb-2 group-hover:bg-emerald-100 transition-colors duration-300">
                        {edu.period}
                      </Badge>
                      <div className="text-lg font-bold text-slate-800">CGPA: {edu.cgpa}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 leading-relaxed">{edu.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATE SECTION */}

      <section id="certificates" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full mb-6">
              <Award size={16} className="text-blue-600" />
              <span className="text-sm font-medium text-blue-700">Certifications</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Achievements & Learning
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
            <p className="text-xl text-slate-600 mt-6 max-w-2xl mx-auto">
              Continuous learning and professional development milestones
            </p>
          </div>

          <div className="relative">
            <Carousel className="w-full max-w-6xl mx-auto" setApi={setCarouselApi}>
              <CarouselContent>
                {paginatedCertificates.map((certPage, pageIndex) => (
                  <CarouselItem key={pageIndex}>
                    <div className="grid md:grid-cols-2 gap-8">
                      {certPage.map((cert, index) => (
                        <Card key={index} className="group bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 animate-fade-in">
                          {cert.priority === 'high' && (
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>
                          )}
                          
                          <CardHeader className="pb-4">
                            <div className="flex items-start justify-between">
                              <div className="flex items-center space-x-4">
                                <div className={`p-4 rounded-xl text-white transition-transform duration-300 group-hover:scale-105 ${
                                  cert.priority === 'high' 
                                    ? 'bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500' 
                                    : 'bg-gradient-to-r from-emerald-500 to-teal-500'
                                }`}>
                                  <Award size={28} />
                                </div>
                                <div>
                                  <CardTitle className="text-xl text-slate-800 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                                    {cert.title}
                                  </CardTitle>
                                  <CardDescription className="text-blue-600 font-semibold">
                                    {cert.issuer}
                                  </CardDescription>
                                </div>
                              </div>
                              <div className="text-right">
                                <Badge 
                                  variant={cert.status === "Certified" ? "default" : "secondary"} 
                                  className="mb-2"
                                >
                                  {cert.status}
                                </Badge>
                                <div className="text-sm text-slate-600 font-medium">
                                  {cert.date}
                                </div>
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <p className="text-slate-600 leading-relaxed mb-4">
                              {cert.description}
                            </p>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => window.open(cert.verifyLink, '_blank')}
                              className="group/btn bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100 hover:text-blue-800 transition-all duration-300"
                            >
                              <ExternalLink size={16} className="mr-2 group-hover/btn:rotate-12 transition-transform duration-300" />
                              Verify Certificate
                            </Button>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden lg:flex" />
              <CarouselNext className="hidden lg:flex" />
            </Carousel>

            {/* Pagination Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: totalPages }, (_, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className={`w-10 h-10 rounded-full transition-all duration-300 ${
                    currentCertificatePage === index
                      ? 'bg-blue-600 text-white border-blue-600 shadow-lg scale-110'
                      : 'bg-white text-blue-600 border-blue-200 hover:bg-blue-50'
                  }`}
                  onClick={() => setCurrentCertificatePage(index)}
                >
                  {index + 1}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>



      {/* Skills Section */}
      {/* <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
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
      </section> */}
      <section
        id="skills"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white/70 backdrop-blur-md transition-all duration-300 ease-in-out"
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}

          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-purple-50 px-4 py-2 rounded-full mb-6">
              <Code size={16} className="text-purple-600" />
              <span className="text-sm font-medium text-purple-700">Skills & Technologies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Technical Expertise
            </h2>
            <div className="w-16 h-1 bg-purple-600 mx-auto rounded-full"></div>
            <p className="text-lg text-slate-600 mt-4">
              Technologies, tools, and soft skills I work with
            </p>
          </div>

          {/* Modern Grid with Borders and Backgrounds */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Technical Skills */}
            <div className="bg-white border border-green-200 rounded-xl p-6 shadow-sm transition-all">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-green-100 p-2 rounded-md">
                  <User size={18} className="text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-700">Technical Skills</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {technicalSkills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-green-50 text-green-800 border border-green-200 px-3 py-1 text-sm rounded-md hover:bg-green-100 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="bg-white border border-blue-200 rounded-xl p-6 shadow-sm transition-all">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-blue-100 p-2 rounded-md">
                  <Award size={18} className="text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-700">Soft Skills</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-blue-50 text-blue-800 border border-blue-200 px-3 py-1 text-sm rounded-md hover:bg-blue-100 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="bg-white border border-purple-200 rounded-xl p-6 shadow-sm transition-all">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-purple-100 p-2 rounded-md">
                  <Code size={18} className="text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-700">Tools</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool, index) => (
                  <span
                    key={index}
                    className="bg-purple-50 text-purple-800 border border-purple-200 px-3 py-1 text-sm rounded-md hover:bg-purple-100 transition"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>





      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-emerald-50 px-4 py-2 rounded-full mb-6">
              <Briefcase size={16} className="text-emerald-600" />
              <span className="text-sm font-medium text-emerald-700">Portfolio</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto rounded-full"></div>
            <p className="text-xl text-slate-600 mt-6">Innovative solutions that make an impact</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="hover:shadow-xl  transition-all duration-300 transform hover:-translate-y-2 border-2 shadow-lg rounded-xl flex flex-col justify-between">
                <CardHeader >
                  <div className="flex justify-between items-start ">
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
                  <div className="flex flex-wrap gap-2 mb-4 ">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Conditional Preview or In Progress Section */}
                  {project.status === "Completed" && project.previewLink ? (
                    <div className="w-full bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] rounded-t-md rounded-b-md">
                      <a
                        href={project.previewLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-center text-white text-sm font-semibold px-4 py-3 hover:bg-gradient-to-r hover:from-[#1e40af] hover:to-[#374151] transition-colors duration-500 ease-in-out"
                      >
                        🔗 Preview Project
                      </a>
                    </div>
                  ) : project.status === "In Progress" ? (
                    <div className="w-full bg-gray-300 mt-6 rounded-md cursor-not-allowed">
                      <button
                        disabled
                        title="Preview coming soon!"
                        className="block w-full text-center text-gray-600 text-sm font-semibold px-4 py-3"
                      >
                        🚧 Work in Progress
                      </button>
                    </div>
                  ) : null}
                </CardContent>
              </Card>
            ))}

          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-slate-200 px-4 py-2 rounded-full mb-6">
            <FileText size={16} className="text-slate-600" />
            <span className="text-sm font-medium text-slate-700">Resume</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Professional Summary</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-slate-600 to-slate-800 mx-auto rounded-full mb-8"></div>

          <div className="bg-white p-10 rounded-2xl shadow-lg ">
            <div className="mb-8">
              <FileText size={48} className="mx-auto text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Download My Resume</h3>
              <p className="text-gray-600 mb-8">
                Get a comprehensive overview of my experience, skills, and achievements
              </p>
            </div>

            <Button onClick={handleDownload} className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-3 rounded-full transform hover:scale-105 transition-all duration-300">
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
              href="mailto:vellurelohith1@example.com"
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
            >
              <Mail size={32} className="mx-auto text-white mb-4" />
              <h3 className="text-lg font-semibold text-white">Email</h3>
              <p className="text-blue-100">vellurelohith1@example.com</p>
            </a>

            <a
              href="https://github.com/lohith2005"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
            >
              <Github size={32} className="mx-auto text-white mb-4" />
              <h3 className="text-lg font-semibold text-white">GitHub</h3>
              <p className="text-blue-100">@lohith2005</p>
            </a>

            <a
              href="https://linkedin.com/in/lohithvellure"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
            >
              <Linkedin size={32} className="mx-auto text-white mb-4" />
              <h3 className="text-lg font-semibold text-white">LinkedIn</h3>
              <p className="text-blue-100">/in/vellurelohith</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Lohith. Built with ❤️ | Ready for amazing opportunities!
          </p>
        </div>
      </footer>
      
    </div>
  );
};

export default Index;
