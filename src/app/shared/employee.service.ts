import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Capability } from 'protractor';
 
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private firebase : AngularFireDatabase) { }

  employeeList: AngularFireList<any>;

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    mobile: new FormControl('', [Validators.required, Validators.minLength(8)]),
    reasonForUnfilledShift: new FormControl(''),
    ward: new FormControl(0),
    optionsConsidered: new FormControl(''),
    //date: new FormControl(''),
    isPermanent: new FormControl(false)
  });

  initializeFormGroup() {
    this.form.setValue({
      $key: null,
      fullName: '',
      email: '',
      mobile: '',
      reasonForUnfilledShift: '',
      ward: 0,
      //date: '',
      optionsConsidered: '',
      isPermanent: false
    });
  }

  getEmployees() {
    this.employeeList = this.firebase.list('emplyees');
    return this.employeeList.snapshotChanges();
  }

  insertEmployee(employee) {
    this.employeeList.push({
      fullName: employee.fullName,
      email: employee.email,
      mobile: employee.mobile,
      reasonForUnfilledShift: employee.reasonForUnfilledShift,
      ward: employee.ward,
      //date: employee.date,
      optionsConsidered: employee.optionsConsidered,
      isPermanent: employee.isPermanent, 
    }); 
  }

  deleteEmployee($key: string) {
    this.employeeList.remove($key);
  }

  populateForm(employee) {
    this.form.setValue(employee);
  }
}
