import { Component } from '@angular/core';
import { ProjectsComponent } from './projects/projects.component';
import { TranslationService } from '../shared/services/translation.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectsComponent, CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
  constructor(public translationService: TranslationService) {}
}
