import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-home-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './home-form.component.html',
  styleUrl: './home-form.component.scss'
})
export class HomeFormComponent {

  userForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private _alertService: AlertService) { }

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
      this._alertService.swalPopSuccess("Form Submitted Successfully!")
    } else {
      this._alertService.swalPopError("Please fill all required Fields!")
      this.userForm.markAllAsTouched();
    }
  }


  getGender(event: any) {
    const gener = event.target.value
    if (gener == 'male') {
      alert('Male')
    } else if (gener == 'female') {
      alert('Female')
    } else if (gener == 'other') {
      alert('Other')
    } else {
      alert(null)
    }
  }
}
