"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GraduationCap, Award, ExternalLink } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ScrollReveal } from "@/components/ScrollReveal";

const education = {
  degree: "Bachelor of Technology in Computer Science",
  university: "MohanBabu University",
  duration: "2021 - 2026",
  cgpa: "9.18/10",
  description: `Specializing in software development, data structures, algorithms, and cloud computing. 
  Member of the AWS Cloud Club and Coordinator of the CETA-Technova Club, actively involved in 
  organizing and participating in technical workshops and community initiatives.`
};

// --- CORRECTED DATA ---
const achievements = [
  {
    title: "AWS Certified Cloud Practitioner", // Corrected typo
    provider: "Amazon Web Services",
    year: "2025",
    status: "Certified", // Corrected typo
    description: "This certification proves I can effectively contribute to cloud projects by understanding core AWS services and their business impact.",
    color: "success",
    link: "https://cp.certmetrics.com/amazon/en/public/verify/credential/61dc252b0383451d8545d89e11e97d70",
    important: true
  },
  {
    title: "Programming using Java",
    provider: "Infosys - Springboard",
    year: "2025",
    status: "Completed",
    description: "Comprehensive knowledge of Java programming fundamentals and object-oriented concepts.",
    color: "primary",
    link: "https://ik.imagekit.io/lohith/infosys-java.pdf?updatedAt=1749271709810",
    important: true
  },
    {
    title: "AWS Cloud Virtual Internship",
    provider: "EduSkills",
    year: "2024",
    status: "Completed",
    description: "This experience has been an incredible learning opportunity, allowing me to explore Amazon Web Services and sharpen my skills in cloud technologies and architecture.",
    color: "primary",
    link: "https://drive.google.com/file/d/1YNFiQrCs_DCy_6uslUjo4vE3WJQuBYUa/view?usp=sharing",
    important: true
  },
  {
    title: "Front-Web Development Bootcamp",
    provider: "IBM-COURSERA",
    year: "2023",
    status: "Completed",
    description: "Front end web development using modern technologies and best practices.",
    color: "success",
    link: "https://coursera.org/share/4e9e3cdfcd7ea069f823c8ef2d45fa6a"
  }
];

export function EducationSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = Math.ceil(achievements.length / 2);
  const [api, setApi] = useState(null);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCurrentSlide(api.selectedScrollSnap());
    const onSelect = () => {
      setCurrentSlide(api.selectedScrollSnap());
    };
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <section id="education" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-indigo-500/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 mb-4 ring-1 ring-primary/20">
            <span className="w-2 h-2 rounded-full bg-primary mr-2 animate-pulse"></span>
            Education
          </Badge>
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-4">Academic Journey</h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            My formal education and academic focus areas
          </p>
        </ScrollReveal>

        {/* Main Education Card */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="glass-card overflow-hidden animate-scale-in">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="bg-primary/15 p-4 rounded-2xl ring-1 ring-primary/20 shadow-[0_0_20px_rgba(59,91,197,0.1)]">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold mb-2 md:mb-0">{education.degree}</h3>
                    <Badge
                      variant="outline"
                      className="bg-primary/10 text-primary border-primary/20 w-fit ring-1 ring-primary/20"
                    >
                      CGPA: {education.cgpa}
                    </Badge>
                  </div>
                  <div className="text-lg text-primary/80 font-medium mb-1">
                    {education.university}
                  </div>
                  <div className="text-muted-foreground text-sm mb-4">
                    {education.duration}
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {education.description}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Certifications Section */}
        <div className="mt-24 max-w-5xl mx-auto">
          <ScrollReveal className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-2xl mb-6 ring-1 ring-primary/20">
              <Award className="w-8 h-8 text-primary" />
            </div>
            <div className="text-primary text-sm font-bold tracking-widest uppercase mb-2">
              Certifications
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 mt-3">Achievements & Learning</h3>
            <p className="text-muted-foreground">
              Continuous learning and professional development milestones
            </p>
          </ScrollReveal>

          <div className="relative">
            <Carousel setApi={setApi} className="w-full">
              <CarouselContent>
                {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                  <CarouselItem key={slideIndex}>
                    <div className="grid md:grid-cols-2 gap-6 px-4 py-4">
                      {achievements
                        .slice(slideIndex * 2, slideIndex * 2 + 2)
                        .map((achievement, index) => (
                          <ScrollReveal key={achievement.title} delay={index * 0.2}>
                            <Card className={`group glass-card overflow-hidden relative h-full`}>
                            {achievement.important && (
                              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 to-primary rounded-t-2xl z-20"></div>
                            )}
                            <CardContent className="p-6 flex flex-col h-full">
                              <div className="flex items-start justify-between mb-4">
                                <div className="bg-primary/15 p-3 rounded-xl group-hover:bg-primary/25 transition-all duration-300 ring-1 ring-primary/20 group-hover:ring-primary/40 group-hover:shadow-[0_0_15px_rgba(59,91,197,0.15)]">
                                  <Award className="w-5 h-5 text-primary" />
                                </div>
                                <div className="flex items-center gap-2">
                                  <Badge
                                    variant={achievement.status === "Completed" || achievement.status === "Certified" ? "outline" : "secondary"}
                                    className={achievement.status === "Completed" || achievement.status === "Certified" ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/20 ring-1 ring-emerald-500/20" : ""}
                                  >
                                    {achievement.status}
                                  </Badge>
                                  <span className="text-sm text-muted-foreground">{achievement.year}</span>
                                </div>
                              </div>
                              <h4 className="text-lg font-semibold mb-2 transition-colors duration-300">
                                {achievement.title}
                              </h4>
                              <div className="text-primary text-sm font-medium mb-3">
                                {achievement.provider}
                              </div>
                              <p className="text-muted-foreground text-sm mb-4 leading-relaxed flex-grow">
                                {achievement.description}
                              </p>

                              {achievement.link && achievement.link !== '#' && (
                                <a
                                  href={achievement.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center text-sm text-primary cursor-pointer hover:text-primary/80 transition-colors duration-300 mt-auto group/link"
                                >
                                  <ExternalLink className="w-4 h-4 mr-1 group-hover/link:translate-x-0.5 transition-transform" />
                                  Verify Certificate
                                </a>
                              )}
                            </CardContent>
                          </Card>
                          </ScrollReveal>
                        ))}
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {totalSlides > 1 && (
                <>
                  <CarouselPrevious className="absolute left-[-20px] top-1/2 -translate-y-1/2 z-10 hidden md:flex glass-panel border-primary/20 hover:border-primary/40 text-primary" />
                  <CarouselNext className="absolute right-[-20px] top-1/2 -translate-y-1/2 z-10 hidden md:flex glass-panel border-primary/20 hover:border-primary/40 text-primary" />
                </>
              )}
            </Carousel>

            {/* Pagination Buttons */}
            {totalSlides > 1 && (
              <div className="flex justify-center mt-8 gap-2">
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="sm"
                    className={`w-8 h-8 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? 'bg-primary text-primary-foreground shadow-[0_0_15px_rgba(59,91,197,0.4)]'
                        : 'hover:bg-primary/10 hover:text-primary'
                    }`}
                    onClick={() => api?.scrollTo(index)}
                  >
                    {index + 1}
                  </Button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}