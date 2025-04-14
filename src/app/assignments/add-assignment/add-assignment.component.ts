import { Component } from '@angular/core';
import { Assignment } from '../assignment.model';
import { AssignmentsService } from '../../shared/assignments.service';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-assignment',
  standalone: true,
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.css'],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule
  ]
})
export class AddAssignmentComponent {
  assignmentName = '';
  assignmentDueDate!: Date;

  constructor(
    private assignmentsService: AssignmentsService,
    private router: Router
  ) {}

  onSubmit() {
    if (!this.assignmentName || !this.assignmentDueDate) return;

    const newAssignment = new Assignment(this.assignmentName, this.assignmentDueDate);

    this.assignmentsService.addAssignment(newAssignment).subscribe({
      next: () => {
        this.router.navigate(['/assignments']);
      },
      error: (err) => console.error('❌ Ошибка при добавлении:', err)
    });
  }
}
