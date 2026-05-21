import { Injectable } from '@angular/core';
import { UserRegister } from '../../models/user-register';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public globalUsers: UserRegister[] = [];  
  public userActive: BehaviorSubject<UserRegister> = new BehaviorSubject<UserRegister>({ username: '', score: 0, isActive: false  });
  constructor() {

   }

   addGlobalUsers(userRegister: UserRegister):void{
      this.globalUsers.push(userRegister);
   }

   modifyScoreActiveUser(score: number): void {
    const currentUser = this.userActive.getValue();
    if (currentUser) {
      const updateUserScore = {
        ...currentUser,
        score: score
      }
      this.userActive.next(updateUserScore);
      this.modifyLastUserScore(score);
    }
  }

   modifyUserActive(user: UserRegister): void {
    this.userActive.next(user);
    this.addGlobalUsers(user);
   }

   modifyLastUserScore(score: number): void {
    const lastUserIndex = this.globalUsers.length - 1;
    if (lastUserIndex >= 0) {
      const lastUser = this.globalUsers[lastUserIndex];
      lastUser.score = score;
    }
   }

   modifyLastUser(): void {
    const lastUserIndex = this.globalUsers.length - 1;
    if (lastUserIndex >= 0) {
      const lastUser = this.globalUsers[lastUserIndex];
      lastUser.isActive = false;
    }
   }
}
