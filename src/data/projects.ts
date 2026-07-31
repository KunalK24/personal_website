export type Project = {
  name: string;
  blurb: string;
  tags: string[];
  links: { label: string; href: string }[];
  status?: 'in progress';
};

// Swap hrefs for real repo/demo URLs when ready.
export const projects: Project[] = [
  {
    name: 'EvalForge',
    blurb:
      'A TypeScript SDK for benchmarking LLMs across OpenAI, Anthropic, and Ollama — with regression diffing and LLM-as-judge scoring so you can catch quality drift between model versions.',
    tags: ['TypeScript', 'LLM eval', 'SDK'],
    links: [{ label: 'GitHub', href: 'https://github.com/KunalK24/evalforge' }],
  },
  {
    name: 'TestForge',
    blurb:
      'Automated test generation using local LLMs. Parses your source with an AST, then drives Llama 3 through Ollama to write tests that actually match the code — no API bill required.',
    tags: ['Python', 'AST', 'Ollama'],
    links: [{ label: 'GitHub', href: 'https://github.com/KunalK24/testforge' }],
  },
  {
    name: 'AI Battle Royal',
    blurb:
      'A browser-based spectator game where humans submit programming challenges and AI coding agents compete to solve them.',
     tags: ['Node.js', 'React', 'TypeScript'],
     links: [{ label: 'Github', href: 'https://github.com/KunalK24/ai-battle-royal' }], 
  },
];
