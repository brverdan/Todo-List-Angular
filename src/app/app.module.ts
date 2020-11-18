import { BrowserModule } from '@angular/platform-browser';
import {  NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ROUTES } from './app.routes';

import { TodosService } from './todos/todos.service';

import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AddTodoComponent } from './add-todo/add-todo.component';



@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    HeaderComponent,
    HomeComponent,
    AddTodoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [TodosService, FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
