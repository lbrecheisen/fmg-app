import { CategoryType } from '../../types/article.types';
import { Entity } from '../common/entity.model';

export interface Article extends Entity {
  key: string;
  category: CategoryType;
  title: string;
  body: string;
}
