import {Injectable} from '@angular/core';

import {HttpClient} from '@angular/common/http';

import { Observable } from 'rxjs';

import {Todos} from './todos.model';

import {TODO_API} from '../app.api';

@Injectable()
export class TodosService {
    constructor(private http: HttpClient){}

    todos(): Observable<Todos[]> {
        return this.http.get<Todos[]>(`${TODO_API}/todos`)
    }
}