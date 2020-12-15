import { articleActions } from './article.actions';
import { ArticleState } from './article.state';
import { Action, createReducer, On, on } from '@ngrx/store';
import { produce } from 'immer';

const initialState: ArticleState = {
  category: null,
  article: null,
  articles: { items: [], continuation: '' },
  isLoading: false,
  error: null,
};

const ons: On<ArticleState>[] = [
  on(articleActions.searchGet, (state, {}) =>
    produce<ArticleState>(state, (draft) => {
      draft.isLoading = true;
    })
  ),
  on(articleActions.searchSet, (state, { items, continuation, append }) =>
    produce<ArticleState>(state, (draft) => {
      draft.isLoading = false;

      if (append) {
        draft.articles.items = [...draft.articles.items, ...items];
      } else {
        draft.articles.items = items;
      }

      draft.articles.continuation = continuation;
    })
  ),
  on(articleActions.set, (state, { article }) =>
    produce<ArticleState>(state, (draft) => {
      draft.isLoading = false;
      draft.article = article;
    })
  ),
  on(articleActions.setCategory, (state, { category }) =>
    produce<ArticleState>(state, (draft) => {
      draft.isLoading = false;
      draft.category = category;
    })
  ),
  on(articleActions.insert, (state) =>
    produce<ArticleState>(state, (draft) => {
      draft.isLoading = true;
    })
  ),
  on(articleActions.remove, (state) =>
    produce<ArticleState>(state, (draft) => {
      draft.isLoading = true;
    })
  ),
  on(articleActions.error, (state, { error }) =>
    produce<ArticleState>(state, (draft) => {
      draft.isLoading = false;
      draft.error = error;
    })
  ),
];

export function articleReducer(
  state: ArticleState | undefined,
  action: Action
): ArticleState {
  return createReducer(initialState, ...ons)(state, action);
}
