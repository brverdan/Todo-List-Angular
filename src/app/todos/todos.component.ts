import { Component, OnInit } from '@angular/core';
import { Todos } from './todos.model';


import { TodosService } from './todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todos[]

  constructor(private todosService: TodosService) { }

  ngOnInit(): void {
    this.todosService.todos().subscribe(todos => this.todos = todos)
  }
}
