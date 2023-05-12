import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { IProduct } from './interfaces/product';
import { Information } from './interfaces/info';
import { ICustomer } from './interfaces/customer';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  // getProducts(){
  //  let products = [
  //     {
  //       maSP:"p1",
  //       tenSP:"coca",
  //       giaSP: 100,
  //       img:"assets/coke.png"
  //     },
  //     {
  //       maSP:"p2",
  //       tenSP:"sting",
  //       giaSP: 300,
  //       img:"assets/sting.png"
  //     },
  //     {
  //       maSP:"p3",
  //       tenSP:"mirinda",
  //       giaSP: 200,
  //       img:"assets/mirinda.png"
  //     }
  //   ]
  //   return products
  // }

  productsImage = [
    {
      maSP: 'p1',
      tenSP: 'coca',
      giaSP: 100,
      img: 'assets/coke.png',
    },
    {
      maSP: 'p2',
      tenSP: 'sting',
      giaSP: 300,
      img: 'assets/sting.png',
    },
    {
      maSP: 'p3',
      tenSP: 'mirinda',
      giaSP: 200,
      img: 'assets/mirinda.png',
    },
  ];
  getProductsWithImages() {
    return this.productsImage;
  }
  getProductDetail(id: any) {
    return this.productsImage.find((x) => x.maSP == id);
  }

  //productHttpService
  private _url: string = './assets/Data/productsXXX.json';
  constructor(private _http: HttpClient) {}
  getProducts(): Observable<IProduct[]> {
    return this._http.get<IProduct[]>(this._url);
  }
  getProductsHandleError() {
    return this._http
      .get<IProduct[]>(this._url)
      .pipe(retry(3), catchError(this.handleError));
  }
  handleError(error: HttpErrorResponse) {
    return throwError(() => new Error(error.message));
  }

  //customers
  customer = {
    Id: 'Cus123',
    Name: 'Obama',
    Email: 'obama@gmail.com',
    Age: 67,
    Image: 'assets/obama.png',
  };
  private _url_c: string = './assets/Data/cus.json';
  getCustomer(){
    return this.customer;
  }
  // group customer
  private _url_gc: string = './assets/Data/customer-group.json';

  getCustomerGroup(): Observable<ICustomer[]> {
    return this._http.get<ICustomer[]>(this._url_gc);
  }
  // login screen
  private _info: string = './assets/Data/information.json';
  getInfo(): Observable<Information[]> {
    return this._http.get<Information[]>(this._info);
  }
}
