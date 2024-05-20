import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  @Input() item!:string;
  @Output() callParent= new EventEmitter<string>();

  heyParent(){
    this.callParent.emit('info z metody heyParent()')
  }
}
