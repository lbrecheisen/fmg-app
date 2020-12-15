import { Entity } from '../common/entity.model';

export interface Article extends Entity {
  agentId: string;
  category: string | null;
  title: string;
  body: string;
}
