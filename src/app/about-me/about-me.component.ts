import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoCardComponent } from '../cards/info-card/info-card.component';
import { TranslationService } from '../shared/services/translation.service';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule, InfoCardComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})
export class AboutMeComponent {
  constructor(public translationService: TranslationService) {}

  /**
   * Retrieves the title for the 'About Me' section in the current language.
   *
   * @returns {string} The translated title string.
   */

  getTitle(): string {
    return this.translationService.getTranslation('aboutMe', 'title') as string;
  }

  /**
   * Retrieves the headline for the 'About Me' section in the current language.
   *
   * @returns {string} The translated headline string.
   */
  getHeadline(): string {
    return this.translationService.getTranslation(
      'aboutMe',
      'headline'
    ) as string;
  }
}
