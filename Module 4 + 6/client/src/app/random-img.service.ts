import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RandomImgService {

  constructor(private _http: HttpClient) {}
  private _url: string = "https://dog.ceo/api/breeds/image/random"
  getRandomData(): Observable<any> {
    return this._http.get<any>(this._url);
  }
}
