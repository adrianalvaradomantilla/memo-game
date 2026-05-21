import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { interval, map, take } from 'rxjs';

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.scss'
})
export class TimerComponent implements OnInit {
  public counter:number = 0;
  @Output() timeOver = new EventEmitter<boolean>(false);

  ngOnInit(): void {
    interval(1000).pipe(
      take(30),
      map(value => value + 1)
    )
    .subscribe(value => {
      this.counter = value;
      if(this.counter === 30){
        this.timeOver.emit(true);
      }
    });
  }
  
}
