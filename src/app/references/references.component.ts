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
  currentSlideIndex = 0;

  get displayedReferences() {
    const len = this.references.length;
    const left = (this.currentSlideIndex - 1 + len) % len;
    const center = this.currentSlideIndex;
    const right = (this.currentSlideIndex + 1) % len;
    return [
      { ...this.references[left], position: 'left' },
      { ...this.references[center], position: 'center' },
      { ...this.references[right], position: 'right' },
    ];
  }

  slideDirection: 'left' | 'right' | null = null;

  nextSlide(): void {
    this.slideDirection = 'left';
    setTimeout(() => {
      this.currentSlideIndex =
        (this.currentSlideIndex + 1) % this.references.length;
      this.slideDirection = null;
    }, 500); // Dauer der CSS-Animation
  }

  prevSlide(): void {
    this.slideDirection = 'right';
    setTimeout(() => {
      this.currentSlideIndex =
        (this.currentSlideIndex - 1 + this.references.length) %
        this.references.length;
      this.slideDirection = null;
    }, 500);
  }
}
