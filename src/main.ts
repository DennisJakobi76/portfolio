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

/**
 * Creates a new firefly element with a random position and adds it to the
 * firefly overlay. The firefly will fade out after a random time between 2 and
 * 4 seconds, and will be removed from the DOM after 1 second of being invisible.
 */
function createFirefly() {
  const firefly = document.createElement('div');
  firefly.classList.add('firefly');
  firefly.style.left = `${Math.random() * window.innerWidth}px`;
  firefly.style.top = `${Math.random() * window.innerHeight}px`;

  firefly.style.setProperty('--x', `${Math.random() * 100}%`);
  firefly.style.setProperty('--y', `${Math.random() * 100}%`);

  fireflyOverlay?.appendChild(firefly);

  setTimeout(() => {
    firefly.style.opacity = '0';
    setTimeout(() => firefly.remove(), 1000);
  }, 2000 + Math.random() * 2000);
}

/**
 * Handles the window scroll event and creates a set of fireflies at random positions on the
 * screen. The fireflies will fade out after a short delay, and will be removed from the DOM
 * after 1 second of being invisible.
 **/
function handleScroll() {
  for (let i = 0; i < 5; i++) {
    createFirefly();
  }

  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
    const fireflies = document.querySelectorAll('.firefly');
    fireflies.forEach((f) => ((f as HTMLElement).style.opacity = '0'));
  }, 300);
}

window.addEventListener('scroll', handleScroll);
