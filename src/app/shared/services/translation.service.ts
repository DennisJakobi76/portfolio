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
