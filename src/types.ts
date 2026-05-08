export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

export interface PortfolioContent {
  hero: {
    slogan: string;
    description: string;
  };
  about: {
    title: string;
    details: string;
    skills: string[];
    values: string;
  };
  works: {
    title: string;
    projects: Project[];
  };
  contact: {
    title: string;
    email: string;
    instagram: string;
    linkedin: string;
  };
}

export interface ThemeConfig {
  accentColor: string;
  fontStyle: 'sans' | 'serif';
  heroBgImage: string;
}
