type ButtonLinkData = {
  href: string;
  label: string;
  variant?: 'ghost';
  download?: boolean;
};

type SiteData = {
  name: string;
  location: string;
  role: string;
  seo: {
    title: string;
  };
  nav: ButtonLinkData[];
  hero: {
    eyebrow: string;
    title: {
      line: string;
    };
    lede: string;
    actions: ButtonLinkData[];
  };
  about: string[];
  cooking: {
    intro: string;
  };
  contact: {
    title: string;
    body: string;
    links: ButtonLinkData[];
  };
};

export const site = {
  name: 'Kunal Kathuria',
  location: 'LA',
  role: 'software engineer',
  seo: {
    title: 'Kunal - Software Engineer',
  },
  nav: [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#cooking', label: 'Cooking' },
    { href: '#contact', label: 'Contact' },
  ],
  hero: {
    eyebrow: 'Software Engineer',
    title: {
      line: "Hi, I'm Kunal!",
    },
    lede:
      "I've worked for 6+ years on live service platforms and developer tooling at Playstation and Blizzard Entertainment. I enjoy solving challenging technical problems and experimenting with new tools. Off the clock you'll find me coming up with new recipes and trying to climb in TFT.",
    actions: [
      { href: '#projects', label: 'See my work' },
      { href: '#contact', label: 'Get in touch', variant: 'ghost' },
    ],
  },
  about: [
    "I'm a senior backend engineer who's spent most of my career supporting live service games and building tools to empower other engineers. At Blizzard, I worked on the server and gameplay teams to bring new content in Hearthstone to millions of players. On the Playstation team, I worked on integrating ML models into the Trust and Safety platform to detect harmful content shared on the Playstation Network.",
    "Lately I've been working on integrating models into real use cases for engineers, from model evaluation to LLM-generated test cases.",
    "Away from my IDE, cooking and music are my passion. You'll find me either putting together a new playlist or experimenting with whatever's in my fridge.",
  ],
  cooking: {
    intro:
      "A growing collection of things I've made. No polished food blog, just pictures and notes for future iterations.",
  },
  contact: {
    title: "Let's talk.",
    body: "I'm open to senior backend and AI-platform roles. The fastest way to reach me is email - or find me in the usual places.",
    links: [
      { href: 'mailto:kunaldk98@gmail.com', label: 'Email me' },
      { href: 'https://github.com/KunalK24', label: 'GitHub', variant: 'ghost' },
      { href: 'https://www.linkedin.com/in/kathuria-kunal/', label: 'LinkedIn', variant: 'ghost' },
      { href: '/Website_Resume.pdf', label: 'View resume', variant: 'ghost' },
    ],
  },
} satisfies SiteData;

export type Site = typeof site;
