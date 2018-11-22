import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { EmployeeComponent } from './employees/employee/employee.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { GoldenkeyComponent } from './goldenkey/goldenkey.component';
import { ActivitiesComponent } from './activities/activities.component';

const routes: Routes = [
    { path: 'breakglass', component: EmployeeComponent },
    { path: 'notifications', component: EmployeeListComponent },
    { path: 'signin', component: SigninComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'activities', component: ActivitiesComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule {}