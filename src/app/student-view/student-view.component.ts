import { Component, OnInit } from '@angular/core';
import {StudentService} from '../services/student.service';

@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.css']
})
export class StudentViewComponent implements OnInit {
  // title = 'angularProject';
  isAuth = false;

  students: any[];
  // à la création de ce component je change le statut isAuth en true au bout de 4 sec
  // et le paramètre du constructeur est une instance du Service
  constructor(private studentService: StudentService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }
  ngOnInit() {
    this.students = this.studentService.students;
  }
  onBusyAll() {
    if (confirm('Etes-vous sûr de vouloir rendre "occupé(e)" ces étudiants ?')) {
      this.studentService.switchBusyAll();
    } else {
      return null;
    }
  }
  onFreeAll() {
    if (confirm('Etes-vous sûr de vouloir rendre "disponibles" ces étudiants ?')) {
      this.studentService.switchFreeAll();
    } else {
      return null;
    }
  }
}
