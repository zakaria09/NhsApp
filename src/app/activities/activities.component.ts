import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { Response } from '@angular/http';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {

  constructor(private service: EmployeeService) { }

  ListData: MatTableDataSource<any>;
  displayedColumns: string[] = ['status', 'managerName', 'goldenkey', 'reason'];

  ngOnInit() {
    this.service.getGoldenkeys().subscribe(
      list => {
        let array = list.map(item => {
          return {
            $key: item,
            ...item.payload.val()
          };
        });
        this.ListData = new MatTableDataSource(array);
      });
  }


}
