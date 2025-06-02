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
        [key: string]: string | string[]; // Erlaubt sowohl Strings als auch String-Arrays
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
          'Ich gehe Herausforderungen strukturiert an und konzentriere mich auf das Wesentliche. Analytisches Denken, Neugier und der Anspruch, die bestmögliche Lösung zu finden – oft im Team – begleiten mich dabei.',
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
          'Entdecke eine Auswahl meiner Arbeiten - Probiere die Projekte gerne aus, um meine Fähigkeiten in Aktion zu sehen.',
      },
    },
    projectDetails: {
      en: {
        nextProject: 'Next project',
      },
      de: {
        nextProject: 'Nächstes Projekt',
      },
    },
    references: {
      en: {
        title: 'What my colleagues say about me',
      },
      de: {
        title: 'Was meine Kollegen über mich sagen',
      },
    },
    contact: {
      en: {
        title: 'Contact me',
        headline: "Let's work together",
        subtitle: 'Got a problem to solve?',
        description:
          "Whether you have an idea ready to come to life or you're facing a technical challenge – I'm here to help. With a passion for modern web technologies and a focus on tailored solutions, I'll support you in bringing your project to success.",
        buildTogether: "Let's build something",
        somethingGreat: 'great together!',
        needDeveloper: 'Need a Frontend developer?',
        letsTalk: "Let's talk!",
        nameQuestion: "What's your name?",
        namePlaceholder: 'Your name goes here',
        nameError: 'Oops! It seems your name is missing.',
        emailQuestion: "What's your email?",
        emailPlaceholder: 'youremail@email.com',
        emailRequired: 'Hoppla! Your email is required.',
        emailInvalid: 'Please enter a valid email address.',
        messageQuestion: 'How can I help you?',
        messagePlaceholder: 'Hello Dennis, I am interested in...',
        messageError: 'What do you want to develop?',
        policyText: "I've read the",
        policyLink: 'privacy policy',
        policyAgree: 'and agree to the processing of my data as outlined.',
        policyError: 'Please accept the privacy policy to continue.',
        submit: 'Say Hello ;)',
      },
      de: {
        title: 'Kontakt',
        headline: 'Lass es uns gemeinsam angehen',
        subtitle: 'Es gibt ein Problem zu lösen?',
        description:
          'Ob du eine Idee hast, die zum Leben erweckt werden soll, oder vor einer technischen Herausforderung stehst – ich bin hier, um zu helfen. Mit Leidenschaft für moderne Webtechnologien und Fokus auf maßgeschneiderte Lösungen unterstütze ich dich dabei, dein Projekt zum Erfolg zu führen.',
        buildTogether: 'Entwickeln wir ',
        somethingGreat: 'gemeinsam Großartiges!',
        needDeveloper: 'Frontend-Entwickler gesucht?',
        letsTalk: 'Lass uns reden!',
        nameQuestion: 'Wie ist dein Name?',
        namePlaceholder: 'Hier gehört dein Name hin',
        nameError: 'Ups! Dein Name fehlt noch.',
        emailQuestion: 'Wie lautet deine E-Mail?',
        emailPlaceholder: 'deine@email.de',
        emailRequired: 'Hoppla! Deine E-Mail wird benötigt.',
        emailInvalid: 'Bitte gib eine gültige E-Mail-Adresse ein.',
        messageQuestion: 'Wie kann ich dir helfen?',
        messagePlaceholder: 'Hallo Dennis, ich interessiere mich für...',
        messageError: 'Was möchtest du entwickeln?',
        policyText: 'Ich habe die',
        policyLink: 'Datenschutzerklärung',
        policyAgree:
          'gelesen und stimme der Verarbeitung meiner Daten wie beschrieben zu.',
        policyError:
          'Bitte akzeptiere die Datenschutzerklärung um fortzufahren.',
        submit: 'Sag Hallo ;)',
      },
    },
    footer: {
      en: {
        job: 'Web Developer',
        location: 'NRW Germany',
        legalNotice: 'Legal Notice',
      },
      de: {
        job: 'Web Entwickler',
        location: 'NRW Deutschland',
        legalNotice: 'Impressum',
      },
    },
    imprint: {
      en: {
        legalNoticeTitle: 'Legal Notice',
        privacyPolicyTitle: 'Privacy Policy',
        phone: 'Phone',
        email: 'Email',
        // Privacy Policy texts
        privacyIntro:
          'Protecting your personal data is very important to me. I therefore process your data exclusively based on the applicable legal regulations (GDPR, TMG). This privacy policy informs you about the most important aspects of data processing on this website.',
        generalTitle: '1. General Information',
        generalText:
          'This website serves as a personal portfolio page and provides information about my work as a web developer. No cookies are set and no tracking technologies are used when you visit this site.',
        contactFormTitle: '2. Contact Form',
        contactFormText:
          'If you contact me via the contact form on this website, the information you provide (name, email address, message) will be stored for the purpose of processing your request and in case of follow-up questions.',
        dataSharing:
          'This data will not be shared with third parties without your explicit consent.',
        legalBasis:
          'The legal basis for processing your data is Art. 6(1)(b) GDPR (processing necessary for the performance of pre-contractual measures).',
        rightsTitle: '3. Your Rights',
        rightsIntro: 'You have the following rights under the GDPR:',
        rights: [
          'Right of access (Art. 15 GDPR)',
          'Right to rectification (Art. 16 GDPR)',
          'Right to erasure (Art. 17 GDPR)',
          'Right to restriction of processing (Art. 18 GDPR)',
          'Right to data portability (Art. 20 GDPR)',
          'Right to object to processing (Art. 21 GDPR)',
          'Right to lodge a complaint with the competent supervisory authority',
        ],
        rightsNote:
          'If you believe that the processing of your data violates data protection law or your rights have been otherwise infringed, you can contact the relevant data protection authority.',
        contactTitle: '4. Contact',
        responsiblePerson: 'Responsible for data processing on this website:',
      },
      de: {
        legalNoticeTitle: 'Impressum',
        privacyPolicyTitle: 'Datenschutzerklärung',
        phone: 'Telefon',
        email: 'E-Mail',
        // Privacy Policy texts
        privacyIntro:
          'Der Schutz Ihrer personenbezogenen Daten ist mir sehr wichtig. Ich verarbeite Ihre Daten daher ausschließlich auf Grundlage der geltenden gesetzlichen Bestimmungen (DSGVO, TMG). In dieser Datenschutzerklärung informiere ich Sie über die wichtigsten Aspekte der Datenverarbeitung auf dieser Website.',
        generalTitle: '1. Allgemeine Informationen',
        generalText:
          'Diese Website dient als persönliche Portfolio-Seite und informiert über meine Arbeit als Webentwickler. Bei Ihrem Besuch werden keine Cookies gesetzt und keine Tracking-Technologien verwendet.',
        contactFormTitle: '2. Kontaktformular',
        contactFormText:
          'Wenn Sie mich über das Kontaktformular auf dieser Website kontaktieren, werden die von Ihnen angegebenen Informationen (Name, E-Mail-Adresse, Nachricht) zum Zweck der Bearbeitung Ihrer Anfrage und für den Fall von Anschlussfragen gespeichert.',
        dataSharing:
          'Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben.',
        legalBasis:
          'Die Rechtsgrundlage für die Verarbeitung Ihrer Daten ist Art. 6 Abs. 1 lit. b DSGVO (Verarbeitung zur Durchführung vorvertraglicher Maßnahmen).',
        rightsTitle: '3. Ihre Rechte',
        rightsIntro: 'Sie haben nach der DSGVO folgende Rechte:',
        rights: [
          'Recht auf Auskunft (Art. 15 DSGVO)',
          'Recht auf Berichtigung (Art. 16 DSGVO)',
          'Recht auf Löschung (Art. 17 DSGVO)',
          'Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)',
          'Recht auf Datenübertragbarkeit (Art. 20 DSGVO)',
          'Recht auf Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)',
          'Recht auf Beschwerde bei der zuständigen Aufsichtsbehörde',
        ],
        rightsNote:
          'Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt oder Ihre datenschutzrechtlichen Ansprüche sonst in einer Weise verletzt worden sind, können Sie sich bei der zuständigen Datenschutzbehörde beschweren.',
        contactTitle: '4. Kontakt',
        responsiblePerson:
          'Verantwortlich für die Datenverarbeitung auf dieser Website:',
      },
    },
    // Insert further sections here as needed
  };

  /**
   * Sets the current language of the application.
   *
   * @param {boolean} isGerman - If true, switches the language to German; if false, switches to English.
   */

  setLanguage(isGerman: boolean) {
    this.isGermanSubject.next(isGerman);
  }

  /**
   * Retrieves a translation for a given key from the given section.
   *
   * @param {string} section - The section of the translation object to retrieve the translation from.
   * @param {string} key - The key of the translation to retrieve.
   * @returns {string | string[]} The translation string or array of strings associated with the key.
   */
  getTranslation(section: string, key: string): string | string[] {
    const language = this.isGermanSubject.value ? 'de' : 'en';
    return this.translations[section][language][key];
  }
}
