import { Injectable } from '@angular/core'; // Импортируем Injectable

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedInStatus = false;  // Сделали переменную приватной

  logIn() {
    this.loggedInStatus = true;
  }

  logout() {
    this.loggedInStatus = false;
  }

  // Геттер для проверки состояния входа
  get loggedIn(): boolean {
    return this.loggedInStatus;
  }

  isAdmin() {
    const isUserAdmin = new Promise(
      (resolve, reject) => {
        resolve(this.loggedInStatus);
      }
    );
    return isUserAdmin;
  }
}
