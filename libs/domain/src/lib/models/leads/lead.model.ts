import { Entity } from '../common/entity.model';

export interface Lead extends Entity {
  name: string;
  phone: string;
  email: string;
  maxPrice: string;
  minBedrooms: string;
  minBathrooms: string;
  minGarageSpaces: string;
  minSquareFootage: string;
  additionalInfo: string;
}
