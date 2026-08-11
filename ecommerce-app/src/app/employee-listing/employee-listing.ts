import { Component, ChangeDetectionStrategy, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

interface Employee {
  id: number;
  name: string;
  position: string;
  department: string;
}

@Component({
  selector: 'app-employee-listing',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './employee-listing.html',
  styleUrls: ['./employee-listing.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeListing {
  private readonly fb = inject(FormBuilder);

  readonly employees = signal<Employee[]>([
    { id: 1, name: 'Alice Johnson', position: 'Sales Manager', department: 'Sales' },
    { id: 2, name: 'David Lee', position: 'Product Designer', department: 'Design' },
    { id: 3, name: 'Maria Sanchez', position: 'Support Specialist', department: 'Support' },
  ]);

  readonly selectedEmployee = signal<Employee | null>(null);

  readonly employeeForm = this.fb.group({
    name: [''],
    position: [''],
    department: [''],
  });

  readonly trackByEmployee = (index: number, employee: Employee) => employee.id;

  addOrUpdateEmployee(): void {
    const rawValue = this.employeeForm.value;
    if (!rawValue.name || !rawValue.position || !rawValue.department) {
      return;
    }

    const formValue = {
      name: rawValue.name,
      position: rawValue.position,
      department: rawValue.department,
    };

    const existing = this.selectedEmployee();
    if (existing) {
      this.employees.update((current) =>
        current.map((employee) =>
          employee.id === existing.id ? { ...employee, ...formValue } : employee,
        ),
      );
      this.selectedEmployee.set(null);
    } else {
      const nextId = Math.max(0, ...this.employees().map((employee) => employee.id)) + 1;
      this.employees.update((current) => [...current, { id: nextId, ...formValue }]);
    }

    this.resetForm();
  }

  editEmployee(employee: Employee): void {
    this.selectedEmployee.set(employee);
    this.employeeForm.setValue({
      name: employee.name,
      position: employee.position,
      department: employee.department,
    });
  }

  deleteEmployee(employee: Employee): void {
    this.employees.update((current) => current.filter((item) => item.id !== employee.id));
    if (this.selectedEmployee()?.id === employee.id) {
      this.selectedEmployee.set(null);
      this.resetForm();
    }
  }

  resetForm(): void {
    this.selectedEmployee.set(null);
    this.employeeForm.reset();
  }
}
