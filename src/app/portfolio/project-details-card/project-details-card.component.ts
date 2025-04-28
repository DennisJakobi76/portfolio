import { Component } from '@angular/core';
import { JOIN_PROJECT } from './project-details.data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-details-card',
  templateUrl: './project-details-card.component.html',
  imports: [CommonModule],
  styleUrls: ['./project-details-card.component.scss'],
})
export class ProjectDetailsCardComponent {
  projectDetails = JOIN_PROJECT;
}
