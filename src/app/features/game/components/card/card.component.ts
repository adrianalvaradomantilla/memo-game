import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardContent } from '../../models/card-content';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input({ required: true })
  card!: CardContent;
  @Output() cardClicked = new EventEmitter<CardContent>();
  @Input() disabled = false;

  onCardClick(card:CardContent): void {
    this.cardClicked.emit(this.card);
  }

  ngOnChanges(): void {
  }
}
