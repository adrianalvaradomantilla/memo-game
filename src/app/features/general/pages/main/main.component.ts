import { Component, inject } from '@angular/core';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { RouterModule, Router } from '@angular/router';
import { AppFlowService } from '../../../../core/services/app-flow/app-flow.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ButtonComponent, RouterModule],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  private router = inject(Router);
  private appFlow = inject(AppFlowService);
  goToStartGame(): void {
    this.appFlow.allowGameAccess();
    this.router.navigate(['/game']);
  }

  goToNewUser(): void {
    this.router.navigate(['/new-user']);
  }

}
