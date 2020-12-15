import { articleActions } from './article.actions';
import { Injectable } from '@angular/core';
import { InsightsService } from '@fmg/util';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  catchError,
  concatMap,
  filter,
  map,
  switchMap,
  tap,
  withLatestFrom,
} from 'rxjs/operators';
import { ArticleService } from '../../services/article.service';
import { of } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { fromArticle } from '.';
import { fromAgent } from '../agents';
import { Agent } from '../../models/agents/agent.model';
import { v4 as uuidv4 } from 'uuid';

@Injectable({ providedIn: 'root' })
export class ArticleEffects {
  searchGet$ = createEffect(() =>
    this.action$.pipe(
      ofType(articleActions.searchGet),
      withLatestFrom(this.store.pipe(select(fromArticle.category))),
      switchMap(([{ agentId }, category]) =>
        this.articleService.search(category, agentId, null)
      ),
      map((articles) =>
        articleActions.searchSet({ ...articles, append: false })
      ),
      catchError((error) =>
        of(articleActions.error({ error: JSON.stringify(error) }))
      )
    )
  );

  searchNext$ = createEffect(() =>
    this.action$.pipe(
      ofType(articleActions.searchNext),
      withLatestFrom(
        this.store.pipe(
          select(fromAgent.agent),
          filter((agent): agent is Agent => !!agent)
        ),
        this.store.pipe(select(fromArticle.category)),
        this.store.pipe(
          select(fromArticle.articles),
          map((articles) => articles.continuation)
        )
      ),
      switchMap(([, { id }, category, continuation]) =>
        this.articleService.search(category, id, continuation)
      ),
      map((articles) =>
        articleActions.searchSet({ ...articles, append: true })
      ),
      catchError((error) =>
        of(articleActions.error({ error: JSON.stringify(error) }))
      )
    )
  );

  insert$ = createEffect(() =>
    this.action$.pipe(
      ofType(articleActions.insert),
      withLatestFrom(
        this.store.pipe(
          select(fromAgent.agent),
          filter((agent): agent is Agent => !!agent)
        ),
        this.store.pipe(select(fromArticle.category))
      ),
      map(([{ article }, { id }, category]) => ({
        ...article,
        category: category,
        agentId: id,
        ...(!!article.id ? { id: article.id } : { id: uuidv4() }),
      })),
      switchMap((article) => this.articleService.insert(article)),
      concatMap((article) => [
        articleActions.set({ article }),
        articleActions.searchGet({ agentId: article.agentId }),
      ]),
      catchError((error) =>
        of(articleActions.error({ error: JSON.stringify(error) }))
      )
    )
  );

  remove$ = createEffect(() =>
    this.action$.pipe(
      ofType(articleActions.remove),
      switchMap(({ article }) => this.articleService.insert(article)),
      concatMap((article) => [
        articleActions.set({ article }),
        articleActions.searchGet({ agentId: article.agentId }),
      ]),
      catchError((error) =>
        of(articleActions.error({ error: JSON.stringify(error) }))
      )
    )
  );

  error$ = createEffect(
    () =>
      this.action$.pipe(
        ofType(articleActions.error),
        tap(({ error }) => this.insightsService.exception(new Error(error)))
      ),
    { dispatch: false }
  );

  constructor(
    private action$: Actions,
    private store: Store,
    private articleService: ArticleService,
    private insightsService: InsightsService
  ) {}
}
