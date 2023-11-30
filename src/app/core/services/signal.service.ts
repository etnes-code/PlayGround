import { Injectable, signal } from '@angular/core';
import { UserProfile } from './models/user-profil';


@Injectable({
  providedIn: 'root'
})
export class SignalService {

  public userProfileSignal = signal<UserProfile|null>(null);

  constructor() { 
    let user : UserProfile = {id: 1, username: 'user', email: 'user@example.com'};
    this.userProfileSignal.set(user); 
    
  }

  updateProfile(userName : string) {
    this.userProfileSignal.update(user  => {
      user ? user.username = userName : null;
      return user;
    });
}
}

