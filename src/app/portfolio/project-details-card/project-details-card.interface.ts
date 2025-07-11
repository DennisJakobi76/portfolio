export interface ProjectDetails {
  id: string;
  title: string;
  description: {
    en: string;
    de: string;
  };
  technologies: {
    name: string;
    iconSrc: string;
    iconAlt: string;
  }[];
  detailImage: {
    src: string;
    alt: string;
  };
  links: {
    github: string;
    live: string;
  };
}
