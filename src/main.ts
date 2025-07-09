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

const fireflyOverlay = document.getElementById('firefly-overlay');
let scrollTimeout: any;

function createFirefly() {
  const firefly = document.createElement('div');
  firefly.classList.add('firefly');
  firefly.style.left = `${Math.random() * window.innerWidth}px`;
  firefly.style.top = `${Math.random() * window.innerHeight}px`;

  // Optional: individuelle Flugrichtung per CSS-Variante
  firefly.style.setProperty('--x', `${Math.random() * 100}%`);
  firefly.style.setProperty('--y', `${Math.random() * 100}%`);

  fireflyOverlay?.appendChild(firefly);

  setTimeout(() => {
    firefly.style.opacity = '0';
    setTimeout(() => firefly.remove(), 1000);
  }, 2000 + Math.random() * 2000); // bleibt 2–4s sichtbar
}

function handleScroll() {
  for (let i = 0; i < 5; i++) {
    createFirefly();
  }

  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
    const fireflies = document.querySelectorAll('.firefly');
    fireflies.forEach((f) => ((f as HTMLElement).style.opacity = '0'));
  }, 300); // 300ms nach Scrollende werden Glühwürmchen ausgeblendet
}

window.addEventListener('scroll', handleScroll);
