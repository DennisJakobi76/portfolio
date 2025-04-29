import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReferenceCardComponent } from './reference-card/reference-card.component';
import { REFERENCES } from './reference.data';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule, ReferenceCardComponent],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss',
})
export class ReferencesComponent {
  references = REFERENCES;

  prevSlide(): void {
    console.log('Previous slide triggered');
    // Add logic to navigate to the previous slide
  }

  nextSlide(): void {
    console.log('Next slide triggered');
    // Add logic to navigate to the next slide
  }
}
