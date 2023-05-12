import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PredictGender } from './interfaces/PredictGender';

@Injectable({
  providedIn: 'root'
})
export class PredictGenderService {

  constructor(private _http: HttpClient) {}
  private _url: string = "https://api.genderize.io/?name="
  getPredictGenderData(name:string): Observable<PredictGender> {
    return this._http.get<PredictGender>(this._url+ name);
  }
}
