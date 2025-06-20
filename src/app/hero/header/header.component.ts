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

  /**
   * Subscribes to the current language state and sets the language switch
   * element's class to 'german' if the language is German, or removes the
   * class if the language is not German.
   */
  ngOnInit() {
    this.translationService.isGerman$.subscribe((isGerman) => {
      const languageSwitch = document.getElementById('language-switch');
      if (languageSwitch) {
        languageSwitch.classList.toggle('german', isGerman);
      }
    });
  }

  /**
   * Removes the document-level click event listener to prevent memory leaks
   * when the component is destroyed.
   */
  ngOnDestroy() {
    this.removeDocumentClickListener();
  }

  /**
   * Toggles the language of the application between German and the default language
   * by subscribing to the current language state and setting it to the opposite value.
   */
  toggleLanguage() {
    this.translationService.isGerman$.pipe(take(1)).subscribe((isGerman) => {
      this.translationService.setLanguage(!isGerman);
    });
  }

  /**
   * Toggles the visibility of the mobile menu. If the menu is opened, it adds a
   * document-level click event listener to close the menu when a click is
   * detected outside of it. If the menu is closed, it removes the click event
   * listener.
   */
  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
    if (this.mobileMenuOpen) {
      this.addDocumentClickListener();
    } else {
      this.removeDocumentClickListener();
    }
  }

  /**
   * Returns an object containing the menu element and the burger menu element.
   *
   * These elements are used to determine if a click is outside of the mobile menu
   * to close it.
   *
   * @returns {Object} with properties menuEl and burgerEl
   */
  private getMenuAndBurgerElements() {
    const menuEl = this.elementRef.nativeElement.querySelector(
      'app-mobile-menu .menu-container'
    );
    const burgerEl = this.elementRef.nativeElement.querySelector(
      '.burger-menu-wrapper'
    );
    return { menuEl, burgerEl };
  }

  /**
   * Checks if a click is outside of the mobile menu.
   *
   * @param {Element} menuEl - The menu element.
   * @param {MouseEvent} event - The event object of the click event.
   * @param {Element} burgerEl - The burger menu element.
   * @returns {boolean} - True if the click is outside of the menu, false otherwise.
   */
  private isClickOutsideMenu(menuEl: any, event: MouseEvent, burgerEl: any) {
    return (
      menuEl &&
      !menuEl.contains(event.target as Node) &&
      burgerEl &&
      !burgerEl.contains(event.target as Node)
    );
  }

  /**
   * Closes the mobile menu by setting its visibility to false and removing the
   * document-level click event listener.
   */
  private closeMobileMenu() {
    this.mobileMenuOpen = false;
    this.removeDocumentClickListener();
  }

  /**
   * Adds a document-level event listener that detects clicks outside of the
   * mobile menu and closes the menu if a click is detected. The event listener
   * is set to capture phase to prevent the event from bubbling up the DOM tree.
   * This is necessary because the menu is not a descendant of the element that
   * triggered the event (the document). If the click is outside of the menu, the
   * mobile menu is closed and the event listener is removed from the document.
   */
  addDocumentClickListener() {
    this.documentClickListener = (event: MouseEvent) => {
      const { menuEl, burgerEl } = this.getMenuAndBurgerElements();
      if (this.isClickOutsideMenu(menuEl, event, burgerEl)) {
        this.closeMobileMenu();
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
