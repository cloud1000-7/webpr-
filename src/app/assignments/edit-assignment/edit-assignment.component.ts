import { Component, OnInit } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { Assignment } from '../assignment.model';
import { AssignmentsService } from '../../shared/assignments.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-edit-assignment',
  standalone: true,
 providers: [provideNativeDateAdapter()],
  imports: [FormsModule,MatButtonModule, MatInputModule, MatFormFieldModule,MatDatepickerModule],
  templateUrl: './edit-assignment.component.html',
  styleUrl: './edit-assignment.component.css'
})


export class EditAssignmentComponent implements OnInit {

  assignment: Assignment | undefined;
  // Pour les champs de formulaire
  assignmentName = '';
  dueDate?: Date = undefined;

  // Constructeur
  constructor(
    private assignmentsService: AssignmentsService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
      this.getAssignment();
  }

  //function to get an assignment
  getAssignment() {
    const id = this.route.snapshot.params['id']; 

    this.assignmentsService.getAssignment(id) 
      .subscribe(assignment => this.assignment = assignment);

  }

  onSaveAssignment() {
    if (!this.assignment) return;
    if (this.assignmentName == '' || this.dueDate === undefined) return;

    const updatedAssignment = new Assignment(this.assignmentName, this.dueDate!);

    // On récupère les valeurs qui ne peuvent pas etre changé par le formulaire
    updatedAssignment.id = this.assignment.id;
    updatedAssignment.submitted = this.assignment.submitted;

    // On récupère les valeurs dans le formulaire
    updatedAssignment.name = this.assignmentName;
    updatedAssignment.dueDate = this.dueDate;

    // Utilisation du service pour la mise a jour de l'assignement
    this.assignmentsService
      .updateAssignment(updatedAssignment)
      .subscribe((message) => {
        console.log(message);

        // navigation vers la home page
        this.router.navigate(['/assignments']);
      });
  }

}
