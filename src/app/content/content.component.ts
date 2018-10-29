import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  // varTest = 'ma variable';
  // utilisation des données de l'input et on spécifie le type de données
  @Input() name: string;
  @Input() status: string;
  // status = 'Occupé(e)';

  constructor() { }

  ngOnInit() {
  }

  getStatus() {
    return this.status;
  }

}
