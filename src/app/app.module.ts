import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { AuthComponent } from './auth/auth.component';
import { StudentViewComponent } from './student-view/student-view.component';
import { StudentComponent } from './student/student.component';
import { StudentService} from './services/student.service';
import {RouterModule, Routes} from '@angular/router';
import {AuthService} from './services/auth.service';

const appRoutes: Routes = [
  { path: 'students', component: StudentViewComponent },
  { path: 'auth', component: AuthComponent },
  { path: '', component: StudentViewComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    AuthComponent,
    StudentViewComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes) // précise à l'appli que toutes les routes se trouvent dans cette constante appRoutes
  ],
  providers: [
    StudentService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
