import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Capability } from 'protractor';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import { Response } from '@angular/http';
import { Goldenkey } from 'src/goldenkeys';
 
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private goldenkeyPath = 'goldenkey';

  constructor(private firebase : AngularFireDatabase,
               private db: AngularFireDatabase,
               public http: Http) { }

  employeeList: AngularFireList<any>;

  goldenKey: AngularFireList<any>;

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    mobile: new FormControl('', [Validators.required, Validators.minLength(8)]),
    reasonForUnfilledShift: new FormControl(''),
    ward: new FormControl(0),
    optionsConsidered: new FormControl(''),
    goldenkey: new FormControl(''),
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
      goldenkey: '',
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
      goldenkey: employee.goldenkey,
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

  insertGoldenkey(data) {
    const key = this.db.database.ref(this.goldenkeyPath);
    key.push({'goldenkey' :data});
    console.log('success');
  }

  getGoldenkeys() {
    this.goldenKey = this.firebase.list('goldenkey');
    return this.goldenKey.snapshotChanges();
  }

  initializeKeyForm() {
    this.form.setValue({
      $key: null,
      goldenkey: '',
    })
  }

/*   getGoldenKeys() {
    return this.http.get('https://nhscrud.firebaseio.com/emplyees.json')
      .map(
        (respone: Response) => {
          const data = respone.json();
          return data
        }
      )
  } */
}
