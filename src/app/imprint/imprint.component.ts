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

  closeCard() {
    this.enableClickOutside = false;
    this.imprintService.toggleImprint();
  }

  onContainerClick(event: MouseEvent) {
    // Verhindert, dass der document:click Handler ausgelöst wird
    event.stopPropagation();
  }

  onContentClick(event: MouseEvent) {
    // Verhindert das Bubbling des Click-Events
    event.stopPropagation();
  }

  ngOnDestroy() {
    clearTimeout(this.clickTimeout);
  }
}
