import { Entity } from '../common/entity.model';

export interface Agent extends Entity {
  name: string;
  oid: string;
  email: string;
  phone: string;
  profileImageUrl: string | null;
}
