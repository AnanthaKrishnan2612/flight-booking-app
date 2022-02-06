import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

const USER_API = 'http://localhost:8080/api/';
const httpOptions = {
  headers : new HttpHeaders({'Content-Type' : 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*"
        })
    };

  constructor(private http:HttpClient) { }
   
  private registerUserURL:string = USER_API+"user/register";

  register(user : User){
    console.log("Flight-booking-app Log :Registering User "+user.username +"  "+user.email)
    return this.http.post(this.registerUserURL, user)
    
  }
  private authenticateAdminURL:string = USER_API+"admin/login";
  private authenticateUserURL:string =USER_API +"user/login";

  authentication(credentials : User){
    if(credentials.username =="admin"){
      console.log("Flight-app-log: Authenticating Admin "+credentials.password +"  "+credentials.username)
      return this.http.post(this.authenticateAdminURL, credentials)
    }else{
      console.log("Flight-app-log: Authenticating User  "+credentials.password +"  "+credentials.username)
    return this.http.post(this.authenticateUserURL, credentials)

    }
  }


}
