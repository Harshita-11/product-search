import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HTTPService {
  constructor(private $http: HttpClient) {}

  getTest(urlPath: string) {
    return this.$http.get(urlPath);
  }
}
