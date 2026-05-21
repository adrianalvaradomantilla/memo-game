import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  
  private muted = false;

  // MUSICA DE FONDO
  private backgroundMusic = new Audio(
    'assets/sounds/background.mp3'
  );

  // TIMER 10s
  private countdownMusic = new Audio(
    'assets/sounds/ticking.mp3'
  );

  // MATCH
  private correctSound = new Audio(
    'assets/sounds/correct.mp3'
  );

  // WRONG
  private wrongSound = new Audio(
    'assets/sounds/incorrect.mp3'
  );

  constructor() {
    this.backgroundMusic.loop = true;
    this.backgroundMusic.volume = 0.1;
    this.countdownMusic.volume = 0.5;

  }

  playBackgroundMusic(): void {
    if (this.muted) return;
    this.backgroundMusic.currentTime = 0;
    this.backgroundMusic.play();
  }

  stopBackgroundMusic(): void {
    this.backgroundMusic.pause();
    this.backgroundMusic.currentTime = 0;
  }
  

  playCountdown(): void {
    if (this.muted) return;
    this.countdownMusic.loop = true;
    this.countdownMusic.volume = 0.3;
    this.countdownMusic.play();
  }
  

  stopCountdown(): void {
    this.countdownMusic.pause();
    this.countdownMusic.currentTime = 0;
  }

  playCorrect(): void {
    if (this.muted) return;
    this.correctSound.currentTime = 0;
    this.correctSound.play();
  }

  playWrong(): void {
    if (this.muted) return;
    this.wrongSound.currentTime = 0;
    this.wrongSound.play();
  }

  toggleMute(muted:boolean): void {
    this.backgroundMusic.muted = muted;
    this.countdownMusic.muted = muted;
    this.correctSound.muted = muted;
    this.wrongSound.muted = muted;
  }

  isMuted(): boolean {
    return this.muted;
  }
}
