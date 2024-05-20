import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from '../shared/interfaces/todo.interface';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  todos: Todo[] = [];

  @Output() changeStatus=new EventEmitter<boolean>()

  handleChangeStatus(data:boolean){
    this.changeStatus.emit(data)
  }

  addTodo(todoName: string): void {
    if (todoName.length >= 3) {
      this.todos.push({ name: todoName, isComplited: false });

      
    } else {
      console.log('dupa');
    }
    console.log(todoName);
    console.log('Aktualna lista zadań: ', this.todos);

  }
}
