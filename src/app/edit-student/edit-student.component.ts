import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {StudentService} from '../services/student.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  defaultOnDisponible = 'disponible';

  constructor(private studentService: StudentService, private router: Router) {
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const name = form.value['name'];
    const status = form.value['status'];
    this.studentService.addStudent(name, status);
    this.router.navigate(['/students']);
  }
}
