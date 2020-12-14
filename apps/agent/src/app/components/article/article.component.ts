import { Component, Input, OnInit } from '@angular/core';
import { authSelectors, AuthState } from '@fmg/auth';
import { Article, CategoryType } from '@fmg/domain';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'fmg-agent-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  @Input()
  article: Article = {
    key: '',
    version: '',
    title: '',
    body: '',
    category: CategoryType.Buy,
    created: { by: '', on: new Date() },
    updated: { by: '', on: new Date() },
  };

  isAuthenticated$: Observable<boolean>;
  isEditMode = false;

  constructor(authStore: Store<AuthState>) {
    this.isAuthenticated$ = authStore
      .select(authSelectors.isAuthenticated)
      .pipe(switchMap(() => of(true)));
  }

  ngOnInit(): void {}

  onEditClick(): void {
    this.isEditMode = true;
  }

  onDeleteClick(title: string): void {
    if (
      confirm(`Are you sure you want to delete the article titled '${title}'?`)
    ) {
      //TODO: implement article deletion
      console.log('article deleted');
    }
  }

  changeEditMode(isEditMode: boolean): void {
    this.isEditMode = isEditMode;
  }
}
