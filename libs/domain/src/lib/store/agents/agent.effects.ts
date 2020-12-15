import { agentActions } from './agent.actions';
import { Injectable } from '@angular/core';
import { InsightsService } from '@fmg/util';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, filter, map, switchMap, tap } from 'rxjs/operators';
import { AgentService } from '../../services/agent.service';
import { of } from 'rxjs';
import { Agent } from '../../models/agents/agent.model';
import { articleActions } from '../articles';

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

  set$ = createEffect(() =>
    this.action$.pipe(
      ofType(agentActions.set),
      map(({ agent }) => agent),
      filter((agent): agent is Agent => !!agent),
      map(({ id }) => articleActions.searchGet({ agentId: id }))
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
