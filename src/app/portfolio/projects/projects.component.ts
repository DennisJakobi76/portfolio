import { Component } from '@angular/core';
import { ProjectDetailsCardComponent } from '../project-details-card/project-details-card.component';

@Component({
  selector: 'app-projects',
  imports: [ProjectDetailsCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  activeProject: string | null = null;

  showThumbnail(projectId: string) {
    this.activeProject = projectId;
  }

  hideThumbnail() {
    this.activeProject = null;
  }
}
