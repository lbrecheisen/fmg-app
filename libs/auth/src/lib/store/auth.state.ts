import { Claim } from '../models/claim.model';

export interface AuthState {
  claim: Claim | null;
  error: string | null;
  isLoading: boolean;
}
