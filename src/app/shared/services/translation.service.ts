import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  private isGermanSubject = new BehaviorSubject<boolean>(false);
  isGerman$ = this.isGermanSubject.asObservable();

  translations: {
    [section: string]: {
      [language: string]: {
        [key: string]: string;
      };
    };
  } = {
    header: {
      en: {
        aboutMe: 'About me',
        skills: 'Skills',
        projects: 'Projects',
      },
      de: {
        aboutMe: 'Über mich',
        skills: 'Fähigkeiten',
        projects: 'Projekte',
      },
    },
    hero: {
      en: {
        title: 'Fullstack Developer',
        checkWork: 'Check my work',
        contact: 'Contact me',
      },
      de: {
        title: 'Fullstack Entwickler',
        checkWork: 'Meine Projekte',
        contact: 'Kontakt',
      },
    },
    marquee: {
      en: {
        content:
          '* Fullstack Developer * Employed And Happy * Based In North Rhine-Westphalia * Open To Interesting Contacts *',
      },
      de: {
        content:
          '* Fullstack Entwickler * Angestellt Und Glücklich * Ansässig In Nordrhein-Westfalen * Offen Für Interessante Kontakte *',
      },
    },
    aboutMe: {
      en: {
        title: 'Who I Am',
        headline: 'About me',
        intro: `Hi, I'm Dennis – a code enthusiast with a passion for modern web technologies and well-designed software. I've been developing since 2016, rooted in backend (.NET/C#) and increasingly drawn to the frontend. What drives me is the joy of coding: creating things, solving problems creatively, and constantly learning – that's what this job means to me.`,
        location:
          'Based in North Rhine-Westphalia. Loving the opportunity to work remotely all over the world.',
        evolution:
          "The tech world is constantly evolving – and that's exactly what fascinates me. New tools and concepts motivate me to stay curious and continuously improve my skills.",
        mindset:
          'I tackle challenges with a structured mindset and a focus on what truly matters. Analytical thinking, curiosity, and the drive to find the best possible solution – often as part of a team – guide me along the way.',
      },
      de: {
        title: 'Wer ich bin',
        headline: 'Über mich',
        intro: `Hi, ich bin Dennis – Code-Enthusiast mit Fokus auf moderne Webtechnologien und durchdachte Softwarelösungen. Seit 2014 entwickle ich Software, mit Wurzeln im Backend (.NET/C#) und wachsender Begeisterung fürs Frontend. Coden bedeutet für mich: kreativ sein, lernen und Lösungen schaffen.`,
        location:
          'Ansässig in Nordrhein-Westfalen. Ich schätze die Möglichkeit, weltweit remote zu arbeiten.',
        evolution:
          'Die Tech-Welt entwickelt sich ständig weiter – genau das fasziniert mich. Neue Tools und Konzepte motivieren mich, ständig am Ball zu bleiben und meine Fähigkeiten gezielt weiterzuentwickeln.',
        mindset:
          'Ich gehe Herausforderungen strukturiert an und konzentriere mich auf das Wesentliche. Analytisches Denken, Neugier und der Anspruch, die bestmögliche Lösung zu finden – oft im Team – begleiten mich dabei',
      },
    },
    technologies: {
      en: {
        title: 'Technologies',
        headline: 'Skill Set',
        description: `I'm passionate about working with modern front-end technologies such as HTML, CSS, JavaScript, TypeScript, Angular, and SCSS. I also bring experience in backend development, especially with C#, .NET, and databases using SQL. For me, keeping up with the latest developments isn't just important – I genuinely enjoy exploring new technologies and continuously growing my skill set. I see the rapid changes in web development as an exciting opportunity to keep learning and evolving.`,
        needSkill: 'You need',
        anotherSkill: 'another skill?',
        contactText:
          'Feel free to contact me. I look forward to expanding on my previous knowledge.',
        letsTalk: 'Let`s Talk',
      },
      de: {
        title: 'Technologien',
        headline: 'Fähigkeiten',
        description: `Ich arbeite leidenschaftlich gern mit modernen Frontend-Technologien wie HTML, CSS, JavaScript, TypeScript, Angular und SCSS. Gleichzeitig bringe ich Erfahrung im Backend mit, vor allem mit C#, .NET sowie Datenbanken und SQL. Für mich ist es nicht nur wichtig, mit aktuellen Entwicklungen Schritt zu halten – ich habe richtig Freude daran, neue Technologien auszuprobieren und mich stetig weiterzuentwickeln. Die schnelle Veränderung in der Webentwicklung sehe ich als spannende Chance, ständig dazuzulernen.`,
        needSkill: 'Du brauchst',
        anotherSkill: 'andere Fähigkeiten?',
        contactText:
          'Kontaktiere mich gerne. Ich freue mich darauf, mein bisheriges Wissen zu erweitern.',
        letsTalk: 'Lass uns reden',
      },
    },
    portfolio: {
      en: {
        title: 'Portfolio',
        headline: 'Featured Projects',
        description:
          'Explore a selection of my work here - Interact with projects to see my skills in action.',
      },
      de: {
        title: 'Portfolio',
        headline: 'Aktuelle Projekte',
        description:
          'Entdecke eine Auswahl meiner Arbeiten - Interagiere mit den Projekten, um meine Fähigkeiten in Aktion zu sehen.',
      },
    },
    // Weitere Übersetzungen hier hinzufügen...
  };

  setLanguage(isGerman: boolean) {
    this.isGermanSubject.next(isGerman);
  }

  getTranslation(section: string, key: string): string {
    const language = this.isGermanSubject.value ? 'de' : 'en';
    return this.translations[section][language][key];
  }
}
