import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { EmployeeComponent } from './employees/employee/employee.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';

const routes: Routes = [
    { path: 'employee', component: EmployeeComponent },
    { path: 'employeelist', component: EmployeeListComponent },
    { path: 'signin', component: SigninComponent },
    { path: 'signup', component: SignupComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule {}