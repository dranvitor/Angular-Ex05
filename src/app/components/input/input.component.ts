import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  public todoText: string;

  constructor(public todoService: TodoService) {
    this.todoText = '';
  }

  ngOnInit() {
  }

  public addTodo(): void {
    this.todoService.addTodo(this.todoText);
    this.todoText = '';
  }
}
