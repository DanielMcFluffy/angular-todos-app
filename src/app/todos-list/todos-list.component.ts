import { Component, OnInit} from '@angular/core';
import { Todos } from '../model/todos';
import { TodosService } from '../services/todos.service';
import { MatDialog } from '@angular/material/dialog';
import { EditTodoModalComponent } from '../edit-todo-modal/edit-todo-modal.component';
@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.css'
})
export class TodosListComponent implements OnInit {
  constructor(private todosService: TodosService, public dialog: MatDialog) {}
  
  ngOnInit(): void {
    this.todos = this.todosService.todos;
  }

  todos: Todos[] = []
  isDialogOpen = false; 

  //deleteTodo method
  onDelete(id: number) {
    this.todosService.onDelete(id);
    this.todos = this.todosService.todos;
  }

  openDialog(todo: Todos): void {
    //make sure 1 modal opens at 1 time
    if (this.isDialogOpen) {
      return;
    }

    const dialogRef = this.dialog.open(EditTodoModalComponent, {
      width: '250px',
      data: todo,
    });

    this.isDialogOpen = true;

    dialogRef.afterClosed().subscribe(result => {
      this.isDialogOpen = false;
      if (result) {
        // this.todosService.update(result);
        this.todos = this.todosService.todos;
      }
    });
  }
}

