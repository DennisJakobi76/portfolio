import { Component } from '@angular/core';
import { InfoCardComponent } from '../cards/info-card/info-card.component';

@Component({
  selector: 'app-about-me',
  imports: [InfoCardComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})
export class AboutMeComponent {}
