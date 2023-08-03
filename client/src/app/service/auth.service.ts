import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const BASE_URL = ['http://localhost:8080/'];


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  signup(signupRequest: any): Observable<any> {
    return this.http.post(BASE_URL + "register", signupRequest);
  }

  login(loginRequest: any): Observable<any> {
    return this.http.post(BASE_URL + "authentication", loginRequest);
  }

  hello(): Observable<any> {
    const jwtToken = localStorage.getItem('JWT');
    if (jwtToken) {
      let httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Authorization': `Bearer ${jwtToken}`
        })
      }
      return this.http.get(BASE_URL + 'api/hello', httpOptions);
    }
    else {
      return this.http.get(BASE_URL + 'api/hello');
    }
  }

}
