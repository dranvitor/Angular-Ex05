import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../../classes/todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input()
  todo!: Todo;

  constructor(public todoService: TodoService) { }

  ngOnInit() {
  }

  removeAllTodo(): void {
    this.todoService.removeAllTodo();
  }

 
}