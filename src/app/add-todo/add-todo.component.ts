import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  addForm: FormGroup

  ngOnInit(): void {
    this.addForm = new FormGroup ({
      titulo: new FormControl ('', {
        validators: [Validators.required, Validators.maxLength(50)],
      }),
      descricao: new FormControl ('', {
        validators: [Validators.required]
      })
    });
  }

}
