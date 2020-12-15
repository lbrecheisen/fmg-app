import { ArticleState } from './article.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

const article = createFeatureSelector<ArticleState>('article');

export const fromArticle = {
  article: createSelector(article, (state) => state.article),
  articles: createSelector(article, (state) => state.articles),
  category: createSelector(article, (state) => state.category),
  continuation: createSelector(
    article,
    (state) => !!state.articles.continuation
  ),
  isLoading: createSelector(article, (state) => state.isLoading),
  error: createSelector(article, (state) => state.error),
};

export { articleActions } from './article.actions';
