import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ImprintService } from '../shared/services/imprint.service';

@Component({
  selector: 'app-imprint',
  imports: [CommonModule],
  templateUrl: './imprint.component.html',
  styleUrls: ['./imprint.component.scss'],
})
export class ImprintComponent implements OnInit {
  isVisible = false;

  constructor(private imprintService: ImprintService) {}

  ngOnInit() {
    this.imprintService.showImprint$.subscribe(
      (show) => (this.isVisible = show)
    );
  }

  closeCard() {
    this.isVisible = false;
  }
}
