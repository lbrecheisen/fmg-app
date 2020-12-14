import { leadActions } from './lead.actions';
import { Injectable } from '@angular/core';
import { InsightsService } from '@fmg/util';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { filter, map, switchMap, tap } from 'rxjs/operators';
import { SmsService } from '../../services/sms.service';
import { Lead } from '../../models/leads/lead.model';

@Injectable({ providedIn: 'root' })
export class LeadEffects {
  set$ = createEffect(
    () =>
      this.action$.pipe(
        ofType(leadActions.set),
        map(({ lead }) => lead),
        filter((lead): lead is Lead => !!lead),
        switchMap((lead) =>
          this.smsService.send(
            ['+18163525299'],
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
        )
      ),
    { dispatch: false }
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
    private insightsService: InsightsService
  ) {}
}
