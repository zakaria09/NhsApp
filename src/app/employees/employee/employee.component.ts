import { Component, OnInit } from '@angular/core';

import { EmployeeService } from '../../shared/employee.service';
import { NotificationService } from '../../shared/notification.service'

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(public service: EmployeeService,
    private notificationService: NotificationService) { }
  
  myDate = new Date();

  ward = [
    { id: 1, value: 'Ward 15' },
    { id: 2, value: 'Ward 25' },
    { id: 3, value: 'Ward 20' }];

  

  ngOnInit() {
    this.service.getEmployees(); 
  }

  onClear() {
    this.service.form.reset();
    this.service.initializeFormGroup();
    
  }

  onSubmit() {
    if (this.service.form.valid) {
      this.service.insertEmployee(this.service.form.value);
      this.service.form.reset();
      this.service.initializeFormGroup();
      this.notificationService.success('::Submited Successfully!')
    }
  }



}
