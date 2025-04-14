import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { AssignmentsComponent } from './assignments/assignments.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { AddAssignmentComponent } from "./assignments/add-assignment/add-assignment.component";
import { Router } from '@angular/router';
import { AuthService } from './shared/auth.service';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatButtonModule, MatDividerModule, MatFormFieldModule,
    MatInputModule,MatSlideToggle,
    MatDatepickerModule,RouterLink,
    MatFormFieldModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    MatToolbarModule,
    MatNativeDateModule,
    MatSidenavModule,
    MatButtonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  opened=false;
  title = 'Application de gestion des devoirs a rendre (Assignments)';
  constructor(private authService:AuthService, private router: Router){}

  login(){
    if(!this.authService.loggedIn){
      this.authService.logIn();
    } else{
      this.authService.logout();
      this.router.navigate(['/home']);
    }
  }
}
