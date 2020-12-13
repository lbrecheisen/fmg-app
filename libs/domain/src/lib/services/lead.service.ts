import { Lead } from '../models/leads/lead.model';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LeadService {
  constructor() {}

  get(): Observable<Lead | null> {
    return of(null);
  }
}
