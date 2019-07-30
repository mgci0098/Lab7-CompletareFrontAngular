import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Register } from '../components/models/register';
import { LoginUser } from '../components/models/loginUser'; 

@Injectable({ providedIn: 'root' })
export class AuthService {
  private currentUserSubject: BehaviorSubject<LoginUser>;
  public currentUser: Observable<LoginUser>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<LoginUser>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): LoginUser {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
    return this.http.post<any>(`https://localhost:44301/api/users/authenticate`, { username, password })
      .pipe(map(user => {
        if (user && user.token) {
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
        }

        return user;
      }));
  }

  register(info: Register) {
    return this.http.post<LoginUser>(`https://localhost:44301/api/users/register`, info)
      .pipe(map(u => {
        return u;
      }));
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
