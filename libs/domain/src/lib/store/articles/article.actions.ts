import { Article } from '../../models/articles/article.model';
import { createAction, props } from '@ngrx/store';

const searchGet = createAction(
  '[Article] Search Get',
  props<{ agentId: string }>()
);
const searchNext = createAction('[Article] Search Next');
const searchSet = createAction(
  '[Article] Search Set',
  props<{ items: Article[]; continuation: string; append: boolean }>()
);
const set = createAction('[Article] Set', props<{ article: Article | null }>());
const setCategory = createAction(
  '[Article] Set Category',
  props<{ category: string | null }>()
);
const insert = createAction('[Article] Insert', props<{ article: Article }>());
const remove = createAction('[Article] Remove', props<{ article: Article }>());
const error = createAction('[Article] Error', props<{ error: string }>());

export const articleActions = {
  searchGet,
  searchSet,
  searchNext,
  set,
  setCategory,
  insert,
  remove,
  error,
};
