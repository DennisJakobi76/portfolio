import { Component } from '@angular/core';
import { ImprintService } from '../shared/services/imprint.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  constructor(private imprintService: ImprintService) {}

  showImprint(event: Event) {
    event.preventDefault();
    this.imprintService.toggleImprint('legal');
  }
}
