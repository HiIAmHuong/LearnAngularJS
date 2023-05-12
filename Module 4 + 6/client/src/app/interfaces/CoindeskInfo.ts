export interface ICoindeskBPI{
  [key: string]: {
    code: string;
    symbol: string;
    rate: string;
    description: string;
    rate_float: number;
  }
}
