import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Todos } from '../model/todos';

@Component({
  selector: 'app-edit-todo-modal',
  templateUrl: './edit-todo-modal.component.html',
})
export class EditTodoModalComponent {

  updatedData!:Todos;

  constructor(
    public dialogRef: MatDialogRef<EditTodoModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Todos
  ) {
    this.updatedData = {...data}
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}