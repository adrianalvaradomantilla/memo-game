import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { ModalCard } from '../../../features/game/models/modal-card';
@Component({
  selector: 'app-selection-result-modal',
  standalone: true,
  imports: [MatDialogModule, CommonModule],
  templateUrl: './selection-result-modal.component.html',
  styleUrl: './selection-result-modal.component.scss'
})
export class SelectionResultModalComponent implements OnInit {
    constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: { content: ModalCard }
  ) {}

  ngOnInit(): void {
  console.log(this.data.content);
  }
}
