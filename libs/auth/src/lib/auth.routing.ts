import { ForbiddenPage } from './pages/forbidden/forbidden.page';
import { LoginPage } from './pages/login/login.page';
import { LogoutPage } from './pages/logout/logout.page';
import { RedirectPage } from './pages/redirect/redirect.page';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'login' },
      { path: 'login', component: LoginPage },
      { path: 'logout', component: LogoutPage },
      { path: 'redirect', component: RedirectPage },
      { path: 'forbidden', component: ForbiddenPage },
      { path: '**', redirectTo: '' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRouting {}
