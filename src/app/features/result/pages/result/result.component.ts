import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StatusGameService } from '../../../../core/services/status/status-game.service';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [],
  templateUrl: './result.component.html',
  styleUrl: './result.component.scss'
})
export class ResultComponent implements OnInit {
  public message: string = 'Congratulations! You won the game!';

  private router = inject(Router);
  private gameStatus = inject(StatusGameService);
  ngOnInit(): void {
    this.gameStatus.PairStatus.subscribe(status => {
      if(status < 4){
        this.message = `Oops you didn't find them all`;
        return;
      }
      this.message = 'You did it'
    });
  }

  playAgain(): void {
    this.router.navigate(['/game']);
    this.gameStatus.PairStatus.next(0);
  }
}
