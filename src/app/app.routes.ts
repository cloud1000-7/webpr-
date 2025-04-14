import { Routes } from '@angular/router';
import { AssignmentsComponent } from './assignments/assignments.component';
import { AddAssignmentComponent } from './assignments/add-assignment/add-assignment.component';
import { AssignmentDetailComponent } from './assignments/assignment-detail/assignment-detail.component';
import { EditAssignmentComponent } from './assignments/edit-assignment/edit-assignment.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './shared/authentication.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: AssignmentsComponent, canActivate: [AuthGuard] },
  { path: 'assignments', component: AssignmentsComponent, canActivate: [AuthGuard] },
  { path: 'add', component: AddAssignmentComponent, canActivate: [AuthGuard] },
  { path: 'assignment/:id', component: AssignmentDetailComponent, canActivate: [AuthGuard] },
  { path: 'assignment/:id/edit', component: EditAssignmentComponent, canActivate: [AuthGuard] }
];
