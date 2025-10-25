interface DomainSelectorProps {
  domains: string[];
  selectedDomain: string;
  onDomainChange: (domain: string) => void;
}

const DomainSelector = ({ domains, selectedDomain, onDomainChange }: DomainSelectorProps) => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-center gap-1.5 md:gap-2 flex-wrap px-2 md:px-4">
        {domains.map((domain) => (
          <button
            key={domain}
            onClick={() => onDomainChange(domain)}
            className={`px-3 py-1.5 md:px-5 md:py-2.5 lg:px-6 lg:py-3 rounded-full text-[clamp(0.75rem,2.5vw,0.875rem)] font-medium transition-all duration-300 ${
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
  );
};

export default DomainSelector;
