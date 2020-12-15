import { Component, OnInit } from '@angular/core';
import { fromAuth } from '@fmg/auth';
import { Agent, articleActions, fromAgent, fromArticle } from '@fmg/domain';
import { select, Store } from '@ngrx/store';
import { filter, map, tap } from 'rxjs/operators';

@Component({
  templateUrl: './articles.page.html',
  styleUrls: ['./articles.page.scss'],
})
export class ArticlesPage implements OnInit {
  article$ = this.store.pipe(select(fromArticle.articles));
  continuation$ = this.store.pipe(select(fromArticle.continuation));
  isAuthenticated$ = this.store.pipe(select(fromAuth.isAuthenticated));
  agent$ = this.store.pipe(
    select(fromAgent.agent),
    filter((agent): agent is Agent => !!agent),
    tap(({ id }) =>
      this.store.dispatch(articleActions.searchGet({ agentId: id }))
    )
  );
  isLead$ = this.store.pipe(
    select(fromArticle.category),
    filter((category): category is string => !!category),
    map((category) => ['buy', 'sell', 'valuate'].includes(category))
  );

  isAddingNewArticle = false;

  constructor(private store: Store) {}

  ngOnInit(): void {}

  onLoadMoreClick(): void {
    this.store.dispatch(articleActions.searchNext());
  }

  onAddArticleClick(): void {
    this.isAddingNewArticle = true;
  }

  onEditModeChangeEvent(isEditMode: boolean): void {
    if (!isEditMode) {
      this.isAddingNewArticle = false;
    }
  }
}
