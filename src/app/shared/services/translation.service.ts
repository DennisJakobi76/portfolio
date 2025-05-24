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
