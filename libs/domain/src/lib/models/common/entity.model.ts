export interface Entity {
  key: string;
  version: string;
  updated: { by: string; on: Date };
  created: { by: string; on: Date };
}
