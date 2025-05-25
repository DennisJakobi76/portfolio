import { Component } from '@angular/core';
import { ImprintService } from '../shared/services/imprint.service';
import { TranslationService } from '../shared/services/translation.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  constructor(
    private imprintService: ImprintService,
    public translationService: TranslationService
  ) {}

  showImprint(event: Event) {
    event.preventDefault();
    this.imprintService.toggleImprint('legal');
  }
}
