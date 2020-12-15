import { Component, Input, OnInit } from '@angular/core';
import { fromAuth } from '@fmg/auth';
import { Article, articleActions } from '@fmg/domain';
import { select, Store } from '@ngrx/store';

@Component({
  selector: 'fmg-agent-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  @Input()
  article: Article = {
    id: '',
    version: '',
    title: '',
    body: '',
    category: '',
    agentId: '',
    isRemoved: false,
    created: { by: '', on: new Date().toISOString() },
    updated: { by: '', on: new Date().toISOString() },
  };
  isAuthenticated$ = this.store.pipe(select(fromAuth.isAuthenticated));
  isEditMode = false;

  constructor(private store: Store) {}

  ngOnInit(): void {}

  onEditClick(): void {
    this.isEditMode = true;
  }

  onDeleteClick(title: string): void {
    if (
      confirm(`Are you sure you want to delete the article titled '${title}'?`)
    ) {
      this.store.dispatch(
        articleActions.remove({ article: { ...this.article, isRemoved: true } })
      );
    }
  }

  changeEditMode(isEditMode: boolean): void {
    this.isEditMode = isEditMode;
  }
}
