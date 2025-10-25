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
    if (position === "center") return "scale-100 opacity-100 z-20";
    if (position === "left") return "scale-90 opacity-40 -translate-x-12 z-10";
    return "scale-90 opacity-40 translate-x-12 z-10";
  };

  return (
    <div
      className={`absolute top-0 transition-all duration-500 preserve-3d ${getPositionStyles()}`}
      style={{
        left: position === "left" ? "10%" : position === "center" ? "50%" : "90%",
        transform: `translateX(-50%) ${position !== "center" ? `rotateY(${position === "left" ? "15" : "-15"}deg)` : ""}`,
      }}
    >
      <div className="w-[600px] bg-card rounded-2xl overflow-hidden shadow-elevated border border-border">
        {/* Project Image */}
        <div className="aspect-video bg-muted relative overflow-hidden">
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Project Info */}
        <div className="p-8">
          <h3 className="text-3xl font-bold mb-6">{title}</h3>
          
          {/* Metrics */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            {metrics.map((metric, idx) => (
              <div key={idx} className="p-4 bg-muted/50 rounded-lg">
                <div className="text-2xl font-bold text-primary mb-1">{metric.value}</div>
                <div className="text-sm text-muted-foreground">{metric.label}</div>
              </div>
            ))}
          </div>

          {/* Expandable Tab */}
          {isActive && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-full flex items-center justify-center gap-2 py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {isExpanded ? "Show Less" : "Show More Details"}
              <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
            </button>
          )}
        </div>

        {/* Expanded Details */}
        {isActive && isExpanded && (
          <div className="px-8 pb-8 pt-4 border-t border-border animate-slide-up space-y-6">
            <div>
              <h4 className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">Problem</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{problem}</p>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">Solution</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{solution}</p>
            </div>

            {quote && (
              <div className="pl-4 border-l-2 border-primary/30">
                <p className="text-sm italic text-muted-foreground">"{quote}"</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
