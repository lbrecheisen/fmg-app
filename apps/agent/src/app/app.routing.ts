import { MainPage } from './pages/main/main.page';
import { SecurePage } from './pages/secure/secure.page';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MsalGuard } from '@azure/msal-angular';
import { AuthModule } from '@fmg/auth';
import { ArticlePage } from './pages/article/article.page';

export const routes: Routes = [
  { path: '', component: MainPage },
  {
    path: 'agent/:agentId',
    children: [{ path: '', component: ArticlePage, data: { section: 'bio' } }],
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
