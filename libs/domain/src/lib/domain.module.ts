import { LeadEffects } from './store/leads/lead.effects';
import { leadReducer } from './store/leads/lead.reducer';
import { LeadState } from './store/leads/lead.state';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

@NgModule({
  imports: [
    StoreModule.forFeature<LeadState>('lead', leadReducer),
    EffectsModule.forFeature([LeadEffects]),
  ],
})
export class DomainModule {}
