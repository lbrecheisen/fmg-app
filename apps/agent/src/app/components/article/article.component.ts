import { Component, Input, OnInit } from '@angular/core';
import { fromAuth } from '@fmg/auth';
import { Article, articleActions, fromArticle } from '@fmg/domain';
import { select, Store } from '@ngrx/store';

@Component({
  selector: 'fmg-agent-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  @Input() article: Article | null = null;
  isAuthenticated$ = this.store.pipe(select(fromAuth.isAuthenticated));
  isLoading$ = this.store.pipe(select(fromArticle.isLoading));
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
      if (this.article) {
        this.store.dispatch(
          articleActions.remove({
            article: { ...this.article, isRemoved: true },
          })
        );
      }
    }
  }

  changeEditMode(isEditMode: boolean): void {
    this.isEditMode = isEditMode;
  }
}
