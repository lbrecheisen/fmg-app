import { leadActions } from './lead.actions';
import { Injectable } from '@angular/core';
import { InsightsService } from '@fmg/util';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  catchError,
  filter,
  map,
  switchMap,
  tap,
  withLatestFrom,
} from 'rxjs/operators';
import { SmsService } from '../../services/sms.service';
import { LeadService } from '../../services/lead.service';
import { of } from 'rxjs';
import { AgentState } from '../agents/agent.state';
import { select, Store } from '@ngrx/store';
import { fromAgent } from '../agents';
import { Agent } from '../../models/agents/agent.model';
import { Lead } from '../../models/leads/lead.model';

@Injectable({ providedIn: 'root' })
export class LeadEffects {
  insert$ = createEffect(() =>
    this.action$.pipe(
      ofType(leadActions.insert),
      map(({ lead }) => lead),
      filter((lead): lead is Lead => !!lead),
      withLatestFrom(
        this.agentStore.pipe(
          select(fromAgent.agent),
          filter((agent): agent is Agent => !!agent)
        )
      ),
      tap(([lead, agent]) =>
        this.smsService.send(
          [agent.phone],
          `A new client has filled out your web form!

Name: ${lead.name}
Phone: ${lead.phone}
Email: ${lead.email}
Maximum Price: ${lead.maxPrice}
Minimum Bedrooms: ${lead.minBedrooms}
Minimum Bathrooms: ${lead.minBathrooms}
Minimum Garage Spaces: ${lead.minGarageSpaces}
Minimum Square Footage: ${lead.minSquareFootage}
Additional Information: ${lead.additionalInfo}`
        )
      ),
      switchMap(([lead, { id }]) =>
        this.leadService.insert({ ...lead, agentId: id })
      ),
      map((lead) => leadActions.set({ lead })),
      catchError((error) =>
        of(leadActions.error({ error: JSON.stringify(error) }))
      )
    )
  );

  error$ = createEffect(
    () =>
      this.action$.pipe(
        ofType(leadActions.error),
        tap(({ error }) => this.insightsService.exception(new Error(error)))
      ),
    { dispatch: false }
  );

  constructor(
    private action$: Actions,
    private smsService: SmsService,
    private leadService: LeadService,
    private insightsService: InsightsService,
    private agentStore: Store<AgentState>
  ) {}
}
