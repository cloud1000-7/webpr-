import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {
  log(assignmentName,action){
    console.log("Assignment " + assignmentName +""+ action);}
  constructor() { }
}
