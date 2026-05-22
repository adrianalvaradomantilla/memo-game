import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StatusGameService } from '../../../../core/services/status/status-game.service';
import { AppFlowService } from '../../../../core/services/app-flow/app-flow.service';
import { RESULT_MESSAGES } from '../../../../shared/constants/result-messages';
@Component({
  selector: 'app-result',
  standalone: true,
  imports: [],
  templateUrl: './result.component.html',
  styleUrl: './result.component.scss'
})
export class ResultComponent implements OnInit, OnDestroy {
  public message: string = '';
  public image:string = ''
  private appFlow = inject(AppFlowService);
  private router = inject(Router);
  private gameStatus = inject(StatusGameService);
  ngOnInit(): void {
    this.gameStatus.PairStatus.subscribe(status => {
      if(status < 4){
        this.message = RESULT_MESSAGES.lose.message;
        this.image = RESULT_MESSAGES.lose.image;
        return;
      }
      this.message = RESULT_MESSAGES.win.message;
      this.image = RESULT_MESSAGES.win.image;
    });
  }

  ngOnDestroy(): void {
    this.gameStatus.PairStatus.next(0);
  }

  playAgain(): void {
    this.appFlow.allowGameAccess();
    this.router.navigate(['/game']);
    this.gameStatus.PairStatus.next(0);
  }

}
