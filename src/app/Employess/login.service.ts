import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';




@Injectable()

export class LoginService {

  BaseUrl = 'http://localhost:3000/Users';
  error = '';

    constructor( private http: HttpClient, private router: Router) { }

    logincheck( Username: string , Password: string  ) {
      // this.BaseUrl = this.BaseUrl+'?Username='+Username+'&&?Password='+Password;
      // this.http.get(this.BaseUrl).subscribe( data => {
      //   console.log( data );
      //   alert(data.Users);
      //   console.warn(this.BaseUrl);
      //   if ( data.Username && data.Password) {
      //     localStorage.setItem ('users', JSON.stringify(data)) ;
      //     this.router.navigate(['/lazy']);
      //   } else {
      //       this.error = ' Please Enter Valid Email and Password';
      //   }
      // });

      return this.http.post<any>(`${this.BaseUrl}`, { Username , Password});
    }

    // getAll(): Observable<any>  {
    //     return this.http.get(`${this.BaseUrl}`);
    // }

    // getById(id: number): Observable<any> {
    //     return this.http.get(`${this.BaseUrl}` + id);
    // }

    // create(user: User): Observable<object> {
    //     return this.http.post('${this.BaseUrl}', user);
    // }

    // update(user: User): Observable<object> {
    //     return this.http.put('${this.BaseUrl}' + user.id, user);
    // }

    // delete(id: number): Observable<any> {
    //     return this.http.delete('${this.BaseUrl}' + id);
    // }




}
