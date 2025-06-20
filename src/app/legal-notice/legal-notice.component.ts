import { Component } from '@angular/core';
import { TranslationService } from '../shared/services/translation.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-legal-notice',
  imports: [RouterLink],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss',
})
export class LegalNoticeComponent {
  constructor(public translationService: TranslationService) {}
}
