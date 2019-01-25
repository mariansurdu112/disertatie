import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { BehaviorSubject, Subject, Observable } from 'rxjs';
import { User } from '../models/user.model';
import { UserGrants } from '../models/usergrants.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loginUrl = environment.API_URL + 'token';
  currentUser: Subject<User> = new BehaviorSubject<User>(null);

  public setCurrentUser(newUser: User): void {
    this.currentUser.next(newUser);
  }

  public loginUser(user: UserGrants): Observable<any> {
    const dataToSend = `username=${user.Email}&password=${user.Password}&grant_type=${user.Grant}`;
    return this.http.post(this.loginUrl, dataToSend);
  }
  constructor(private http: HttpClient) { }
}
