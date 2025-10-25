import { Button } from "@/components/ui/button";
import { User, Menu } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
              <User className="w-5 h-5 text-muted-foreground" />
            </div>
            <span className="text-xl font-semibold tracking-tight">AI Portfolio</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#work" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Work
            </a>
            <a href="#about" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              About
            </a>
            <a href="#contact" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Contact
            </a>
          </div>

          <Button size="sm" className="hidden md:flex bg-gradient-primary text-primary-foreground hover:opacity-90">
            Get in Touch
          </Button>

          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
