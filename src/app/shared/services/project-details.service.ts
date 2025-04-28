import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ProjectDetails } from '../../portfolio/project-details-card/project-details-card.interface';

@Injectable({
  providedIn: 'root',
})
export class ProjectDetailsService {
  private showDetailsSource = new Subject<ProjectDetails>();
  showDetails$ = this.showDetailsSource.asObservable();

  showProjectDetails(project: ProjectDetails) {
    this.showDetailsSource.next(project);
  }
}
