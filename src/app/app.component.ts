import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './hero/hero.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const x = (event.clientX / window.innerWidth) * 100 + '%';
    const y = (event.clientY / window.innerHeight) * 100 + '%';

    document.documentElement.style.setProperty('--x', x);
    document.documentElement.style.setProperty('--y', y);
  }
}
