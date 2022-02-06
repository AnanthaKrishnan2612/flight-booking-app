import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { FlightDTO } from '../models/flightdto';
@Injectable({
  providedIn: 'root'
})
export class FlightService {

   httpOptions = {
    headers: new HttpHeaders({      
      'Authorization': 'Bearer ' + sessionStorage.getItem('token') 
    })
  };
  constructor(private httpClient:HttpClient) { }

  

  
  // authenticateAdmin(credentials : User){
  //   console.log("Flight-app-log: Authenticating Admin "+credentials.password +"  "+credentials.username)
  //   return this.httpClient.post(this.authenticateAdminURL, credentials)
    
//     .pipe(map(loginResponse ->{
//       const response = JSON.parse(JSON.stringify(loginResponse))
//       let token = 'Bearer '+Response.token;

// sessionStorage.setItem('token', token) 
// return loginResponse;   }));
  // }


  private flightServiceURL: string = "http://localhost:9090/api/v1.0/airlines/";

  addnewFlight(flight : FlightDTO){
    
      
      return this.httpClient.post(this.flightServiceURL+"register", flight, this.httpOptions)
  }
  
  searchFlights(flightDetails: FlightDTO){
    // return this.httpClient.post(this.flightServiceURL+"search", flightDetails,this.httpOptions);
    return this.httpClient.get("http://localhost:8000/flightDTO");
    
  }

  getAllFlights(){
    return this.httpClient.get(this.flightServiceURL+"allflights",this.httpOptions);
    // return this.httpClient.get("http://localhost:8000/flightDTO");
    
  }

  updateFlight(flightData:FlightDTO)
  {
    return this.httpClient.put<any>(this.flightServiceURL+"updateflight", flightData,this.httpOptions); 
  }

  blockFlight(airline : any)
  {
    return this.httpClient.put(this.flightServiceURL+"blockflight/"+airline,this.httpOptions); 
  }
  unblockFlight(airline : any)
  {
    return this.httpClient.put(this.flightServiceURL+"unblockflight/"+airline,this.httpOptions); 
  }

}
