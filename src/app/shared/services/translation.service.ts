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
