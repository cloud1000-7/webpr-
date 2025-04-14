import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Assignment } from '../assignments/assignment.model';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {

  private apiUrl = 'http://localhost:3000/api/assignments';

  constructor(private http: HttpClient) { }

  getAssignments(): Observable<Assignment[]> {
    return this.http.get<Assignment[]>(this.apiUrl);
  }

  getAssignment(id: string): Observable<Assignment> {
    return this.http.get<Assignment>(`${this.apiUrl}/${id}`);
  }

  addAssignment(assignment: Assignment): Observable<Assignment> {
    return this.http.post<Assignment>(this.apiUrl, assignment);
  }

  updateAssignment(assignment: Assignment): Observable<any> {
    return this.http.put(`${this.apiUrl}/${assignment._id}`, assignment);
  }

  deleteAssignment(assignment: Assignment): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${assignment._id}`);
  }
}
