import { Button } from "@/components/ui/button";
import { User, Menu } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
              <User className="w-4 h-4 text-primary" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-sm font-semibold tracking-tight">Levi</span>
              <span className="text-sm font-semibold tracking-tight">Melara</span>
            </div>
          </div>

          <div className="flex items-center gap-6 md:gap-8">
            <a href="#work" className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors">
              Work
            </a>
            <a href="#about" className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors">
              About
            </a>
            <a href="#contact" className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors">
              Contact
            </a>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navigation;
