import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-goldenkey',
  templateUrl: './goldenkey.component.html',
  styleUrls: ['./goldenkey.component.css']
})
export class GoldenkeyComponent implements OnInit {

  isAccepted = false;

  constructor(private service: EmployeeService) { }

  status = [
    { value: 'Accept', display: 'Accept' },
    { value: 'Reject', display: 'Reject' },
  ]

  ngOnInit() {
  }

/*   accepted() {
    this.isAccepted = true;
    console.log(this.isAccepted)
  } */


  addgoldenkey(form: NgForm) {
    var val = form.value.goldenkey;
    this.service.insertGoldenkey(form.value.goldenkey, form.value.managerName, form.value.status, form.value.reason);
    if (val != '') {
      this.isAccepted = true;
    }
    form.reset();
    
  }
}
