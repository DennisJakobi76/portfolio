import { Component } from '@angular/core';
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
  constructor(public translationService: TranslationService) {}

  ngOnInit() {
    // Initialer Zustand
    this.translationService.isGerman$.subscribe((isGerman) => {
      const languageSwitch = document.getElementById('mobile-language-switch');
      if (languageSwitch) {
        languageSwitch.classList.toggle('german', isGerman);
      }
    });
  }
  toggleLanguage() {
    this.translationService.isGerman$.pipe(take(1)).subscribe((isGerman) => {
      this.translationService.setLanguage(!isGerman);
    });
  }
}
