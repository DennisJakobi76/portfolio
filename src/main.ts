import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);

// Initial favicon setup based on system theme
const favicon = document.getElementById('favicon') as HTMLLinkElement | null;
if (
  window.matchMedia &&
  window.matchMedia('(prefers-color-scheme: dark)').matches
) {
  if (favicon) {
    favicon.href = 'favicon_dark_theme.png';
  }
}

// Watch for theme changes
window
  .matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', (e) => {
    if (favicon) {
      favicon.href = e.matches
        ? 'favicon_dark_theme.png'
        : 'favicon_light_theme.png';
    }
  });
