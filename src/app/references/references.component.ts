import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReferenceCardComponent } from './reference-card/reference-card.component';
import { REFERENCES } from './reference.data';
import { TranslationService } from '../shared/services/translation.service';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule, ReferenceCardComponent],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss',
})
export class ReferencesComponent {
  references = REFERENCES;
  currentSlideIndex = Math.floor(this.references.length / 2);

  constructor(public translationService: TranslationService) {}

  /**
   * Returns an array of three references representing the current, previous, and next slides.
   * The references are positioned as 'left', 'center', and 'right', based on the current slide index.
   * This method ensures a circular navigation over the references.
   *
   * @returns An array of reference objects with their respective positions.
   */

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

  /**
   * Shows the next slide of the references carousel.
   * The slide direction is set to 'left' to animate the slide out to the left.
   * After a timeout of 300ms, the current slide index is incremented and wrapped around the array length.
   * The slide direction is then set back to null to reset the animation.
   */
  nextSlide(): void {
    this.slideDirection = 'left';
    setTimeout(() => {
      this.currentSlideIndex =
        (this.currentSlideIndex + 1) % this.references.length;
      this.slideDirection = null;
    }, 300);
  }

  /**
   * Shows the previous slide of the references carousel.
   * The slide direction is set to 'right' to animate the slide out to the right.
   * After a timeout of 300ms, the current slide index is decremented and wrapped around the array length.
   * The slide direction is then set back to null to reset the animation.
   */
  prevSlide(): void {
    this.slideDirection = 'right';
    setTimeout(() => {
      this.currentSlideIndex =
        (this.currentSlideIndex - 1 + this.references.length) %
        this.references.length;
      this.slideDirection = null;
    }, 300);
  }
}
