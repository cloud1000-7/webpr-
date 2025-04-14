import { Component } from '@angular/core';
import { Assignment } from '../assignment.model';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AssignmentsService } from '../../shared/assignments.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../shared/auth.service';
import { NgModule } from '@angular/core';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-assignment-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, MatCardModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatButtonModule],
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.css']
})
export class AssignmentDetailComponent {
  assignmentTransmis!: Assignment;
  isEdit: boolean = false; // Флаг для редактирования

  constructor(
    private authService: AuthService,
    private assignmentsService: AssignmentsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAssignment();
  }

  getAssignment() {
    const id = this.route.snapshot.params['id'];
    this.assignmentsService.getAssignment(id).subscribe(
      (assignment) => {
        console.log('Задание загружено:', assignment);  // Проверяем данные в консоли
        this.assignmentTransmis = assignment;
      },
      (error) => {
        console.error('Ошибка загрузки задания:', error);  // Ошибки в запросе
      }
    );
  }

  // Сохранить изменения задания
  saveAssignment() {
    this.assignmentsService.updateAssignment(this.assignmentTransmis).subscribe(() => {
      this.isEdit = false;  // Выключаем режим редактирования
    });
  }

  // Отмена редактирования
  cancelEdit() {
    this.isEdit = false;  // Выключаем режим редактирования
    this.getAssignment();  // Возвращаем задание в первоначальное состояние
  }

  // Отметить задание как выполненное
  onAssignmentRendu() {
    this.assignmentTransmis.submitted = true;
    this.assignmentsService.updateAssignment(this.assignmentTransmis).subscribe();
  }

  // Удалить задание
  onDelete() {
    this.assignmentsService.deleteAssignment(this.assignmentTransmis).subscribe(() => {
      this.router.navigate(['/assignments']);
    });
  }

  // Проверка, является ли пользователь администратором
  isAdmin(): boolean {
    return this.authService.loggedIn;
    
  }
}
