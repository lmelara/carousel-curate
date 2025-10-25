interface DomainSelectorProps {
  domains: string[];
  selectedDomain: string;
  onDomainChange: (domain: string) => void;
}

const DomainSelector = ({ domains, selectedDomain, onDomainChange }: DomainSelectorProps) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-md border-t border-border">
      <div className="container mx-auto px-8 py-6">
        <div className="flex items-center justify-center gap-2 flex-wrap">
          {domains.map((domain) => (
            <button
              key={domain}
              onClick={() => onDomainChange(domain)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedDomain === domain
                  ? "bg-gradient-primary text-primary-foreground shadow-card scale-105"
                  : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
              }`}
            >
              {domain}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DomainSelector;
