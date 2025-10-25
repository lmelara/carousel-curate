interface DomainSelectorProps {
  domains: string[];
  selectedDomain: string;
  onDomainChange: (domain: string) => void;
}

const DomainSelector = ({ domains, selectedDomain, onDomainChange }: DomainSelectorProps) => {
  return (
    <div className="w-full transition-transform duration-300 ease-out">
      <div className="flex items-center justify-center gap-2 md:gap-2.5 flex-wrap px-2 md:px-4">
        {domains.map((domain) => (
          <button
            key={domain}
            onClick={() => onDomainChange(domain)}
            className={`px-4 py-2 md:px-5 md:py-2.5 rounded-full text-[clamp(0.75rem,2.5vw,0.875rem)] font-medium transition-all duration-200 ${
              selectedDomain === domain
                ? "bg-primary text-primary-foreground shadow-card"
                : "bg-muted/40 text-muted-foreground hover:bg-muted/60 hover:text-foreground border border-border/30"
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
