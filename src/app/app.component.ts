import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { AddAssignmentComponent } from "./assignments/add-assignment/add-assignment.component";
import { Router } from '@angular/router';
import { AuthService } from './shared/auth.service';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, MatButtonModule, MatDividerModule, MatFormFieldModule,
    MatInputModule, MatSlideToggle, MatDatepickerModule, RouterLink,
    MatFormFieldModule, MatIconModule, MatListModule, FormsModule, CommonModule,
    MatToolbarModule, MatNativeDateModule, MatSidenavModule, MatButtonModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  opened = false;
  
  title = 'Assignment Management Application';
  
  // Добавляем переменные для username и password
  username: string = '';  // для логина
  password: string = '';  // для пароля

  constructor(public authService: AuthService, private router: Router) {}

  // Метод для отправки формы логина
  onLoginSubmit() {
    this.authService.logIn();
    this.router.navigate(['/home']);  // Переход на страницу после логина
  }

  // Метод для входа как гость
  loginAsGuest() {
    this.authService.logInAsGuest();
    this.router.navigate(['/home']);  // Переход на страницу после входа как гость
  }

  // Функция для логина обычного пользователя
  login() {
    if (!this.authService.loggedIn) {
      this.authService.logIn(); // Логин как обычный пользователь
    } else {
      this.authService.logout();
      this.router.navigate(['/home']);
    }
  }
}
