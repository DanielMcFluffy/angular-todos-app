import { Injectable } from '@angular/core';
import { Todos } from '../model/todos';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor() { }

  todos: Todos[] = [
    {
      id: 1,
      title: 'First Todo',
      description: 'This is the first todo',
      completed: true
    },
    {
      id: 2,
      title: 'Second Todo',
      description: 'This is the second todo',
      completed: false
    }
  ]

  onAddTodo(todo: Todos) {
    this.todos.push(todo);
  }

  //deleteTodo method
  onDelete(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  
  }

}
