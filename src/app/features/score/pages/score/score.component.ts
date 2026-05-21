import { Component, inject, OnInit } from '@angular/core';
import { UserRegister } from '../../../../core/models/user-register';
import { UserService } from '../../../../core/services/users/user.service';
@Component({
  selector: 'app-score',
  standalone: true,
  imports: [],
  templateUrl: './score.component.html',
  styleUrl: './score.component.scss'
})
export class ScoreComponent implements OnInit {
  public usersScore: UserRegister[] = [
    { username: 'User1', score: 100, isActive: true },
    { username: 'User2', score: 80, isActive: false },
    { username: 'User3', score: 120, isActive: false },
    { username: 'User4', score: 90, isActive: false },
    { username: 'User5', score: 110, isActive: false }
  ];

  
  private userService = inject(UserService);
  public globalUsers = this.userService.globalUsers;
  
  ngOnInit(): void {
    console.log('GLOBAL SCORE', this.userService.globalUsers);
  }

}
