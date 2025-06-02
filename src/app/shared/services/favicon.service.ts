import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FaviconService {
  constructor() {
    this.initFavicon();
  }

  /**
   * Initializes the favicon of the page by setting it to the right
   * theme based on the user's system theme. Also sets up an event
   * listener to watch for changes in the user's system theme and
   * update the favicon accordingly.
   */
  private initFavicon(): void {
    const favicon = document.getElementById('favicon') as HTMLLinkElement;
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      favicon.href = 'favicon_dark_theme.png';
    }

    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (e) => {
        favicon.href = e.matches
          ? 'favicon_dark_theme.png'
          : 'favicon_light_theme.png';
      });
  }
}
