import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  todoText: string;

  constructor(public todoService: TodoService) {
    this.todoText = '';
  }

  ngOnInit() {
  }

   addTodo(): void {
    this.todoService.addTodo(this.todoText);
    this.todoText = '';
  }
}
