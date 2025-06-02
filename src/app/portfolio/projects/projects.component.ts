import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectDetailsCardComponent } from '../project-details-card/project-details-card.component';
import { ProjectDetailsService } from '../../shared/services/project-details.service';
import {
  JOIN_PROJECT,
  EPL_PROJECT,
  POKEDEX_PROJECT,
} from '../project-details-card/project-details.data';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectDetailsCardComponent, CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  activeProject: string | null = null;
  isProjectDetailsVisible = false;

  constructor(private projectDetailsService: ProjectDetailsService) {}

  /**
   * Sets the active project to the given projectId. This will
   * cause the corresponding thumbnail to become visible.
   * @param projectId The id of the project to show.
   */
  showThumbnail(projectId: string) {
    this.activeProject = projectId;
  }

  /**
   * Resets the active project, hiding any visible project thumbnail.
   */

  hideThumbnail() {
    this.activeProject = null;
  }

  /**
   * Displays the details of the specified project by setting the project details
   * in the ProjectDetailsService and making the project details component visible.
   * @param project A string identifier for the project ('join', 'pollo', or 'pokedex').
   */

  showDetails(project: string) {
    if (project === 'join') {
      this.projectDetailsService.showProjectDetails(JOIN_PROJECT);
    } else if (project === 'pollo') {
      this.projectDetailsService.showProjectDetails(EPL_PROJECT);
    } else if (project === 'pokedex') {
      this.projectDetailsService.showProjectDetails(POKEDEX_PROJECT);
    }
    this.isProjectDetailsVisible = true;
  }

  /**
   * Hides the project details component by setting the visibility flag to false.
   */

  closeDetails() {
    this.isProjectDetailsVisible = false;
  }
}
