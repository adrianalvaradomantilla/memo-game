import { Component } from '@angular/core';

@Component({
  selector: 'app-sound-btn',
  standalone: true,
  imports: [],
  templateUrl: './sound-btn.component.html',
  styleUrl: './sound-btn.component.scss'
})
export class SoundBtnComponent {
  public sound: boolean = true;
  
  muteSound(): void {
    this.sound = !this.sound;
    console.log('MUTE SOUND', this.sound);
  }
}
