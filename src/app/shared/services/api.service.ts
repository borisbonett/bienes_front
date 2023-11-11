import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUrl } from '../utilities/api-url';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) {}

  get(controller: string) {
    return this.http.get(apiUrl.url + controller);
  }

  post(body: object, controller: string) {
    return this.http.post(apiUrl.url + controller, body,)
  }

}