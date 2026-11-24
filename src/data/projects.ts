export type Project = {
  name: string;
  category: string;
  blurb: string;
  tags: string[];
  href: string;
  linkLabel: string;
  visual: 'pantry' | 'battle';
};

export const projects: Project[] = [
  {
    name: 'Pantry',
    category: 'Personal project / Food',
    blurb: 'Cooking is where I like to experiment away from code. Pantry is the project where those two interests meet.',
    tags: ['Cooking', 'Personal project'],
    href: 'https://github.com/KunalK24/pantry',
    linkLabel: 'Explore Pantry',
    visual: 'pantry',
  },
  {
    name: 'AI Battle Royal',
    category: 'Personal project / Game',
    blurb: 'I wanted coding challenges to be something people could watch unfold. This browser game lets people submit a problem and see AI agents compete to solve it.',
    tags: ['Node.js', 'React', 'TypeScript'],
    href: 'https://github.com/KunalK24/ai-battle-royal',
    linkLabel: 'View on GitHub',
    visual: 'battle',
  },
];
