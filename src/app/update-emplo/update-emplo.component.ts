
import { Component, OnInit } from '@angular/core';
import { EmpServiceService } from '../Employess/emp-service.service';
import { Employee  } from '../Employees/employees';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-update-emplo',
  templateUrl: './update-emplo.component.html',
  styleUrls: ['./update-emplo.component.css']
})
export class UpdateEmploComponent implements OnInit {

  id: number;
  employee: Employee;
  submitted = false;

  constructor(private EmpSer: EmpServiceService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.employee = new Employee();
    this.id = this.route.snapshot.params['id'];
    this.EmpSer.getEmp(this.id).subscribe( data => {
        console.log(data);
        this.employee = data;
    });

  }

  updateEmployee() {
    this.EmpSer.updateEmployee(this.id, this.employee)
      .subscribe(data => console.log(data), error => console.log(error));
    this.employee = new Employee();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.updateEmployee();
  }

  gotoList() {
    this.router.navigate(['/lazy']);
  }

}
