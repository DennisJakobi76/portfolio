import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reference-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reference-card.component.html',
  styleUrl: './reference-card.component.scss',
})
export class ReferenceCardComponent {
  @Input() text: string = '';
  @Input() author: string = '';
}
