import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { Posts } from './post';

const ruta='https://jsonplaceholder.typicode.com/';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  posts: Posts[] = [];

  constructor(private httpClient: HttpClient) {}

  getPost(): Observable<any> {
    return this.httpClient
      .get<Posts>(ruta + 'posts')
      .pipe(catchError(this.handleError));
  }


  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    return console.log('Something bad happened; please try again later.');
  }
}
