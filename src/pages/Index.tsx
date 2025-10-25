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
      {/* SEO optimized semantic structure */}
      <header>
        <Navigation />
      </header>

      <main className="pt-16 pb-32">
        {/* Hero Section with Carousel */}
        <section className="container mx-auto px-8 py-24" aria-label="Featured Projects">
          <div className="text-center mb-16 space-y-4 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              Building Intelligence
              <span className="block text-transparent bg-clip-text bg-gradient-primary mt-2">
                Across Domains
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              AI engineer crafting solutions from machine learning to design — driven by curiosity, 
              measured by impact.
            </p>
          </div>

          {/* 3D Carousel */}
          <Carousel3D projects={filteredProjects} />
        </section>

        {/* Skills Highlight */}
        <section className="container mx-auto px-8 py-16" aria-label="Technical Skills">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">AI & Engineering Expertise</h2>
            <div className="flex flex-wrap justify-center gap-3">
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
                  className="px-4 py-2 bg-card rounded-full text-sm font-medium shadow-card border border-border"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Domain Filter */}
      <footer>
        <DomainSelector
          domains={domains}
          selectedDomain={selectedDomain}
          onDomainChange={setSelectedDomain}
        />
      </footer>
    </div>
  );
};

export default Index;
