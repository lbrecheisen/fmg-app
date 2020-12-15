import { MainPage } from './pages/main/main.page';
import { SecurePage } from './pages/secure/secure.page';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MsalGuard } from '@azure/msal-angular';
import { AuthModule } from '@fmg/auth';
import { ArticlesPage } from './pages/articles/articles.page';
import { LeadPage } from './pages/lead/lead.page';

export const routes: Routes = [
  { path: '', component: MainPage },
  {
    path: 'agent/:agentId',
    children: [
      { path: '', component: MainPage },
      { path: 'search', component: LeadPage },
      { path: 'buy', component: ArticlesPage },
      { path: 'sell', component: ArticlesPage },
      { path: 'valuate', component: ArticlesPage },
      { path: 'market', component: ArticlesPage },
      { path: 'bio', component: ArticlesPage },
      { path: 'archive', component: ArticlesPage },
    ],
  },
  { path: 'secure', component: SecurePage, canActivate: [MsalGuard] },
  { path: 'auth', loadChildren: () => AuthModule },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRouting {}
