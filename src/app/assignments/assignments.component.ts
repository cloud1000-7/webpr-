import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssignmentsService } from '../shared/assignments.service';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { Assignment } from './assignment.model';
import { RouterModule } from '@angular/router';
import { SubmittedDirective } from '../shared/Submitted.directive';
import { NotSubmittedDirective } from '../shared/not-submitted.directive';

@Component({
  selector: 'app-assignments',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatListModule,
    MatDividerModule,
    SubmittedDirective,
    NotSubmittedDirective,
    RouterModule,
  ],
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {
  assignments: Assignment[] = [];

  constructor(private assignmentsService: AssignmentsService) {}

  ngOnInit(): void {
    this.getAssignments();
  }

  getAssignments() {
    this.assignmentsService.getAssignments().subscribe((assignments) => {
      console.log('👉 Загруженные задания:', assignments); 
      this.assignments = assignments;
    });
  }

  deleteAssignment(assignment: Assignment) {
    this.assignmentsService.deleteAssignment(assignment).subscribe(() => {
      this.getAssignments();
    });
  }
  
  trackById(index: number, item: Assignment) {
    return item._id;
  }
  
  markAsSubmitted(assignment: Assignment) {
    assignment.submitted = true;
    this.assignmentsService.updateAssignment(assignment).subscribe(() => {
      this.getAssignments();
    });
  }
}
