import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReferenceCardComponent } from './reference-card/reference-card.component';
import { REFERENCES } from './reference.data';
import { trigger, transition, animate } from '@angular/animations';
@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule, ReferenceCardComponent],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss',
  animations: [
    trigger('carouselAnimation', [
      transition('* => *', [animate('300ms ease-in-out')]),
    ]),
  ],
})
export class ReferencesComponent implements OnInit {
  references = REFERENCES;
  currentSlide = 1; // Start with middle slide active
  slides: any[] = [];

  ngOnInit() {
    // Initialize slides with scaling
    this.updateSlides();
  }

  private updateSlides() {
    const totalSlides = this.references.length;
    this.slides = this.references.map((_, index) => ({
      scale: index === this.currentSlide ? 1 : 0.8,
      active: index === this.currentSlide,
    }));
  }

  prevSlide(): void {
    this.currentSlide =
      (this.currentSlide - 1 + this.references.length) % this.references.length;
    this.updateSlides();
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.references.length;
    this.updateSlides();
  }

  isActiveSlide(index: number): boolean {
    return index === this.currentSlide;
  }
}
