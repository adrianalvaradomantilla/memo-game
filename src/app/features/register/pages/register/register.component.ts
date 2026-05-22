import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../../../core/services/users/user.service';
import { Router } from '@angular/router';
import { AppFlowService } from '../../../../core/services/app-flow/app-flow.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  private formBuilder = inject(FormBuilder);
  private userService = inject(UserService);
  private router = inject(Router);
  private appFlow = inject(AppFlowService);
  public registerForm = this.formBuilder.group({
    username: ['', Validators.required]
  });

  constructor() { } 

  onSubmit(): void {
    this.userService.modifyLastUser();
    this.userService.modifyUserActive({
      username: this.registerForm.value.username || '',
      score: 0,
      isActive: true
    });
    this.appFlow.allowGameAccess();
    this.router.navigate(['/game']);
  } 
}
