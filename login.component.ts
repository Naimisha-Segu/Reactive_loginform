import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, FormArray } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  loginform = this.fb.group({
    firstName: ['',Validators.required, Validators.minLength(10)],
    lastName: [''],
    address: this.fb.group({
      street: ['',Validators.required],
      city: ['',Validators.required],
      state: ['',Validators.required],
      pin: ['']
    }),
    addField: this.fb.array([
      this.fb.control('')
    ])
  });

  constructor(private fb: FormBuilder) { }
  onSubmit(){

  }
  updateProfile(){

  }
  get addField() {
    return this.loginform.get('aliases') as FormArray;
  }
  addAlias() {
    this.addField.push(this.fb.control(''));
  }

}
