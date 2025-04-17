import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { MarqueeComponent } from './marquee/marquee.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [HeaderComponent, MarqueeComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {}
