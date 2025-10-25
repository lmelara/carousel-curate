import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface ProjectCardProps {
  title: string;
  imageSrc: string;
  metrics: {
    label: string;
    value: string;
  }[];
  description: string;
  problem: string;
  solution: string;
  quote?: string;
  isActive: boolean;
  position: "left" | "center" | "right";
}

const ProjectCard = ({
  title,
  imageSrc,
  metrics,
  description,
  problem,
  solution,
  quote,
  isActive,
  position,
}: ProjectCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getPositionStyles = () => {
    if (position === "center") return "scale-100 md:scale-90 opacity-100 z-20";
    if (position === "left") return "scale-50 md:scale-75 opacity-30 -translate-x-8 md:-translate-x-12 z-10";
    return "scale-50 md:scale-75 opacity-30 translate-x-8 md:translate-x-12 z-10";
  };

  return (
    <div
      className={`absolute top-0 transition-all duration-500 preserve-3d ${getPositionStyles()}`}
      style={{
        left: position === "left" ? "10%" : position === "center" ? "50%" : "90%",
        transform: `translateX(-50%) ${position !== "center" ? `rotateY(${position === "left" ? "15" : "-15"}deg)` : ""}`,
      }}
    >
      <div className="w-[280px] sm:w-[320px] md:w-[400px] lg:w-[500px] bg-card rounded-lg md:rounded-2xl overflow-hidden shadow-elevated border border-border">
        {/* Project Image */}
        <div className="aspect-video bg-muted relative overflow-hidden">
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Project Info */}
        <div className="p-4 md:p-6 lg:p-8">
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4 lg:mb-6 leading-tight">{title}</h3>
          
          {/* Metrics */}
          <div className="grid grid-cols-2 gap-2 md:gap-3 lg:gap-4 mb-3 md:mb-4 lg:mb-6">
            {metrics.map((metric, idx) => (
              <div key={idx} className="p-2 md:p-3 lg:p-4 bg-muted/50 rounded-md lg:rounded-lg">
                <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-primary mb-0.5 md:mb-1">{metric.value}</div>
                <div className="text-xs md:text-sm text-muted-foreground leading-snug">{metric.label}</div>
              </div>
            ))}
          </div>

          {/* Expandable Tab */}
          {isActive && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-full flex items-center justify-center gap-1.5 md:gap-2 py-2 md:py-3 text-xs md:text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {isExpanded ? "Show Less" : "Show More Details"}
              <ChevronDown className={`w-3 h-3 md:w-4 md:h-4 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
            </button>
          )}
        </div>

        {/* Expanded Details */}
        {isActive && isExpanded && (
          <div className="px-4 md:px-6 lg:px-8 pb-4 md:pb-6 lg:pb-8 pt-2 md:pt-3 lg:pt-4 border-t border-border animate-slide-up space-y-3 md:space-y-4 lg:space-y-6">
            <div>
              <h4 className="text-xs md:text-sm font-semibold text-primary uppercase tracking-wide mb-1.5 md:mb-2">Problem</h4>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{problem}</p>
            </div>
            
            <div>
              <h4 className="text-xs md:text-sm font-semibold text-primary uppercase tracking-wide mb-1.5 md:mb-2">Solution</h4>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{solution}</p>
            </div>

            {quote && (
              <div className="pl-3 md:pl-4 border-l-2 border-primary/30">
                <p className="text-xs md:text-sm italic text-muted-foreground">"{quote}"</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
