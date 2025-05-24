import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ImprintService {
  private showImprintSubject = new BehaviorSubject<{
    show: boolean;
    type: 'legal' | 'privacy';
  }>({
    show: false,
    type: 'legal',
  });

  showImprint$ = this.showImprintSubject.asObservable();

  toggleImprint(type: 'legal' | 'privacy' = 'legal') {
    const currentValue = this.showImprintSubject.value;
    this.showImprintSubject.next({
      show: !currentValue.show,
      type: type,
    });
  }
}
