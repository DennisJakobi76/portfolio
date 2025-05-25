import { Component } from '@angular/core';
import { InfoCardComponent } from '../cards/info-card/info-card.component';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../shared/services/translation.service';

@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [InfoCardComponent, CommonModule],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.scss',
})
export class TechnologiesComponent {
  skillIcons: { id: string; path: string; title: string }[] = [];

  constructor(public translationService: TranslationService) {
    this.initSkillIcons();
  }

  getTitle(): string {
    return this.translationService.getTranslation(
      'technologies',
      'title'
    ) as string;
  }

  getHeadline(): string {
    return this.translationService.getTranslation(
      'technologies',
      'headline'
    ) as string;
  }

  private initSkillIcons(): void {
    const skillIconNames = [
      'Angular',
      'C_Sharp',
      'CSS',
      'Firebase',
      'Git',
      'HTML',
      'JavaScript',
      'Material Design',
      '.NET',
      'Rest-Api',
      'Scrum',
      'SQL',
      'TypeScript',
      'Growth Mindset',
    ];

    skillIconNames.forEach((iconName, index) => {
      this.skillIcons.push({
        id: `skill-icon-${index}`,
        path: `assets/icons/skill_icons/${iconName}.png`,
        title: iconName,
      });
    });
  }
}
