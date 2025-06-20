import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);

/**
 * This code sets the favicon based on the user's preferred color scheme.
 * It checks if the user prefers a dark theme and sets the favicon accordingly.
 */
const favicon = document.getElementById('favicon') as HTMLLinkElement | null;
if (
  window.matchMedia &&
  window.matchMedia('(prefers-color-scheme: dark)').matches
) {
  if (favicon) {
    favicon.href = 'favicon_dark_theme.png';
  }
}

/**
 * Sets the favicon based on the user's preferred color scheme.
 * It listens for changes in the user's color scheme preference and updates the favicon accordingly.
 **/
window
  .matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', (e) => {
    if (favicon) {
      favicon.href = e.matches
        ? 'favicon_dark_theme.png'
        : 'favicon_light_theme.png';
    }
  });
