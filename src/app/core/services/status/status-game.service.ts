import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatusGameService {

  
  public PairStatus = new BehaviorSubject<number>(0);
  public TimeStatus = new Subject<number>();
  constructor() { }

  modifyPairStatus(status: number): void{
    this.PairStatus.next(status);
  }

  modifyTimeStatus(status:number):void{
    this.TimeStatus.next(status);
  }
}
