import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/cuntry.service';
import { AlertService } from '../../services/alert.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-step-one',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  providers: [CountryService],
  templateUrl: './step-one.component.html',
  styleUrl: './step-one.component.scss',
})
export class StepOneComponent implements OnInit {
  bookingForm: FormGroup
  countries: Array<any> = []
  constructor(private _service: CountryService, private _alertService: AlertService, private _fb: FormBuilder) {
    this.bookingForm = this._fb.group({
      countryName: [null, Validators.required],
      date: [null, Validators.required],
    })
  }
  ngOnInit(): void {

  }
  loadCountries() {
    this._service.getCountries().then((res) => {
      this.countries = res;
    });
  }

  booked() {
    if (!this.bookingForm.invalid) {
      console.log(this.bookingForm.value)
      this._alertService.swalPopSuccess("Booked SuccesFully!!")
    } else {
      this._alertService.swalPopError("Please fill all required fields!!")
    }

  }

}
