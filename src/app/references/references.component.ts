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
  currentSlideIndex = 0;

  prevSlide(): void {
    this.currentSlideIndex =
      (this.currentSlideIndex - 1 + this.references.length) %
      this.references.length;
  }

  nextSlide(): void {
    this.currentSlideIndex =
      (this.currentSlideIndex + 1) % this.references.length;

  }
}
