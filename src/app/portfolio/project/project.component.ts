import { Component } from '@angular/core';

@Component({
  selector: 'app-project',
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
})
export class ProjectComponent {
  activeProject: string | null = null;

  showThumbnail(projectId: string) {
    this.activeProject = projectId;
  }

  hideThumbnail() {
    this.activeProject = null;
  }
}
