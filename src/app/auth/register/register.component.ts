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
formChild: any;
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
    // this.loading = true;
    // this.cancelSpinner();
    console.log(this.form.value);
  }
 
  onFileSelected(event: any){
    const file: File =  event.target.files[0]
    const reader = new FileReader();
    
    reader.readAsDataURL(file);
    
    reader.onload = (e: any) =>{
      // const base64String: string = e.target.result;
      this.srcResult = e.target.result;

      this.form.get('profilePhoto').setValue(this.srcResult)
    }


  }

}
  // cancelSpinner(){
  //   setTimeout(() => {
  //     this.loading = false;
  //   },1500);
  // }


 