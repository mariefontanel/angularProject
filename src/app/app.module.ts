import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { StudentViewComponent } from './student-view/student-view.component';
import { StudentComponent } from './student/student.component';
import { StudentService} from './services/student.service';
import {RouterModule, Routes} from '@angular/router';
import {AuthService} from './services/auth.service';
import { SingleStudentComponent } from './single-student/single-student.component';
import { ForOhFourComponent } from './for-oh-four/for-oh-four.component';
import {AuthGuard} from './services/auth-guard.service';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { UserListComponent } from './user-list/user-list.component';
import {UserService} from './services/user.service';
import { NewUserComponent } from './new-user/new-user.component';

const appRoutes: Routes = [
  { path: 'students', canActivate: [AuthGuard], component: StudentViewComponent },
  { path: 'students/:id', canActivate: [AuthGuard], component: SingleStudentComponent },
  { path: 'edit', canActivate: [AuthGuard], component: EditStudentComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'users', component: UserListComponent },
  { path: 'new-user', component: NewUserComponent },
  { path: '', component: StudentViewComponent },
  { path: 'not-found', component: ForOhFourComponent },
  { path: '**', redirectTo: '/not-found'}
]

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    StudentViewComponent,
    StudentComponent,
    SingleStudentComponent,
    ForOhFourComponent,
    EditStudentComponent,
    UserListComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes) // précise à l'appli que toutes les routes se trouvent dans cette constante appRoutes
  ],
  providers: [
    StudentService,
    AuthService,
    AuthGuard,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
