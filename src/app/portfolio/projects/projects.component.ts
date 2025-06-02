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

  showThumbnail(projectId: string) {
    this.activeProject = projectId;
  }

  hideThumbnail() {
    this.activeProject = null;
  }

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

  closeDetails() {
    this.isProjectDetailsVisible = false;
  }
}
