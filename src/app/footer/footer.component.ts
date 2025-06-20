import { Component } from '@angular/core';
import { ImprintService } from '../shared/services/imprint.service';
import { TranslationService } from '../shared/services/translation.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  constructor(
    private imprintService: ImprintService,
    public translationService: TranslationService
  ) {}

  /**
   * Toggles the visibility of the legal notice card when the user clicks
   * on the "Impressum" link in the footer.
   *
   * @param event the click event, which is prevented from propagating
   *              to avoid a full page reload
   */
  showImprint(event: Event) {
    event.preventDefault();
    this.imprintService.toggleImprint('legal');
  }
}
