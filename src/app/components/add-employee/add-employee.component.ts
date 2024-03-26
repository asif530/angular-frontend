import { Component } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import {Employee} from "../../models/employee.model";

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  employee: Employee = {
    id: '',
    name: '',
    age: 0
  };
  submitted = false;

  constructor(private employeeService: EmployeeService) { }

  saveEmployee(): void {
    const data = {
      id: this.employee.id,
      name: this.employee.name,
      age: this.employee.age
    };

    this.employeeService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newEmployee(): void {
    this.submitted = false;
    this.employee = {
      id: '',
      name: '',
      age: 0
    };
  }

}
