import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  id: string;
  title: string;
  imageSrc: string;
  metrics: { label: string; value: string }[];
  description: string;
  problem: string;
  solution: string;
  quote?: string;
  domains: string[];
}

interface Carousel3DProps {
  projects: Project[];
}

const Carousel3D = ({ projects }: Carousel3DProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const getVisibleProjects = () => {
    const prev = currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    const next = currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    
    return [
      { project: projects[prev], position: "left" as const },
      { project: projects[currentIndex], position: "center" as const },
      { project: projects[next], position: "right" as const },
    ];
  };

  return (
    <div className="relative w-full h-[380px] sm:h-[420px] md:h-[500px] lg:h-[600px] flex items-center justify-center perspective-1000 px-4">
      {/* Navigation Buttons */}
      <Button
        variant="ghost"
        size="icon"
        onClick={handlePrevious}
        className="absolute left-1 sm:left-2 md:left-8 z-30 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background shadow-card"
      >
        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        onClick={handleNext}
        className="absolute right-1 sm:right-2 md:right-8 z-30 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background shadow-card"
      >
        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
      </Button>

      {/* Project Cards */}
      <div className="relative w-full h-full preserve-3d">
        {getVisibleProjects().map(({ project, position }, idx) => (
          <ProjectCard
            key={`${project.id}-${position}`}
            title={project.title}
            imageSrc={project.imageSrc}
            metrics={project.metrics}
            description={project.description}
            problem={project.problem}
            solution={project.solution}
            quote={project.quote}
            isActive={position === "center"}
            position={position}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel3D;
