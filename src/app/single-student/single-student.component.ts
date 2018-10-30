import { Component, OnInit } from '@angular/core';
import {StudentService} from '../services/student.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-single-student',
  templateUrl: './single-student.component.html',
  styleUrls: ['./single-student.component.css']
})
export class SingleStudentComponent implements OnInit {

  name: string = 'Étudiant';
  status: string = 'Statut';

  constructor(private studentService: StudentService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.name = this.studentService.getStudentById(+id).name; // caster l'id qui est en string pour le passer en number
    this.status = this.studentService.getStudentById(+id).status;
  }

}
