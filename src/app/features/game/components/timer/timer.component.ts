import { Component, EventEmitter, inject, OnDestroy, OnInit, Output } from '@angular/core';
import { interval, map, Subscription, take } from 'rxjs';
import { StatusGameService } from '../../../../core/services/status/status-game.service';
import { MusicService } from '../../../../core/services/music/music.service';

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.scss'
})
export class TimerComponent implements OnInit, OnDestroy {
  public counter:number = 30;
  private gameStatus = inject(StatusGameService);
  private musicService = inject(MusicService);
  private timeSubscription!:Subscription;
  @Output() timeOver = new EventEmitter<boolean>(false);

  ngOnInit(): void {
    this.timeSubscription = interval(1000).pipe(
      take(31),
      map(value => 30 - value)
    )
    .subscribe(value => {
      this.counter = value;
      if(this.counter === 10){
        this.musicService.stopBackgroundMusic();
        this.musicService.playCountdown();
      }
      if(this.counter === 0){
        this.timeOver.emit(true);
      }
    });
  }

  ngOnDestroy(): void {
    this.timeSubscription.unsubscribe();
  }
  
}
