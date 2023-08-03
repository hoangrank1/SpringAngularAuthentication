import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiURL = 'http://localhost:8080/';

  constructor(
    private http: HttpClient
  ) { }

  postUser(user: any): Observable<any> {
    return this.http.post(this.apiURL + "api/user", user)
  }

  getAllUsers(): Observable<any> {
    return this.http.get(this.apiURL + "api/users")
  }

  deleteUser(id: any): Observable<any> {
    return this.http.delete(this.apiURL + `api/${id}`)
  }

  updateUser(id: number, user: any): Observable<any> {
    return this.http.put(this.apiURL + `api/user/${id}`, user)
  }

  getUserById(id: any): Observable<any> {
    return this.http.get(this.apiURL + `api/user/${id}`)
  }
}
