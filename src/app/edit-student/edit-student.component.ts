import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  defaultOnDisponible = 'disponible';

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
  }
}
