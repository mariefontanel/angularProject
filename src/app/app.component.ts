import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // nom balise html perso, doit être unique
  templateUrl: './app.component.html', // url du template
  styleUrls: ['./app.component.css'] // array des url des feuilles de style
})
export class AppComponent {
  // title = 'angularProject';
  isAuth = false;

  students = [
    {
      name: 'Olivier',
      status: 'disponible'
    },
    {
      name: 'Victor',
      status: 'occupé(e)'
    },
    {
      name: 'Pauline',
      status: 'occupé(e)'
    }
  ];
/*  varOne = 'Olivier';
  varTwo = 'Pauline';
  varThree = 'Victor';*/
  // à la création de ce component je change le statut isAuth en true au bout de 4 sec
  constructor() {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }
  onMixer() {
    console.log('Mixage en cours !');
  }
}
