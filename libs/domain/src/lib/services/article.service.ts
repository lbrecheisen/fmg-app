import { Article } from '../models/articles/article.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '@fmg/config';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ArticleService {
  private base = `${environment.azure.function.endpoint}/articles`;

  constructor(private http: HttpClient) {}

  insert(article: Article): Observable<Article> {
    const opts = {
      headers: { 'X-Functions-Key': environment.azure.function.key },
    };

    return this.http.put<Article>(this.base, article, opts);
  }

  search(
    category: string | null,
    agentId: string | null,
    continuation: string | null
  ): Observable<{ items: Article[]; continuation: string }> {
    const opts = {
      params: {
        ...(!!category ? { category } : {}),
        ...(!!agentId ? { agentId } : {}),
      },
      headers: { 'X-Functions-Key': environment.azure.function.key },
    };

    return this.http.post<{ items: Article[]; continuation: string }>(
      this.base,
      { ...(!!continuation ? { continuation } : {}) },
      opts
    );
  }
}
