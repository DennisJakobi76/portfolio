import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Dennis Jakobi';
  // type: 'legal' | 'privacy' = 'legal';

  @HostListener('document:mousemove', ['$event'])
  /**
   * Handles the document mouse move event and updates the CSS custom properties
   * '--x' and '--y' with the current mouse position relative to the window size.
   * The values are given in percent and are used to set the initial position of the
   * cursor on the hero section.
   *
   * @param event The MouseEvent object.
   */
  onMouseMove(event: MouseEvent) {
    const x = (event.clientX / window.innerWidth) * 100 + '%';
    const y = (event.clientY / window.innerHeight) * 100 + '%';

    document.documentElement.style.setProperty('--x', x);
    document.documentElement.style.setProperty('--y', y);
  }
}
