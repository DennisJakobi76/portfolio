import { ProjectDetails } from './project-details-card.interface';

export const JOIN_PROJECT: ProjectDetails = {
  id: '01',
  title: 'Join',
  description:
    'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
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
    live: '*',
  },
};
