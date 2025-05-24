import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ImprintService } from '../shared/services/imprint.service';

@Component({
  selector: 'app-imprint',
  imports: [CommonModule],
  templateUrl: './imprint.component.html',
  styleUrls: ['./imprint.component.scss'],
})
export class ImprintComponent implements OnInit {
  @Input() type: 'legal' | 'privacy' = 'legal';
  isVisible = false;

  constructor(private imprintService: ImprintService) {}

  ngOnInit() {
    this.imprintService.showImprint$.subscribe(({ show, type }) => {
      this.isVisible = show;
      this.type = type;
    });
  }

  closeCard() {
    this.imprintService.toggleImprint();
  }
}
