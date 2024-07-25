import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor() { }

  private loggedIn = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.loggedIn.asObservable();

  }

  login() {
    this.loggedIn.next(true);

    
  }

  logout() {
    this.loggedIn.next(false);
  }
}
