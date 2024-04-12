import { Component, EventEmitter, Output, } from '@angular/core';
import { Todos } from '../model/todos';
import { TodosService } from '../services/todos.service';

@Component({
  selector: 'app-todos-header',
  templateUrl: './todos-header.component.html',
  styleUrl: './todos-header.component.css'
})
export class TodosHeaderComponent {

  constructor(private todosService: TodosService) {}

  //2-way binding properties
  title: string = '';
  description: string = '';
  completed: boolean = false;

  //addTodo method
  onAddTodo() {
    this.todosService.onAddTodo({
      id: Date.now(),
      title: this.title,
      description: this.description,
      completed: this.completed
    })

    //clear the input fields
    this.title = '';
    this.description = '';
    this.completed = false;
  }


}
