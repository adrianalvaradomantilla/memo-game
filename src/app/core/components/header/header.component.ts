import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  public menuHeader = [
    { label: 'Main', route: '/'},
    { label: 'Score', route: '/score'},
    { label: 'New User', route: '/new-user'},
  ]

  private router = inject(Router);

  constructor() { } 

  ngOnInit(): void {
    
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

}
