import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImprintService {
  private showImprintSource = new BehaviorSubject<boolean>(false);
  showImprint$ = this.showImprintSource.asObservable();

  toggleImprint() {
    this.showImprintSource.next(!this.showImprintSource.value);
  }
}
