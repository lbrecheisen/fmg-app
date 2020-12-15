import { Article } from '../../models/articles/article.model';

export interface ArticleState {
  category: string | null;
  articles: { items: Article[]; continuation: string | null };
  article: Article | null;
  error: string | null;
  isLoading: boolean;
}
