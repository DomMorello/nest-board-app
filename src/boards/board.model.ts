export interface Board {
  id: string;
  title: string;
  description: string;
  status: BoradStatus;
}

export enum BoradStatus {
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE',
}
