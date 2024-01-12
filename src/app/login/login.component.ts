// login.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
    <form (ngSubmit)="submitForm()" #loginForm="ngForm">
      <div>
        <label for="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          [(ngModel)]="username"
          required
        />
      </div>
      <div>
        <label for="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          [(ngModel)]="password"
          required
        />
      </div>
      <div *ngIf="!isValid">
        <p class="error-message">Invalid username or password format.</p>
      </div>
      <button type="submit" [disabled]="!loginForm.valid">Submit</button>
    </form>
  `,
  styles: [
    `
      .error-message {
        color: red;
        margin-top: 5px;
      }
    `,
  ],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  isValid: boolean = true;

  submitForm() {
    // Perform login logic here
    if (this.isValid) {
      // Call login service or perform other actions
      console.log('Form submitted:', this.username, this.password);
    }
  }
}
