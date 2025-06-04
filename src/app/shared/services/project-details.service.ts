import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProjectDetails } from '../../portfolio/project-details-card/project-details-card.interface';

@Injectable({
  providedIn: 'root',
})
export class ProjectDetailsService {
  private showDetailsSource = new BehaviorSubject<ProjectDetails | null>(null);
  showDetails$ = this.showDetailsSource.asObservable();

  /**
   * Publishes the given project details to all subscribers of the showDetails$ observable.
   * @param project The project details to publish.
   */
  showProjectDetails(project: ProjectDetails) {
    this.showDetailsSource.next(project);
  }
}
