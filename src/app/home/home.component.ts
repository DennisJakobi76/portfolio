import { Component } from '@angular/core';
import { TranslationService } from '../shared/services/translation.service';
import { HeroComponent } from '../hero/hero.component';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from '../about-me/about-me.component';
import { ContactComponent } from '../contact/contact.component';
import { FooterComponent } from '../footer/footer.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { ReferencesComponent } from '../references/references.component';
import { TechnologiesComponent } from '../technologies/technologies.component';

@Component({
  selector: 'app-home',
  imports: [
    HeroComponent,
    AboutMeComponent,
    TechnologiesComponent,
    PortfolioComponent,
    ReferencesComponent,
    ContactComponent,
    FooterComponent,
    CommonModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(public translationService: TranslationService) {}
}
