import { Injectable } from '@angular/core';
import { agentActions, articleActions } from '@fmg/domain';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ROUTER_NAVIGATED, RouterNavigatedAction } from '@ngrx/router-store';
import { map, filter, concatMap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class MainEffects {
  route$ = createEffect(() =>
    this.action$.pipe(
      ofType(ROUTER_NAVIGATED),
      map(
        (action: RouterNavigatedAction<any>) =>
          action?.payload?.routerState?.url ?? ''
      ),
      filter((url: string) => url.startsWith('/agent')),
      map((url) => url.split('/')),
      concatMap((segments) => [
        articleActions.setCategory({ category: segments[3] }),
        agentActions.get({ id: segments[2] }),
      ])
    )
  );

  constructor(private action$: Actions) {}
}
