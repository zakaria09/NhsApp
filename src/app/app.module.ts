import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from "./material/material.module";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FormsModule } from '@angular/forms';
import { AngularFireAuthModule } from 'angularfire2/auth';


import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { EmployeeService } from './shared/employee.service';
import { environment } from '../environments/environment';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component'
import { AppRoutingModule } from './app-routing.module';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material'
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthService } from './auth/auth.service';
import { UserService } from './auth/user.service'
import { GoldenkeyComponent } from './goldenkey/goldenkey.component';
import { ActivitiesComponent } from './activities/activities.component';
import { HttpModule } from '@angular/http';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeComponent,
    EmployeeListComponent,
    MainNavComponent,
    SigninComponent,
    SignupComponent,
    GoldenkeyComponent,
    ActivitiesComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AppRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    AngularFireAuthModule,
    HttpModule,
  ],
  exports: [
     EmployeeComponent,
     EmployeesComponent,
     EmployeeListComponent ],
  entryComponents: [EmployeeComponent, GoldenkeyComponent],
  providers: [EmployeeService, AuthService, UserService, GoldenkeyComponent, AuthGuard, DatePipe],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
