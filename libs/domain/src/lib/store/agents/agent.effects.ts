import { agentActions } from './agent.actions';
import { Injectable } from '@angular/core';
import { InsightsService } from '@fmg/util';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { AgentService } from '../../services/agent.service';
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AgentEffects {
  get$ = createEffect(() =>
    this.action$.pipe(
      ofType(agentActions.get),
      switchMap(({ id }) => this.agentService.find(id)),
      map((agent) => agentActions.set({ agent })),
      catchError((error) =>
        of(agentActions.error({ error: JSON.stringify(error) }))
      )
    )
  );

  error$ = createEffect(
    () =>
      this.action$.pipe(
        ofType(agentActions.error),
        tap(({ error }) => this.insightsService.exception(new Error(error)))
      ),
    { dispatch: false }
  );

  constructor(
    private action$: Actions,
    private agentService: AgentService,
    private insightsService: InsightsService
  ) {}
}
