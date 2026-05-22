import { AfterViewInit, Component, inject, OnDestroy, OnInit } from '@angular/core';
import { cardsToRender } from '../../../../shared/constants/card-content';
import { CardContent } from '../../models/card-content';
import { CardComponent } from '../../components/card/card.component';
import { SoundBtnComponent } from '../../components/sound-btn/sound-btn.component';
import { TimerComponent } from '../../components/timer/timer.component';
import { SelectionResultModalComponent } from '../../../../shared/components/selection-result-modal/selection-result-modal.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ModalCard } from '../../models/modal-card';
import { modalMessages } from '../../../../shared/constants/messages';
import { StatusGameService } from '../../../../core/services/status/status-game.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MusicService } from '../../../../core/services/music/music.service';
import { UserService } from '../../../../core/services/users/user.service';
import { UserRegister } from '../../../../core/models/user-register';
import { AppFlowService } from '../../../../core/services/app-flow/app-flow.service';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [MatDialogModule, CardComponent, SoundBtnComponent, TimerComponent, SelectionResultModalComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent implements OnInit, OnDestroy{

  public cards = cardsToRender;
  public selectedTwoCards: CardContent[] = [];
  public matchedCards:number = 0;
  public disableElements:boolean = false;
  public sound: boolean = true;
  public timerStatus:number = 30;
  public pairStatus:number = 0;
  public movements:number = 0;


  private gameStatus = inject(StatusGameService)
  private musicService = inject(MusicService);
  private router = inject(Router);
  private userService = inject(UserService);
  private pairStatusSubs?: Subscription;
  private appFlow = inject(AppFlowService);
  public activeUser?: UserRegister;
  constructor(private dialog: MatDialog){}

  ngOnInit(): void {
    this.randomCards();
    this.catchGameStatus();
    this.startMusic();
    this.musicService.toggleMute(false);
    this.userService.userActive.subscribe(user => {
      this.activeUser = user;
    });
  }

  ngOnDestroy(): void {
    this.pairStatusSubs?.unsubscribe();
    this.musicService.stopBackgroundMusic();
    this.musicService.stopCountdown();
  }

  

  startMusic():void{
    this.musicService.playBackgroundMusic();
  }

  openModal(content: ModalCard): void {
    this.dialog.open(SelectionResultModalComponent, {
      width: '400px',
      data: {
        content
      }
    });
  }

  onTimeOver(event:boolean): void {
    if(event){
      this.redirectToResult();
    }
  }

  randomCards():void{
    this.cards = cardsToRender
  .map(card => ({
    ...card
  }))
  .sort(() => Math.random() - 0.5);
  }

  onCardClickEvent(card: CardContent): void {
    this.onCardClick(card);
  }

  onCardClick(value:CardContent): void {
    value.selected = !value.selected;
    if(this.selectedTwoCards.length <= 1){
      this.selectedTwoCards.push(value);
    }

    if(this.selectedTwoCards.length === 2){
      this.disableElements = true;
      this.validateContent();
      this.movements++;
      this.userService.modifyScoreActiveUser(this.movements);
    }
  }

  muteSound(): void {
    this.sound = !this.sound;

  }

  validateContent():void {
    const [firstCard, secondCard] = this.selectedTwoCards;
    if(firstCard.value === secondCard.value && firstCard.id !== secondCard.id){
      this.match(firstCard, secondCard);
    } else {
      this.noMatch(firstCard, secondCard);
    } 
    this.selectedTwoCards = [];
  }

  catchGameStatus():void{
    this.pairStatusSubs = this.gameStatus.PairStatus.subscribe(status => {   
    if(status === 4){
        this.redirectToResult();
    }
    });
  }

  match(match1: CardContent, match2: CardContent):void{
    setTimeout(() => {
        match1.matchedHide = true;
        match2.matchedHide = true;
        this.disableElements = false;
        this.matchedCards++;
        this.gameStatus.PairStatus.next(this.matchedCards);
        this.musicService.playCorrect();
        this.openModal(modalMessages.match);
      }, 400);
  }

  noMatch(noMatch1: CardContent, noMatch2: CardContent):void{
    setTimeout(() => {
      noMatch1.selected = false;
      noMatch2.selected = false;
      this.disableElements = false;
      this.musicService.playWrong();
      this.openModal(modalMessages.noMatch);
    }, 400);
  }


  redirectToResult(): void {  
    this.appFlow.allowResultAccess();
    this.router.navigate(['/result']);
  }
}
