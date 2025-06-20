import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {
  JOIN_PROJECT,
  EPL_PROJECT,
  POKEDEX_PROJECT,
} from './project-details.data';
import { CommonModule } from '@angular/common';
import { ProjectDetailsService } from '../../shared/services/project-details.service';
import { TranslationService } from '../../shared/services/translation.service';

@Component({
  selector: 'app-project-details-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-details-card.component.html',
  styleUrls: ['./project-details-card.component.scss'],
})
export class ProjectDetailsCardComponent implements OnInit {
  @Output() close = new EventEmitter<void>();
  projectDatas = [JOIN_PROJECT, EPL_PROJECT, POKEDEX_PROJECT];
  projectDetails: typeof JOIN_PROJECT | null = null;

  constructor(
    public translationService: TranslationService,
    private projectDetailsService: ProjectDetailsService
  ) {}

  /**
   * Initializes the component by subscribing to the project details stream.
   * Updates the project details when a new project is emitted.
   */
  ngOnInit() {
    this.projectDetailsService.showDetails$.subscribe((project) => {
      this.projectDetails = project;
    });
  }

  /**
   * Emits a close event to close the project details card.
   */
  closeCard() {
    this.close.emit();
  }

  /**
   * Updates `projectDetails` to the next project in the `projectDatas` array.
   * Loops back to the first project if the current project is the last one.
   */
  showNextProject() {
    if (!this.projectDetails) return; // Falls noch kein Projekt geladen ist
    const currentIndex = this.projectDatas.findIndex(
      (project) => project.id === this.projectDetails!.id
    );
    const nextIndex = (currentIndex + 1) % this.projectDatas.length;
    this.projectDetails = this.projectDatas[nextIndex];
  }
}
