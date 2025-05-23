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
}
