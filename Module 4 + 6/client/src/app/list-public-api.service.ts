import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIList } from './interfaces/ListPublicAPIs';

@Injectable({
  providedIn: 'root'
})
export class ListPublicApiService {
  constructor(private _http: HttpClient) {}
  private _url: string = "/entries"
  getListApisData(): Observable<APIList> {
    return this._http.get<APIList>(this._url);
  }
}
