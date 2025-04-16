import { importProvidersFrom, NgModule } from '@angular/core';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
// Компоненты и директивы
import { AppComponent } from './app.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { RenduDirective } from './rendu.directive';
import { MatCheckbox, MatCheckboxModule } from "@angular/material/checkbox";
// Angular Material
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormField } from '@angular/material/form-field';
import{MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';



import { HttpClientModule } from '@angular/common/http';



@NgModule({
 
  imports: [
    FormsModule,    
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    BrowserModule, 
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule, 
    MatFormFieldModule,
    MatDatepickerModule, 
    MatNativeDateModule,
    MatButtonModule, 
    MatIconModule, 
    MatDividerModule,MatCheckboxModule,   MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,MatSidenavModule

  ],
})
export class AppModule {
  _id?: string;
}
bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(HttpClientModule)
  ]
});
export interface Assignment {
  _id?: string;
  nom: string;
  dateDeRendu: Date;
  rendu: boolean;
}
