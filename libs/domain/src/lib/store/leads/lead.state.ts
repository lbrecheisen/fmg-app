import { Lead } from '../../models/leads/lead.model';

export interface LeadState {
  lead: Lead | null;
  error: string | null;
  isLoading: boolean;
}
