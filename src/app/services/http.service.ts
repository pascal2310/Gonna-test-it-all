import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PostmanCollection } from '../interfaces/postman.interface';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private readonly http: HttpClient) {}

  get<T>(url: string): Observable<T> {
    return this.http.get<T>(url);
  }

  post<T>(url: string, body: T): Observable<T> {
    return this.http.post<T>(url, body);
  }

  getPostmanCollection(): Observable<PostmanCollection> {
    return this.get<PostmanCollection>(
      'assets/mock/test collection.postman_collection.json'
    );
  }
}
