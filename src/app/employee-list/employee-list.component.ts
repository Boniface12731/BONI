import {Component, Injectable, OnInit} from '@angular/core';
import { EmployeeService } from '../employee.service';
//Added//
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//Added//

@Injectable({
  providedIn: 'root'
})

@Component({
  standalone: true,
  imports: [],
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {
  employees: any[] = [];
  constructor(private employeeService: EmployeeService) { }
  private apiUrl = 'http://localhost:3000/employees'; // Update with your backend API endpoint

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe(data => {
      this.employees = data;
    });
  }
}
