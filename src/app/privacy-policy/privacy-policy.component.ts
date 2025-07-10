import { Component } from '@angular/core';
import { TranslationService } from '../shared/services/translation.service';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../hero/header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-privacy-policy',
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss',
})
export class PrivacyPolicyComponent {
  constructor(public translationService: TranslationService) {}

  /**
   * Returns an array of strings containing the rights specified in the translation service.
   * If the translation service does not contain an array of rights, an empty array is returned.
   */
  getRights(): string[] {
    const rights = this.translationService.getTranslation('imprint', 'rights');
    return Array.isArray(rights) ? rights : [];
  }
}
