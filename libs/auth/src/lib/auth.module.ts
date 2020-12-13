import { AuthRouting } from './auth.routing';
import { authority, clientId, consentScopes } from './constants/auth.constant';
import { ForbiddenPage } from './pages/forbidden/forbidden.page';
import { LoginPage } from './pages/login/login.page';
import { LogoutPage } from './pages/logout/logout.page';
import { RedirectPage } from './pages/redirect/redirect.page';
import { AuthEffects } from './store/auth.effects';
import { authReducer } from './store/auth.reducer';
import { AuthState } from './store/auth.state';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MsalInterceptor, MsalModule } from '@azure/msal-angular';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

export const materialModules = [MatButtonModule, MatCardModule];

@NgModule({
  imports: [
    AuthRouting,
    MsalModule.forRoot(
      {
        auth: {
          authority,
          clientId,
          validateAuthority: false,
          redirectUri: `${window.location.origin}/auth/redirect`,
          postLogoutRedirectUri: `${window.location.origin}`,
        },
      },
      {
        consentScopes,
      }
    ),
    StoreModule.forFeature<AuthState>('auth', authReducer),
    EffectsModule.forFeature([AuthEffects]),
    FlexLayoutModule,
    ...materialModules,
  ],
  declarations: [ForbiddenPage, LoginPage, LogoutPage, RedirectPage],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: MsalInterceptor, multi: true },
  ],
})
export class AuthModule {}
