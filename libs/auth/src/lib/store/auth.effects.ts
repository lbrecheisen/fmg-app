import { authActions } from './auth.actions';
import { AuthService } from '../services/auth.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ROUTER_REQUEST } from '@ngrx/router-store';
import { map, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthEffects {
  login$ = createEffect(
    () =>
      this.action$.pipe(
        ofType(authActions.login),
        tap(() => this.authService.login())
      ),
    { dispatch: false }
  );

  logout$ = createEffect(
    () =>
      this.action$.pipe(
        ofType(authActions.logout),
        tap(() => this.authService.logout())
      ),
    { dispatch: false }
  );

  forbidden$ = createEffect(
    () =>
      this.action$.pipe(
        ofType(authActions.forbidden),
        tap(() => this.router.navigate(['auth', 'forbidden']))
      ),
    { dispatch: false }
  );

  route$ = createEffect(() =>
    this.action$.pipe(
      ofType(ROUTER_REQUEST),
      map(() => this.authService.claim),
      map((claim) => authActions.set({ claim }))
    )
  );

  constructor(
    private action$: Actions,
    private router: Router,
    private authService: AuthService
  ) {}
}
