import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, retry, throwError } from 'rxjs';
import { Fashion,FashionsStyle } from './models/Fashion';

@Injectable({
  providedIn: 'root',
})
export class FashionStyleService {
  constructor(private _http: HttpClient) {}
  getFashionsStyle(): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain;charset=utf-8'
    );
    const requestOptions: Object = { headers: headers, responseType: 'text' };
    return this._http.get<any>('/fashions-style', requestOptions).pipe(
      map((res) =>
        JSON.parse(res) as Array<FashionsStyle>,

      ),
      retry(3),
      catchError(this.handleError)
    );
  }

  getFashion(id: string): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain;charset=utf-8'
    );
    const requestOptions: Object = { headers: headers, responseType: 'text' };
    return this._http.get<any>('/fashions/' + id, requestOptions).pipe(
      map((res) => JSON.parse(res) as Fashion),
      retry(3),
      catchError(this.handleError)
    );
  }

  handleError(error: HttpErrorResponse) {
    return throwError(() => {
      new Error(error.message),
      console.log("hiiii")
    });
  }
}
