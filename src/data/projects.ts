export interface Project {
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

export const projectsData: Project[] = [
  {
    id: "ai-chatbot",
    title: "AI-Powered Customer Support",
    imageSrc: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    metrics: [
      { label: "Reduced support tickets", value: "40%" },
      { label: "Improved satisfaction", value: "30%" },
    ],
    description: "Enterprise chatbot using RLHF and RAG for context-aware responses",
    problem: "Customer support team overwhelmed with 500+ daily tickets, leading to 24-hour response times and declining satisfaction scores.",
    solution: "Built fine-tuned LLM with company knowledge base, implementing RLHF feedback loops and LangChain orchestration for multi-step reasoning. Deployed with 99.9% uptime.",
    quote: "Response time dropped from 24 hours to under 2 minutes. Our team can finally focus on complex issues.",
    domains: ["AI", "ML", "Web Dev"],
  },
  {
    id: "computer-vision",
    title: "Medical Image Analysis System",
    imageSrc: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    metrics: [
      { label: "Diagnostic accuracy", value: "94%" },
      { label: "Processing speed increase", value: "10x" },
    ],
    description: "CNN-based system for early disease detection in radiology",
    problem: "Radiologists spending 6+ hours daily on routine scans, creating bottlenecks in urgent case diagnosis.",
    solution: "Developed custom Vision Transformer with attention mechanisms, trained on 100K+ labeled medical images. Integrated DICOM support and real-time inference pipeline.",
    quote: "This system flags anomalies we might have missed. It's like having an extra expert in the room.",
    domains: ["AI", "CV", "ML"],
  },
  {
    id: "game-automation",
    title: "Intelligent Game Testing Framework",
    imageSrc: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80",
    metrics: [
      { label: "Test coverage increase", value: "85%" },
      { label: "Bug detection rate", value: "3x" },
    ],
    description: "RL agents for automated gameplay testing and balance optimization",
    problem: "Manual QA testing missing edge cases and taking 2 weeks per build, delaying releases.",
    solution: "Built reinforcement learning agents using PPO algorithm to explore game states. Implemented distributed testing across 50+ virtual environments with automated reporting.",
    quote: "Our agents found exploits in 3 days that took human testers 2 months to discover.",
    domains: ["AI", "Game Design", "Automation"],
  },
  {
    id: "voice-ai",
    title: "Voice-Activated Smart Assistant",
    imageSrc: "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=800&q=80",
    metrics: [
      { label: "Voice recognition accuracy", value: "96%" },
      { label: "Task completion rate", value: "88%" },
    ],
    description: "Multi-modal AI with speech-to-text, NLU, and TTS synthesis",
    problem: "Existing voice assistants failing to understand domain-specific terminology and context in noisy industrial environments.",
    solution: "Fine-tuned Whisper model on industry audio data, integrated with custom NLU pipeline and ElevenLabs TTS. Implemented wake-word detection and conversation memory.",
    quote: "Finally, a voice system that understands our technical jargon and accents.",
    domains: ["AI", "ML", "Automation"],
  },
  {
    id: "web-app",
    title: "Real-Time Collaboration Platform",
    imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    metrics: [
      { label: "User engagement", value: "+120%" },
      { label: "Latency reduction", value: "70%" },
    ],
    description: "WebSocket-based platform with AI-powered suggestions",
    problem: "Remote teams struggling with document collaboration lag and version conflicts across time zones.",
    solution: "Architected real-time sync using CRDTs, integrated AI writing assistant with GPT-4, and built conflict resolution engine. Deployed on edge network for <50ms latency.",
    quote: "It's like Google Docs but actually understands what we're trying to write.",
    domains: ["Web Dev", "AI", "Design"],
  },
  {
    id: "design-system",
    title: "AI-Enhanced Design System",
    imageSrc: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
    metrics: [
      { label: "Design consistency", value: "+95%" },
      { label: "Development time saved", value: "60%" },
    ],
    description: "Component library with AI-driven accessibility and theme generation",
    problem: "Design team creating one-off components, leading to inconsistent UX and maintenance nightmares.",
    solution: "Built comprehensive design system with 80+ components, automated accessibility testing, and AI-powered color palette generation. Includes Figma plugin and Storybook docs.",
    quote: "Our product finally looks cohesive across all platforms. The AI theme generator is magic.",
    domains: ["Design", "Web Dev", "AI"],
  },
];

export const domains = ["All", "AI", "ML", "Web Dev", "Design", "CV", "Automation", "Game Design"];

export const getProjectsByDomain = (domain: string): Project[] => {
  if (domain === "All") return projectsData;
  return projectsData.filter((project) => project.domains.includes(domain));
};
