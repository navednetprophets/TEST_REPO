import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CryptoService } from '../services/crypto.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {


  data: string = '';
  encryptedData: string = '';
  decryptedData: string = '';





  isImageOneVisible: boolean = true
  constructor(private _fb: FormBuilder, private cryptoService: CryptoService) { }
  form: FormGroup = this._fb.group({
    name: [null, [Validators.required]],
    email: [null, [Validators.required]],
    password: [null, [Validators.required]],
  });
  ngOnInit(): void { }

  submitForm() {
    console.log(this.form.value);
  }



  encryptData() {
    this.encryptedData = this.cryptoService.encrypt(this.data);
  }

  decryptData() {
    this.decryptedData = this.cryptoService.decrypt(this.encryptedData);
  }
}

