import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ReferencesComponent } from './references/references.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { ImprintComponent } from './imprint/imprint.component';
import { CommonModule } from '@angular/common';
import { ImprintService } from './shared/services/imprint.service';
import { TranslationService } from './shared/services/translation.service';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeroComponent,
    AboutMeComponent,
    TechnologiesComponent,
    PortfolioComponent,
    ReferencesComponent,
    ContactComponent,
    FooterComponent,
    ImprintComponent,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Dennis Jakobi';
  type: 'legal' | 'privacy' = 'legal';

  constructor(
    private imprintService: ImprintService,
    public translationService: TranslationService
  ) {
    this.imprintService.showImprint$.subscribe(({ type }) => {
      this.type = type;
    });
  }

  @HostListener('document:mousemove', ['$event'])
  /**
   * Handles the document mouse move event and updates the CSS custom properties
   * '--x' and '--y' with the current mouse position relative to the window size.
   * The values are given in percent and are used to set the initial position of the
   * cursor on the hero section.
   *
   * @param event The MouseEvent object.
   */
  onMouseMove(event: MouseEvent) {
    const x = (event.clientX / window.innerWidth) * 100 + '%';
    const y = (event.clientY / window.innerHeight) * 100 + '%';

    document.documentElement.style.setProperty('--x', x);
    document.documentElement.style.setProperty('--y', y);
  }

  /**
   * Retrieves the rights array from the translation service for the 'imprint' key.
   * If the value is not an array, an empty array is returned.
   *
   * @returns An array of strings containing the rights.
   */
  getRights(): string[] {
    const rights = this.translationService.getTranslation('imprint', 'rights');
    return Array.isArray(rights) ? rights : [];
  }
}
