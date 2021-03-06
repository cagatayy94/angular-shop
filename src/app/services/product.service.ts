import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Product } from '../product/product';
import { Observable, throwError } from 'rxjs';
import { tap, catchError} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient) { }
  path = "http://localhost:3000/products";

  getProducts(categoryId: any):Observable<Product[]>{

    let newPath = this.path;

    if(categoryId){
      newPath += "?categoryId=" + categoryId;
    }

    return this.httpClient.get<Product[]>(newPath).pipe(
      tap(data=>console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  handleError(err: HttpErrorResponse) {
    let errorMessage = "";
    if (err.error instanceof ErrorEvent) {
      errorMessage = "Bir sorun oluştu. "+err.error.message
    }else{
      errorMessage = "Sistemsel bir hata oluştu";
    }
    return throwError(errorMessage);
  }
}
