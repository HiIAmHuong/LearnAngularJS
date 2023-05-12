import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIList } from './interfaces/ListPublicAPIs';
import { PopulationData } from './interfaces/Population';

@Injectable({
  providedIn: 'root'
})
export class UsPublicDataService {

  constructor(private _http: HttpClient) {}
  private _url: string = "/api/data?drilldowns=Nation&measures=Population"
  getUSPublicData(): Observable<PopulationData> {
    return this._http.get<PopulationData>(this._url);
  }
}
