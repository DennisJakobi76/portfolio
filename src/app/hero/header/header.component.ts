import { Component, OnInit } from '@angular/core';
import { TranslationService } from '../../shared/services/translation.service';
import { CommonModule } from '@angular/common';
import { take } from 'rxjs/operators';
import { MobileMenuComponent } from './mobile-menu/mobile-menu.component'; // Neuer Import für take

@Component({
  selector: 'app-header',
  imports: [CommonModule, MobileMenuComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(public translationService: TranslationService) {}

  ngOnInit() {
    // Initialer Zustand
    this.translationService.isGerman$.subscribe((isGerman) => {
      const languageSwitch = document.getElementById('language-switch');
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
