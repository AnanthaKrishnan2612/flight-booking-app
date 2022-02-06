import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { FlightService } from 'src/app/services/flight.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;

  user:User ={username: '', password: '',email:''};

  constructor(private userService: UserService, private router: Router) {
    this.loginForm = new FormGroup({
      "userName": new FormControl("", [Validators.required,Validators.maxLength(20),
        Validators.minLength(4)]),
      "password": new FormControl("", [Validators.required])
    });
   
  }

  ngOnInit(): void {
  }


  onSubmit(){
   
    this.user.username = this.loginForm.value.userName;
    this.user.password =this.loginForm.value.password;
    console.log("User Log : credentials "+this.user.username+" "+this.user.password)
    //verify the http call response handling and routing
    return this.userService.authentication(this.user).subscribe((res:any) =>{   
      this.user = res;
      sessionStorage.setItem('token',res.token )
      sessionStorage.setItem('username',this.loginForm.value.username);
      // sessionStorage.setItem('email',this.loginForm.value.email);
      console.log(sessionStorage.getItem('token'))
      let route = '/admin/modifyflight';
    this.router.navigate([route]);
  })
}

}
