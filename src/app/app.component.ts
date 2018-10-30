import {Component, OnInit} from '@angular/core';
import {StudentService} from './services/student.service';

@Component({
  selector: 'app-root', // nom balise html perso, doit être unique
  templateUrl: './app.component.html', // url du template
  styleUrls: ['./app.component.css'] // array des url des feuilles de style
})
export class AppComponent implements OnInit {
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
    if(confirm('Etes-vous sûr de vouloir rendre Occupé(e) ces étudiants ?')) {
      this.studentService.switchBusyAll();
    } else {
      return null;
    }
  }
  onFreeAll() {
    this.studentService.switchFreeAll();
  }
}
