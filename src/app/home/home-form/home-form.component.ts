import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-home-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './home-form.component.html',
  styleUrl: './home-form.component.scss'
})
export class HomeFormComponent {

  userForm: any;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      age: ['', [Validators.required, Validators.min(20), Validators.max(50)]],
      gender: ['', Validators.required]
    });
  }

  submitForm(): void {
    if (this.userForm.valid) {
      console.log('Form data:', this.userForm.value);
    } else {
      alert('Invalid Form')
    }
  }

}
