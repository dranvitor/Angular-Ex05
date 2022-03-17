import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../../classes/todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input()
  todo!: Todo;


  constructor(public todoService: TodoService) { }

  ngOnInit() {
  }

  public removeTodo(): void {
    this.todoService.removeTodo(this.todo.id);
  }

}