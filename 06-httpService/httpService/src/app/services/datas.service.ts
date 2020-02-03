import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

  // create - post
  create(resource) {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

    return this.http
      .post(this.url, resource, httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleErrors)
      )

  }

  update(resource) {
    return this.http
      .patch(this.url + '/' + resource.id, resource)
      .pipe(
        retry(2),
        catchError(this.handleErrors)
      )


  }

  delete(resource) {
    return this.http
      .delete(this.url + '/' + resource.id)
      .pipe(
        retry(2),
        catchError(this.handleErrors)
      )
  }

}
