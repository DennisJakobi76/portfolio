import { Component } from '@angular/core';
import { InfoCardComponent } from '../cards/info-card/info-card.component';

@Component({
  selector: 'app-technologies',
  imports: [InfoCardComponent],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.scss',
})
export class TechnologiesComponent {}
