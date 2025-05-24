import { Component } from '@angular/core';
import { TranslationService } from '../shared/services/translation.service';
import { HeaderComponent } from './header/header.component';
import { MarqueeComponent } from './marquee/marquee.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, HeaderComponent, MarqueeComponent],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent {
  constructor(public translationService: TranslationService) {}
}
