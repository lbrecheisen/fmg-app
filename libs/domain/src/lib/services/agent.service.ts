import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '@fmg/config';
import { HttpClient } from '@angular/common/http';
import { Agent } from '../models/agents/agent.model';

@Injectable({ providedIn: 'root' })
export class AgentService {
  private base = `${environment.azure.function.endpoint}/agents`;

  constructor(private http: HttpClient) {}

  find(id: string): Observable<Agent | null> {
    const opts = {
      params: { ...(!!id ? { id } : {}) },
      headers: { 'X-Functions-Key': environment.azure.function.key },
    };

    return this.http.get<Agent | null>(this.base, opts);
  }
}
