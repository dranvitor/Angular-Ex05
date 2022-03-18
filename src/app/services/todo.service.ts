import { Injectable } from '@angular/core';
import { Todo } from '../classes/todo';

@Injectable()
export class TodoService{

  todos: Todo[] = [];
  nextId: number;

  ngOnInit(): void {
    this.getTodos()
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

  addTodo(text: string): void {
    let todo = new Todo(this.nextId, text);
    this.todos.push(todo);
    this.nextId++;
    let stg = JSON.stringify(this.todos)
    localStorage.setItem('Default:', stg)
    this.getTodos();

  }

  getTodos(): Todo [] {
    let storage = localStorage.getItem('Default:')
    let str = JSON.parse(storage || '[]')
    this.todos  = str  
  return this.todos
  }

  removeTodo(id: number): void {
    this.todos = this.todos.filter((todo)=> todo.id != id);
    let stg = JSON.stringify(this.todos)
    localStorage.setItem('Default:', stg)
    this.getTodos();

  }

  removeAllTodo():void {
    let todos = this.getTodos();
   this.todos = this.todos.filter((todo)=>
    !todo);
    let stg = JSON.stringify(this.todos)
    localStorage.setItem('Default:', stg)

  this.getTodos();
  } 

}