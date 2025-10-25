interface DomainSelectorProps {
  domains: string[];
  selectedDomain: string;
  onDomainChange: (domain: string) => void;
}

const DomainSelector = ({ domains, selectedDomain, onDomainChange }: DomainSelectorProps) => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-center gap-2 flex-wrap px-4">
        {domains.map((domain) => (
          <button
            key={domain}
            onClick={() => onDomainChange(domain)}
            className={`px-4 py-2 md:px-6 md:py-3 rounded-full text-xs md:text-sm font-medium transition-all duration-300 ${
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
