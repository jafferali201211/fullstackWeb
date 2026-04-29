import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-array-table-poc1',
  imports: [CommonModule],
  templateUrl: './array-table-poc1.html',
  styleUrl: './array-table-poc1.css',
})
export class ArrayTablePoc1 {


  // ✅ Step 1: Input data
  employees = [
    { name: 'Amit', dept: 'IT', salary: 50000 },
    { name: 'Sara', dept: 'HR', salary: 40000 },
    { name: 'John', dept: 'IT', salary: 60000 },
    { name: 'Maya', dept: 'Finance', salary: 70000 }
  ];

  // ✅ Step 2: Output object
  groupedEmployees: Record<string, any[]> | null = null;

  // ✅ Step 3: Store department names
  departmentKeys: string[] = [];

  // ✅ Step 4: Button click logic
  createSeparateArrays(): void {
    this.groupedEmployees = this.employees.reduce((acc, emp) => {
      
      // create array if department not exists
      if (!acc[emp.dept]) {
        acc[emp.dept] = [];
      }

      // push employee into department
      acc[emp.dept].push(emp);

      return acc;
    }, {} as Record<string, any[]>);

    // ✅ Prepare keys for HTML (IMPORTANT)
    this.departmentKeys = Object.keys(this.groupedEmployees);
    console.log(this.groupedEmployees);
  }



}
