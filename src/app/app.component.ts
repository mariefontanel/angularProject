import { Component, OnInit } from '@angular/core';
import { Observable, interval} from 'rxjs';

@Component({
  selector: 'app-root', // nom balise html perso, doit être unique
  templateUrl: './app.component.html', // url du template
  styleUrls: ['./app.component.css'] // array des url des feuilles de style
})
export class AppComponent implements OnInit {

  secondes: number;

  constructor() {}
  ngOnInit() {
    const counter = interval(1000);
    counter.subscribe(
      (value: number) => {
        this.secondes = value;
      },
      (error) => {
        console.log('Une erreur a été rencontrée !' + error);
      },
      () => {
        console.log('Observable complétée !');
      }
    );
  }
}
