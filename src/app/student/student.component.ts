import {Component, Input, OnInit} from '@angular/core';
import {StudentService} from '../services/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  // utilisation des données de l'input et on spécifie le type de données
  @Input() name: string;
  @Input() status: string;
  @Input() index: number;
  @Input() id: number;

  constructor(private studentService: StudentService) { }

  ngOnInit() {
  }

  getColor() {
    if (this.status === 'disponible') {
      return '#278b31';
    } else if (this.status === 'occupé(e)') {
      return 'red';
    }
  }
  onSwitch() {
    if (this.status === 'occupé(e)') {
      this.studentService.switchFreeOne(this.index);
    } else if (this.status === 'disponible') {
      this.studentService.switchBusyOne(this.index);
    }
  }
}
