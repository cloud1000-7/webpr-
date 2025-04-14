export class Assignment {
  _id?: string;
  id!: number;
  name: string;
  dueDate: Date;
  submitted: boolean;
description: any;

  constructor(nom: string, dateDeRendu: Date, rendu: boolean = false) {
    this.name = nom;
    this.dueDate = dateDeRendu;
    this.submitted = rendu;
  }
}
