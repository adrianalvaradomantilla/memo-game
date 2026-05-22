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
 

  
  private userService = inject(UserService);
  public globalUsers = this.userService.globalUsers
  .filter(user => user.score !== 0)
  .sort((a, b) => a.score - b.score);
  
  ngOnInit(): void {
    console.log('GLOBAL SCORE', this.userService.globalUsers);
  }

}
