import { Injectable } from '@angular/core';
import { Todo } from '../classes/todo';

@Injectable()
export class TodoService{

  todos: Todo[];
  private nextId: number;

   ngOnInit(): void {
    let todos = this.getTodos();

    if (todos.length == 0) {
      this.nextId = 5;
    } else {
      let maxId = todos[todos.length-1].id;
      this.nextId = maxId + 1; }
    }

  constructor() {
    
    this.todos = [
      new Todo(0, "Buy a new gaming laptop"),
      new Todo(1, "Complete a previous task"),
      new Todo(2, "Create a video for Youtube"),
      new Todo(3, "Create a new portfolio site")
    ];

    this.nextId = 4;
  }

  public addTodo(text: string): void {
    let todo = new Todo(this.nextId, text);
    this.todos.push(todo);
    this.nextId++;
  }

   public getTodos(): Todo [] {
  return this.todos
  }

  public removeTodo(id: number): void {
    this.todos = this.todos.filter((todo)=> todo.id != id);
  }

  public removeAllTodo():void {
    let todos = this.getTodos();
    
   this.todos = this.todos.filter((todo)=> !todo);

  this.setLocalStorageTodos(todos);
  } 

  private setLocalStorageTodos(todos: Todo[]): void {
    localStorage.setItem('todos', JSON.stringify({ todos: todos }));
}

}