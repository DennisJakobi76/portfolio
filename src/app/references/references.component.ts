import { Component } from '@angular/core';
import { ReferenceCardComponent } from './reference-card/reference-card.component';

@Component({
  selector: 'app-references',
  imports: [ReferenceCardComponent],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss',
})
export class ReferencesComponent {}
