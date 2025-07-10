import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FaviconService {
  constructor() {
    this.initFavicon();
  }

  /**
   * Returns whether the user prefers a dark color scheme.
   *
   * @returns True if the user prefers a dark color scheme, false otherwise.
   */
  private isDarkModeActive() {
    return (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    );
  }

  /**
   * Sets the favicon based on the user's preferred color scheme.
   *
   * @param favicon The favicon element.
   */
  private setFaviconBasedOnColorScheme(favicon: HTMLLinkElement) {
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (e) => {
        favicon.href = e.matches
          ? '/favicon_dark_theme.png'
          : '/favicon_light_theme.png';
      });
  }

  /**
   * Initializes the favicon based on the user's preferred color scheme.
   *
   * Sets the favicon to the light or dark theme based on the user's preferred color scheme.
   * Also sets up a listener to change the favicon when the user's preferred color scheme changes.
   */
  private initFavicon(): void {
    const favicon = document.getElementById('favicon') as HTMLLinkElement;
    if (this.isDarkModeActive()) {
      favicon.href = '/favicon_dark_theme.png';
    }
    this.setFaviconBasedOnColorScheme(favicon);
  }
}
