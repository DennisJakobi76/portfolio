import { Component, OnInit } from '@angular/core';
import {
  JOIN_PROJECT,
  EPL_PROJECT,
  POKEDEX_PROJECT,
} from './project-details.data';
import { CommonModule } from '@angular/common';
import { ProjectDetailsService } from '../../shared/services/project-details.service';

@Component({
  selector: 'app-project-details-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-details-card.component.html',
  styleUrls: ['./project-details-card.component.scss'],
})
export class ProjectDetailsCardComponent implements OnInit {
  projectDatas = [JOIN_PROJECT, EPL_PROJECT, POKEDEX_PROJECT];
  projectDetails = POKEDEX_PROJECT;
  isVisible = false;

  constructor(private projectDetailsService: ProjectDetailsService) {}

  ngOnInit() {
    this.projectDetailsService.showDetails$.subscribe((project) => {
      this.projectDetails = project;
      this.isVisible = true;
    });
  }

  closeCard() {
    this.isVisible = false;
  }

  showNextProject() {
    const currentIndex = this.projectDatas.findIndex(
      (project) => project.id === this.projectDetails.id
    );
    const nextIndex = (currentIndex + 1) % this.projectDatas.length;
    this.projectDetails = this.projectDatas[nextIndex];
  }
}
