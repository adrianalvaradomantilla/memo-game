import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatusGameService {

  
  public PairStatus = new BehaviorSubject<number>(0);
  constructor() { }

  modifyPairStatus(status: number): void{
    this.PairStatus.next(status);
  }
}
