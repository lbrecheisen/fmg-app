import { Component } from '@angular/core';
import { fromAuth } from '@fmg/auth';
import { articleActions, fromArticle } from '@fmg/domain';
import { select, Store } from '@ngrx/store';

@Component({
  templateUrl: './articles.page.html',
  styleUrls: ['./articles.page.scss'],
})
export class ArticlesPage {
  article$ = this.store.pipe(select(fromArticle.articles));
  continuation$ = this.store.pipe(select(fromArticle.continuation));
  isAuthenticated$ = this.store.pipe(select(fromAuth.isAuthenticated));

  isAddingNewArticle = false;

  constructor(private store: Store) {}

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
