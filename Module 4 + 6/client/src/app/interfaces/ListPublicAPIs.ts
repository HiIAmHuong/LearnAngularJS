export interface API {
  API: string;
  Description: string;
  Auth: string;
  HTTPS: boolean;
  Cors: string;
  Link: string;
  Category: string;
}

export interface APIList {
  count: number;
  entries: API[];
}
