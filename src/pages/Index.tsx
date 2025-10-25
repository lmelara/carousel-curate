import { useState } from "react";
import Navigation from "@/components/Navigation";
import Carousel3D from "@/components/Carousel3D";
import DomainSelector from "@/components/DomainSelector";
import { domains, getProjectsByDomain } from "@/data/projects";

const Index = () => {
  const [selectedDomain, setSelectedDomain] = useState("All");
  const filteredProjects = getProjectsByDomain(selectedDomain);

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />

      <main className="pt-16">
        {/* Portfolio Section */}
        <section id="work" className="min-h-screen flex flex-col justify-center px-4 md:px-8 py-16 md:py-24">
          <div className="max-w-7xl mx-auto w-full space-y-8 md:space-y-16">
            <div className="text-center space-y-2 md:space-y-3 lg:space-y-4 animate-fade-in">
              <h1 className="text-[clamp(1.375rem,5vw,3.75rem)] font-bold tracking-tight leading-[1.3]">
                Building Intelligence
                <span className="block text-transparent bg-clip-text bg-gradient-primary mt-1">
                  Across Domains
                </span>
              </h1>
              <p className="text-[clamp(0.875rem,3vw,1.125rem)] text-muted-foreground max-w-2xl mx-auto px-4 leading-relaxed">
                AI engineer crafting solutions from machine learning to design — driven by curiosity, 
                measured by impact.
              </p>
            </div>

            {/* 3D Carousel */}
            <div className="w-full">
              <Carousel3D projects={filteredProjects} />
            </div>

            {/* Domain Selector - Inside Portfolio Section */}
            <div className="w-full pt-4 md:pt-6 lg:pt-8">
              <DomainSelector
                domains={domains}
                selectedDomain={selectedDomain}
                onDomainChange={setSelectedDomain}
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="min-h-screen flex items-center px-4 md:px-8 py-16 md:py-24 bg-muted/30">
          <div className="max-w-4xl mx-auto w-full space-y-6 md:space-y-8">
            <h2 className="text-[clamp(1.125rem,4vw,2.25rem)] font-bold tracking-tight">About</h2>
            <div className="space-y-4 md:space-y-6 text-muted-foreground">
              <p className="text-[clamp(0.875rem,3vw,1.125rem)] leading-relaxed">
                I'm an AI engineer specializing in building intelligent systems that bridge the gap between 
                cutting-edge research and practical applications. My work spans multiple domains, from machine 
                learning and computer vision to design and automation.
              </p>
              <p className="text-[clamp(0.875rem,3vw,1.125rem)] leading-relaxed">
                With expertise in RLHF, LangChain, RAG systems, and transformer models, I focus on creating 
                solutions that are not only technically sophisticated but also deliver measurable impact for users 
                and businesses.
              </p>
            </div>

            {/* Skills */}
            <div className="pt-6 md:pt-8">
              <h3 className="text-[clamp(1rem,3.5vw,1.5rem)] font-bold mb-4 md:mb-6">AI & Engineering Expertise</h3>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {[
                  "RLHF",
                  "LangChain",
                  "Voice AI",
                  "Computer Vision",
                  "Fine-tuning",
                  "RAG Systems",
                  "Reinforcement Learning",
                  "Transformer Models",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 md:px-4 md:py-2 bg-card rounded-full text-xs md:text-sm font-medium shadow-card border border-border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen flex items-center px-4 md:px-8 py-16 md:py-24">
          <div className="max-w-4xl mx-auto w-full space-y-6 md:space-y-8 text-center">
            <h2 className="text-[clamp(1.125rem,4vw,2.25rem)] font-bold tracking-tight">Get in Touch</h2>
            <p className="text-[clamp(0.875rem,3vw,1.125rem)] text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Interested in collaborating on AI projects or discussing innovative solutions? 
              Let's connect and explore possibilities together.
            </p>
            <div className="pt-8">
              <a 
                href="mailto:hello@example.com" 
                className="inline-block px-8 py-4 bg-gradient-primary text-primary-foreground font-medium rounded-full hover:opacity-90 transition-opacity shadow-card"
              >
                Start a Conversation
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
