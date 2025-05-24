import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FaviconService {
  constructor() {
    this.initFavicon();
  }

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
