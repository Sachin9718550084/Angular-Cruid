import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControlName,  Validators} from '@angular/forms';
import { LoginService } from './../Employess/login.service';
import { Users } from '../Employees/users';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   loginForm: FormGroup;
   submited =  false;
   user: Users[] = [];
   loading = false;
   error = '';

   constructor(  private formBuilder: FormBuilder,  private loginService: LoginService) { }

  ngOnInit(): void {
  this.loginForm = this.formBuilder.group({
    Username: ['', [Validators.required, Validators.email]],
    Password: ['', Validators.required]
  });

  // this.loginService.getAll().subscribe( data => {
  //   console.log(data);
  // });


  }




  get f() { return this.loginForm.controls; }




  onSubmit() {
    this.submited = true;


    if (this.loginForm.invalid) {
      return;
    }

    if (this.loginForm.valid) {

      // const Logindata = {
      //   Username: this.loginForm.controls.Username.value,
      //   Password: this.loginForm.controls.Password.value
      // };


      this.loginService.logincheck( this.f.Username.value,  this.f.Password.value  ).subscribe( data => {

     return   console.log(data);

        },
        error => {
          console.log(error);
          this.loading = false;
      });


    }



    // alert(JSON.stringify(this.loginForm.value));

  }

}
