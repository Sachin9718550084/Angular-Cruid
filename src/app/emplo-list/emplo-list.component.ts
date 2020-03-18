
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EmpServiceService } from '../Employess/emp-service.service';
import { Employee  } from '../Employees/employees';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-emplo-list',
  templateUrl: './emplo-list.component.html',
  styleUrls: ['./emplo-list.component.css']
})

export class EmploListComponent implements OnInit {
  p: number = 1;
  employees: Observable<Employee[]>;

  constructor( private Empserv: EmpServiceService, private http: HttpClient, private router: Router) { }



  ngOnInit(): void {
    this.reloadData();

  }

  reloadData() {
    return this.employees = this.Empserv.getEmployeesList();
  }


  deleteEmployee(id: number) {
    this.Empserv.deleteEmployee(id).subscribe( data => {
      console.log(data);
      this.reloadData();
    });
  }

  // employeeDetails(id: number){
  //   this.router.navigate(['details', id]);
  // }

  updateEmployee(id: number) {
    this.router.navigate(['/lazy/update' , id]);
  }

  addItem(id: number) {
    this.router.navigate(['/lazy/addCart' , id]);
  }


}
