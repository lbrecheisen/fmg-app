import { LeadEffects } from './store/leads/lead.effects';
import { leadReducer } from './store/leads/lead.reducer';
import { LeadState } from './store/leads/lead.state';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ArticleEffects } from './store/articles/article.effects';
import { articleReducer } from './store/articles/article.reducer';
import { ArticleState } from './store/articles/article.state';
import { AgentEffects } from './store/agents/agent.effects';
import { agentReducer } from './store/agents/agent.reducer';
import { AgentState } from './store/agents/agent.state';

@NgModule({
  imports: [
    StoreModule.forFeature<LeadState>('lead', leadReducer),
    EffectsModule.forFeature([LeadEffects]),
    StoreModule.forFeature<AgentState>('agent', agentReducer),
    EffectsModule.forFeature([AgentEffects]),
    StoreModule.forFeature<ArticleState>('article', articleReducer),
    EffectsModule.forFeature([ArticleEffects]),
  ],
})
export class DomainModule {}
