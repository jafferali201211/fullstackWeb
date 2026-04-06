import { Component, inject, OnInit, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TableApiService, User } from './table-api-service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormControl, Validators, AbstractControl, NonNullableFormBuilder } from '@angular/forms';

type SortKey = 'name' | 'username' | 'email';
type SortDir = 'asc' | 'desc';

@Component({
  selector: 'app-table-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './table-form.html',
  styleUrl: './table-form.css',
})

export class TableForm implements OnInit {
  private tableApiService = inject(TableApiService);
  private fb = inject(FormBuilder)

  users = signal<User[]>([])
  selectedUser = signal<User | null>(null)
  loading = signal(false)
  error = signal<string | null>(null)

  //Sorting state (key + direction)
  sortKey = signal<SortKey>('name');
  sortDir = signal<SortDir>('asc');

  sortBy(key:SortKey){
    if(this.sortKey() === key){
      // toggle asc/desc when same column clicked
      this.sortDir.set(this.sortDir() === 'asc'?'desc':'asc')
    } else {
      // switch to a new column, default to ascending
      this.sortKey.set(key);
      this.sortDir.set('asc');
    }
  }
    constructor() {
  }

  ngOnInit() {
    this.fetchUser();
  }

  fetchUser() {
    this.loading.set(true);
    this.error.set(null);

    this.tableApiService.getUsers().subscribe({
      next: (res) => {
        this.users.set(res);
        this.loading.set(false);
      },
      error: (err) => {
        console.error(err);
        this.error.set('failed to load users. Please try again.');
        this.loading.set(false);
      }
    })
  }
  // optional: formatters to keep template clean
  fullAddress(u: User): string {
    const a = u.address;
    return `${a.street}, ${a.suite}, ${a.city},${a.zipcode}`
  }
  onSelectedUser(getValue: any) {
    this.selectedUser.set(getValue);
    this.updateForm.patchValue({
      name: getValue.name,
      username: getValue.username,
      email: getValue.email,
      phone: getValue.phone,
      website: getValue.website
    })
    console.log(getValue)
    return "hello"
  }
  updateForm = this.fb.group({
    name: ['', Validators.required],
    username: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', Validators.required],
    website: ['',
      [
        Validators.required,
        // Allow domains with or without protocol
        Validators.pattern(
          /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/\S*)?$/
        ),
      ],
    ]
  });

  // Shortcuts for template
  get name(): AbstractControl { return this.updateForm.get('name')!; }
  get username(): AbstractControl { return this.updateForm.get('username')!; }
  get email(): AbstractControl { return this.updateForm.get('email')!; }
  get phone(): AbstractControl { return this.updateForm.get('phone')!; }
  get website(): AbstractControl { return this.updateForm.get('website')!; }

  trackByUser = (_: number, u: User) => u.id;

}
