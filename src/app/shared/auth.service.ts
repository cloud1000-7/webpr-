import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedInStatus = false;
  private guestStatus = false;

  // Логин для обычного пользователя
  logIn() {
    this.loggedInStatus = true;
    this.guestStatus = false;  // Устанавливаем статус обычного пользователя
  }

  // Логин как гость
  logInAsGuest() {
    this.loggedInStatus = true;
    this.guestStatus = true;  // Устанавливаем статус гостя
  }

  // Логаут
  logout() {
    this.loggedInStatus = false;
    this.guestStatus = false;
  }

  // Геттер для проверки, залогинен ли пользователь
  get loggedIn(): boolean {
    return this.loggedInStatus;
  }

  // Геттер для проверки, является ли пользователь гостем
  get isGuest(): boolean {
    return this.guestStatus;
  }

  // Проверка, является ли пользователь администратором
  isAdmin(): boolean {
    return this.loggedInStatus && !this.guestStatus; // Администратор - залогинен, но не гость
  }
}
