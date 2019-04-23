import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
  AbstractControl,
  FormGroupDirective,
  FormsModule,
  ReactiveFormsModule,
  NgForm
} from "@angular/forms";


@Component({
  selector: 'app-my-app-login',
  templateUrl: './my-app-login.component.html',
  styleUrls: ['./my-app-login.component.css']
})
export class MyAppLoginComponent implements OnInit {

  loginPage: FormGroup;

  //-- Create List of Fields
  loginID: AbstractControl;
  password: AbstractControl;


  constructor(
    fb: FormBuilder,
  ) { 

    this.loginPage = fb.group({
      loginID: [null , Validators.required],
      password: [null, Validators.required],
    });


  // Controls are used in me-create-area.component.html for accessing values and checking functionalities
  this.loginID = this.loginPage.controls["loginID"];
  this.password = this.loginPage.controls["password"];

  }


  ngOnInit() {

    

  }

  
  // -- onSubmit -------------------------- ~start ---------------
  onSubmit(value: string): boolean {
    console.log(value);


   return true;
  }

}
