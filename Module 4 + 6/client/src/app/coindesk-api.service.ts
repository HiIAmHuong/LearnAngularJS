import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, retry, catchError, throwError, Observable } from 'rxjs';
import { ICoindeskBPI } from './interfaces/CoindeskInfo';


@Injectable({
  providedIn: 'root',
})
export class CoindeskApiService {
  constructor(private _http: HttpClient) {}
  private _url: string = "/v1/bpi/currentprice.json"
  getCoinData(): Observable<any> {
    return this._http.get<any>(this._url);
  }
}
