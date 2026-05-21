import { Component, inject } from '@angular/core';
import { MusicService } from '../../../../core/services/music/music.service';

@Component({
  selector: 'app-sound-btn',
  standalone: true,
  imports: [],
  templateUrl: './sound-btn.component.html',
  styleUrl: './sound-btn.component.scss'
})
export class SoundBtnComponent {
  public sound: boolean = false;
  private musicService = inject(MusicService);
  muteSound(): void {
    this.sound = !this.sound;
    this.musicService.toggleMute(this.sound);
    console.log('MUTE SOUND', this.sound);
  }
}
