import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'imprint', component: LegalNoticeComponent },
  { path: 'privacy', component: PrivacyPolicyComponent },
];

RouterModule.forRoot(routes, {
  scrollPositionRestoration: 'enabled'
});
