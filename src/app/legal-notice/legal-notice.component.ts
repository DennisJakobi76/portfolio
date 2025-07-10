import { Component } from '@angular/core';
import { TranslationService } from '../shared/services/translation.service';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../hero/header/header.component';

@Component({
  selector: 'app-legal-notice',
  imports: [FooterComponent, HeaderComponent],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss',
})
export class LegalNoticeComponent {
  constructor(public translationService: TranslationService) {}
}
