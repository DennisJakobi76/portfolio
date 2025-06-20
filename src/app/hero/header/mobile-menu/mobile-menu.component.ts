import { Component, EventEmitter, Output } from '@angular/core';
import { TranslationService } from '../../../shared/services/translation.service';
import { take } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mobile-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss'],
})
export class MobileMenuComponent {
  @Output() closeMenu = new EventEmitter<void>();

  constructor(public translationService: TranslationService) {}

  /**
   * Toggles the language switch button class based on the current language.
   */
  ngOnInit() {
    this.translationService.isGerman$.subscribe((isGerman) => {
      const languageSwitch = document.getElementById('mobile-language-switch');
      if (languageSwitch) {
        languageSwitch.classList.toggle('german', isGerman);
      }
    });
  }

  /**
   * Toggles the language of the application between German and the default language
   * by subscribing to the current language state and setting it to the opposite value.
   */
  toggleLanguage() {
    this.translationService.isGerman$.pipe(take(1)).subscribe((isGerman) => {
      this.translationService.setLanguage(!isGerman);
    });
  }
}
