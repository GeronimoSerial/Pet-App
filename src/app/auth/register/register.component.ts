import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent {
  form: FormGroup;
  loading = false;
  srcResult: any;
  hide = true;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      birthDay: ['', Validators.required],
      profilePhoto: [''],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  
}

  registerUser(){
    this.loading = true;
    this.cancelSpinner();
    console.log(this.form.value);
  }

  cancelSpinner(){
    setTimeout(() => {
      this.loading = false;
    },1500)
  }
}


