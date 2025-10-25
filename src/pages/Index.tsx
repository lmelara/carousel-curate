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
          <div className="max-w-7xl mx-auto w-full space-y-6 md:space-y-10">
            {/* 3D Carousel */}
            <div className="w-full">
              <Carousel3D projects={filteredProjects} />
            </div>

            {/* Domain Selector - Inside Portfolio Section */}
            <div className="w-full pt-4 md:pt-6">
              <DomainSelector
                domains={domains}
                selectedDomain={selectedDomain}
                onDomainChange={setSelectedDomain}
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="min-h-screen flex items-center px-4 md:px-8 py-16 md:py-24 bg-muted/20">
          <div className="max-w-4xl mx-auto w-full space-y-8 md:space-y-10">
            <h2 className="text-[clamp(1.125rem,4vw,1.875rem)] font-bold tracking-tight">About</h2>
            <div className="space-y-6 text-muted-foreground">
              <p className="text-[clamp(0.875rem,2.8vw,1rem)] leading-[1.5]">
                I'm an AI engineer specializing in building intelligent systems that bridge the gap between
                cutting-edge research and practical applications. My work spans multiple domains, from machine
                learning and computer vision to design and automation.
              </p>
              <p className="text-[clamp(0.875rem,2.8vw,1rem)] leading-[1.5]">
                With expertise in RLHF, LangChain, RAG systems, and transformer models, I focus on creating
                solutions that are not only technically sophisticated but also deliver measurable impact for users
                and businesses.
              </p>
            </div>

            {/* Skills */}
            <div className="pt-8 md:pt-10">
              <h3 className="text-[clamp(1rem,3.5vw,1.25rem)] font-bold mb-6">AI & Engineering Expertise</h3>
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
                    className="px-4 py-2 bg-card/50 rounded-full text-xs md:text-sm font-medium border border-border/30"
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
          <div className="max-w-4xl mx-auto w-full space-y-8 text-center">
            <h2 className="text-[clamp(1.125rem,4vw,1.875rem)] font-bold tracking-tight">Get in Touch</h2>
            <p className="text-[clamp(0.875rem,2.8vw,1rem)] text-muted-foreground max-w-2xl mx-auto leading-[1.5]">
              Interested in collaborating on AI projects or discussing innovative solutions?
              Let's connect and explore possibilities together.
            </p>
            <div className="pt-8">
              <a
                href="mailto:hello@example.com"
                className="inline-block px-8 py-3.5 bg-primary text-primary-foreground font-medium rounded-full hover:bg-primary/90 transition-all duration-200 shadow-card border border-primary/20"
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
