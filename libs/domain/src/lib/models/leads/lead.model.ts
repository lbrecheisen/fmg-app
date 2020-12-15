import { Entity } from '../common/entity.model';

export interface Lead extends Entity {
  agentId: string;
  name: string;
  phone: string;
  email: string | null;
  maxPrice: string | null;
  minBedrooms: string | null;
  minBathrooms: string | null;
  minGarageSpaces: string | null;
  minSquareFootage: string | null;
  additionalInfo: string | null;
}
