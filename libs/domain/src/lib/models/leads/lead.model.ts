import { Entity } from '../common/entity.model';

export interface Lead extends Entity {
  fields: { [key: string]: string };
}
