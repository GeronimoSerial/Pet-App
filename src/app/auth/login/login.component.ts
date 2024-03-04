import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  form: FormGroup;
  loading = false;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      email: [, Validators.required],
      password: [, Validators.required],
    });
  }

  loginUser() {
    this.loading = true;
    this.cancelSpinner();
    console.log(this.form);
    console.log(this.form.value);

  }

  cancelSpinner(){
    setTimeout(() => {
      this.loading = false;
    },1500)
  }
}
