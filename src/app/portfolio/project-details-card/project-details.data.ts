import { ProjectDetails } from './project-details-card.interface';

export const JOIN_PROJECT: ProjectDetails = {
  id: '01',
  title: 'Join',
  description: {
    en: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
    de: 'Aufgabenverwaltung inspiriert vom Kanban-System. Erstelle und organisiere Aufgaben mit Drag-and-Drop-Funktionen, weise Benutzer und Kategorien zu.',
  },
  technologies: [
    {
      name: 'JavaScript',
      iconSrc: 'assets/icons/overlay_icons/javascript_overlay.png',
      iconAlt: 'JavaScript Icon',
    },
    {
      name: 'HTML',
      iconSrc: 'assets/icons/overlay_icons/html_overlay.png',
      iconAlt: 'HTML Icon',
    },
    {
      name: 'CSS',
      iconSrc: 'assets/icons/overlay_icons/css_overlay.png',
      iconAlt: 'CSS Icon',
    },
    {
      name: 'Firebase',
      iconSrc: 'assets/icons/overlay_icons/firebase_overlay.png',
      iconAlt: 'Firebase Icon',
    },
  ],
  detailImage: {
    src: 'assets/img/detail_cards_img/join_detail_img.png',
    alt: 'Project Join Image',
  },
  links: {
    github: 'https://github.com/DennisJakobi76/Join',
    live: 'https://join.dennisjakobi.net/',
  },
};

export const EPL_PROJECT: ProjectDetails = {
  id: '02',
  title: 'El Pollo Loco',
  description: {
    en: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
    de: 'Jump-and-Run-Spiel basierend auf objektorientiertem Ansatz. Hilf Pepe, Münzen und Tabasco-Sauce zu finden, um gegen das verrückte Huhn zu kämpfen.',
  },
  technologies: [
    {
      name: 'JavaScript',
      iconSrc: 'assets/icons/overlay_icons/javascript_overlay.png',
      iconAlt: 'JavaScript Icon',
    },
    {
      name: 'HTML',
      iconSrc: 'assets/icons/overlay_icons/html_overlay.png',
      iconAlt: 'HTML Icon',
    },
    {
      name: 'CSS',
      iconSrc: 'assets/icons/overlay_icons/css_overlay.png',
      iconAlt: 'CSS Icon',
    },
  ],
  detailImage: {
    src: 'assets/img/detail_cards_img/el_pollo_loco_detail_img.png',
    alt: 'Project El Pollo Loco Image',
  },
  links: {
    github: 'https://github.com/DennisJakobi76/El_Pollo_Loco',
    live: 'https://elpolloloco.dennisjakobi.net/',
  },
};

export const POKEDEX_PROJECT: ProjectDetails = {
  id: '03',
  title: 'Pokedex',
  description: {
    en: 'An electronic encyclopedia in the Pokémon universe. It collects information about all discovered Pokémon, including their appearance, abilities, and habitats, and serves as an essential tool for trainers exploring the world.',
    de: 'Eine elektronische Enzyklopädie im Pokémon-Universum. Sie sammelt Informationen über alle entdeckten Pokémon, einschließlich ihres Aussehens, ihrer Fähigkeiten und Lebensräume.',
  },
  technologies: [
    {
      name: 'JavaScript',
      iconSrc: 'assets/icons/overlay_icons/javascript_overlay.png',
      iconAlt: 'JavaScript Icon',
    },
    {
      name: 'HTML',
      iconSrc: 'assets/icons/overlay_icons/html_overlay.png',
      iconAlt: 'HTML Icon',
    },
    {
      name: 'CSS',
      iconSrc: 'assets/icons/overlay_icons/css_overlay.png',
      iconAlt: 'CSS Icon',
    },
    {
      name: 'Rest API',
      iconSrc: 'assets/icons/overlay_icons/rest_api_overlay.png',
      iconAlt: 'API Icon',
    },
  ],
  detailImage: {
    src: 'assets/img/detail_cards_img/pokedex_detail_img.png',
    alt: 'Project Pokedex Image',
  },
  links: {
    github: 'https://github.com/DennisJakobi76/Pokedex',
    live: 'https://pokedex.dennisjakobi.net/',
  },
};
