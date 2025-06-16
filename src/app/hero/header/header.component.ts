import {
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileMenuComponent } from './mobile-menu/mobile-menu.component';
import { TranslationService } from '../../shared/services/translation.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [CommonModule, MobileMenuComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  mobileMenuOpen = false;

  @ViewChild('burgerMenu', { read: ElementRef }) burgerMenuRef!: ElementRef;
  @ViewChild(MobileMenuComponent, { read: ElementRef })
  mobileMenuRef!: ElementRef;

  private documentClickListener: any;

  constructor(
    public translationService: TranslationService,
    private elementRef: ElementRef
  ) {}

  ngOnInit() {
    this.translationService.isGerman$.subscribe((isGerman) => {
      const languageSwitch = document.getElementById('language-switch');
      if (languageSwitch) {
        languageSwitch.classList.toggle('german', isGerman);
      }
    });
  }

  ngOnDestroy() {
    this.removeDocumentClickListener();
  }

  toggleLanguage() {
    this.translationService.isGerman$.pipe(take(1)).subscribe((isGerman) => {
      this.translationService.setLanguage(!isGerman);
    });
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
    if (this.mobileMenuOpen) {
      this.addDocumentClickListener();
    } else {
      this.removeDocumentClickListener();
    }
  }

  /**
   * Adds an event listener to the document to detect clicks outside of the
   * mobile menu. When a click is detected outside of the menu, the mobile menu
   * is closed.
   */
  addDocumentClickListener() {
    this.documentClickListener = (event: MouseEvent) => {
      // Finde das menu-container-Element innerhalb von app-mobile-menu
      const menuEl = this.elementRef.nativeElement.querySelector(
        'app-mobile-menu .menu-container'
      );
      const burgerEl = this.elementRef.nativeElement.querySelector(
        '.burger-menu-wrapper'
      );
      if (
        menuEl &&
        !menuEl.contains(event.target as Node) &&
        burgerEl &&
        !burgerEl.contains(event.target as Node)
      ) {
        this.mobileMenuOpen = false;
        this.removeDocumentClickListener();
      }
    };
    document.addEventListener('mousedown', this.documentClickListener, true);
  }

  /**
   * Removes the event listener from the document that detects clicks outside
   * of the mobile menu. This prevents further detection of such clicks and
   * sets the documentClickListener to null.
   */

  removeDocumentClickListener() {
    if (this.documentClickListener) {
      document.removeEventListener(
        'mousedown',
        this.documentClickListener,
        true
      );
      this.documentClickListener = null;
    }
  }

  /**
   * If the window is resized and the mobile menu is open, close the mobile menu
   * and remove the document event listener that detects clicks outside of the
   * menu. This ensures that the mobile menu is closed when the window is resized
   * to a width larger than 670px.
   */
  @HostListener('window:resize', [])
  onWindowResize() {
    if (this.mobileMenuOpen && window.innerWidth > 670) {
      this.mobileMenuOpen = false;
      this.removeDocumentClickListener();
    }
  }
}
