import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [],
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
