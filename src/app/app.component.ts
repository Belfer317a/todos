import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  myform = '';
  title = 'Todos';

  todos = ['Śniadanie', 'Obiad'];

  uRodzica(message: string) {
    console.log(message);
  }
}
