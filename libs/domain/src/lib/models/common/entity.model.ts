export interface Entity {
  id: string;
  isRemoved: boolean;
  version: string;
  updated: { by: string; on: string };
  created: { by: string; on: string };
}
