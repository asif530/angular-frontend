import { Component, Input, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import {Employee} from "../../models/employee.model";

@Component({
  selector: 'app-employee-details',
  templateUrl: './employeel-details.component.html',
  styleUrls: ['./employeel-details.component.css']
})
export class EmployeelDetailsComponent implements OnInit {

  @Input() viewMode = false;

  @Input() currentEmployee: Employee = {
    id: '',
    name: '',
    age: 0
  };

  message = '';

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getEmployee(this.route.snapshot.params["id"]);
    }
  }

  getEmployee(id: number): void {
    this.employeeService.get(id)
      .subscribe({
        next: (data) => {
          this.currentEmployee = data;
        },
        error: (e) => console.error(e)
      });
  }


  updateEmployee(): void {
    this.message = '';

    this.employeeService.update(this.currentEmployee.id, this.currentEmployee)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'Employee was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  deleteEmployee(): void {
    this.employeeService.delete(this.currentEmployee.id)
      .subscribe({
        next: (res:any) => {
          console.log(res);
          this.router.navigate(['/employees']);
        },
        error: (e) => console.error(e)
      });
  }

}
