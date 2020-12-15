import { Lead } from '../models/leads/lead.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '@fmg/config';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class LeadService {
  private base = `${environment.azure.function.endpoint}/leads`;

  constructor(private http: HttpClient) {}

  insert(lead: Lead): Observable<Lead> {
    const opts = {
      headers: { 'X-Functions-Key': environment.azure.function.key },
    };

    return this.http.post<Lead>(this.base, lead, opts);
  }
}
