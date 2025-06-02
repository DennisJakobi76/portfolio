import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  OnInit,
  HostListener,
  ElementRef,
} from '@angular/core';
import { ImprintService } from '../shared/services/imprint.service';

@Component({
  selector: 'app-imprint',
  imports: [CommonModule],
  templateUrl: './imprint.component.html',
  styleUrls: ['./imprint.component.scss'],
})
export class ImprintComponent implements OnInit {
  @Input() type: 'legal' | 'privacy' = 'legal';
  isVisible = false;
  private clickTimeout: any;

  constructor(
    private imprintService: ImprintService,
    private elementRef: ElementRef
  ) {}

  /**
   * Initializes the component by subscribing to the `showImprint$` observable from the `ImprintService`.
   * Updates the visibility and type of the imprint based on the emitted values.
   * Delays the activation of the click listener for clicking outside the component when the imprint is shown.
   */

  ngOnInit() {
    this.imprintService.showImprint$.subscribe(({ show, type }) => {
      this.isVisible = show;
      this.type = type;

      // Verzögere die Aktivierung des Click-Listeners
      if (show) {
        clearTimeout(this.clickTimeout);
        this.clickTimeout = setTimeout(() => {
          this.enableClickOutside = true;
        }, 100);
      }
    });
  }

  private enableClickOutside = false;

  @HostListener('document:click', ['$event'])
  /**
   * Closes the imprint if the user clicks outside of it.
   * @param event The mouse event to check.
   */
  onDocumentClick(event: MouseEvent) {
    if (this.isVisible && this.enableClickOutside) {
      const clickedInside = this.elementRef.nativeElement.contains(
        event.target
      );
      if (!clickedInside) {
        this.closeCard();
      }
    }
  }

  /**
   * Closes the imprint component by calling the `toggleImprint` method of the
   * `ImprintService` and disabling the click outside listener.
   */
  closeCard() {
    this.enableClickOutside = false;
    this.imprintService.toggleImprint();
  }

  /**
   * Prevents the click event from propagating to parent elements
   * when the container is clicked.
   * @param event The mouse event to stop propagation.
   */

  onContainerClick(event: MouseEvent) {
    event.stopPropagation();
  }

  /**
   * Prevents the click event from propagating to parent elements
   * when the content is clicked.
   * @param event The mouse event to stop propagation.
   */

  onContentClick(event: MouseEvent) {
    event.stopPropagation();
  }

  /**
   * Cleans up the click timeout when the component is destroyed.
   */
  ngOnDestroy() {
    clearTimeout(this.clickTimeout);
  }
}
