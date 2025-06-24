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

  /**
   * Retrieves the title for the 'Technologies' section in the current language.
   *
   * @returns {string} The translated title string.
   */
  getTitle(): string {
    return this.translationService.getTranslation(
      'technologies',
      'title'
    ) as string;
  }

  /**
   * Replaces the skill icon name 'dot_NET' with '.NET' for a consistent display.
   *
   * @param {string} iconName The skill icon name to be replaced.
   * @returns {string} The replaced skill icon name.
   */
  changeIconNameDotNet(iconName: string) {
    if (iconName === 'dot_NET') {
      return '.NET';
    }
    return iconName;
  }

  /**
   * Retrieves the headline for the 'Technologies' section in the current language.
   *
   * @returns {string} The translated headline string.
   */
  getHeadline(): string {
    return this.translationService.getTranslation(
      'technologies',
      'headline'
    ) as string;
  }

  /**
   * Retrieves a list of skill icon names to be used in the 'Technologies' section.
   *
   * @returns {string[]} A list of skill icon names.
   */
  private getSkillIconNames() {
    return [
      'Angular',
      'C_Sharp',
      'CSS',
      'Firebase',
      'Git',
      'HTML',
      'JavaScript',
      'Material Design',
      'dot_NET',
      'Rest-Api',
      'Scrum',
      'SQL',
      'TypeScript',
      'Growth Mindset',
    ];
  }

  /**
   * Initializes the skill icons array with icon data.
   *
   * Iterates over the list of skill icon names and constructs an array of
   * skill icon objects, each containing a unique id, the path to its image,
   * and its title.
   */
  private initSkillIcons(): void {
    const skillIconNames = this.getSkillIconNames();

    skillIconNames.forEach((iconName, index) => {
      this.skillIcons.push({
        id: `skill-icon-${index}`,
        path: `assets/icons/skill_icons/${iconName}.png`,
        title: this.changeIconNameDotNet(iconName),
      });
    });
  }
}
