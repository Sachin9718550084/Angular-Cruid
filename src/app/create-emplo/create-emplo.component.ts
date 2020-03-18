import { Component, OnInit } from '@angular/core';
import { EmpServiceService } from '../Employess/emp-service.service';
import { Employee  } from '../Employees/employees';
import { FormBuilder, FormGroup, FormControlName,  Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-emplo',
  templateUrl: './create-emplo.component.html',
  styleUrls: ['./create-emplo.component.css']
})



export class CreateEmploComponent implements OnInit {

employee: Employee = new Employee();
submitted = false;
Employeesform: FormGroup;


constructor( private Empserv: EmpServiceService, private router: Router, private forBuilder: FormBuilder) { }

  ngOnInit(): void {

   this.Employeesform = this.forBuilder.group({
    firstName:  ['', Validators.required],
    lastName: ['', Validators.required],
    emailId: ['', [Validators.required, Validators.email]],
    avatar:  []
  });

  }

  uploadfile( event ) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {

      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.Employeesform.patchValue({
          "avatar" : reader.result
        });

    }

 }
  }


  save() {
    console.log(this.Employeesform.value);
    this.Empserv.createEmployee(this.Employeesform.value ).subscribe(data => console.log(data), error => console.log(error));
    this.employee = new Employee();
    this.gotoList();

  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/lazy']);
  }



}
