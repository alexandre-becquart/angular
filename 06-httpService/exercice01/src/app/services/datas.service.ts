import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators'
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DatasService {

  constructor(private http: HttpClient, private url: string) { }

  handleErrors(error: HttpErrorResponse) {

    if (error.error instanceof ErrorEvent) {
      console.error('Il y a une erreur : ', error.error.message);
    } else {
      console.error(
        `Erreur de backend : ${error.status}`, error.error
      );
    }
    return throwError('Unexpected Error')
    //return throwError(error.error)
  }

  getAll() {
    return this.http
      .get(this.url)
      .pipe(
        retry(2),
        catchError(this.handleErrors)
      )

  }
}
