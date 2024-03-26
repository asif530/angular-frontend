import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import {Employee} from "../../models/employee.model";

@Component({
  selector: 'app-tutorials-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees?: Employee[];
  currentEmployee: Employee = {};
  currentIndex = -1;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.retrieveEmployees();
  }

  retrieveEmployees(): void {
    this.employeeService.getAll()
      .subscribe({
        next: (data:any[]) => {
          this.employees = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveEmployees();
    this.currentEmployee = {};
    this.currentIndex = -1;
  }

  setActiveEmployee(employee: Employee, index: number): void {
    this.currentEmployee = employee;
    this.currentIndex = index;
  }


}
