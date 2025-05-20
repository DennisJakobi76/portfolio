import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ReferencesComponent } from './references/references.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeroComponent,
    AboutMeComponent,
    TechnologiesComponent,
    PortfolioComponent,
    ReferencesComponent,
    ContactComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Dennis Jakobi';
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const x = (event.clientX / window.innerWidth) * 100 + '%';
    const y = (event.clientY / window.innerHeight) * 100 + '%';

    document.documentElement.style.setProperty('--x', x);
    document.documentElement.style.setProperty('--y', y);
  }
}
