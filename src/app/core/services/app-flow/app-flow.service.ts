import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppFlowService {

  constructor() { }

  private canAccessGame = false;
  private canAccessResult = false;

  allowGameAccess(): void {
    this.canAccessGame = true;
  }

  allowResultAccess(): void {
    this.canAccessResult = true;
  }

  hasGameAccess(): boolean {
    return this.canAccessGame;
  }

  hasResultAccess(): boolean {
    return this.canAccessResult;
  }

  resetFlow(): void {
    this.canAccessGame = false;
    this.canAccessResult = false;
  }
}
