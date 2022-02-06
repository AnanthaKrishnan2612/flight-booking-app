import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BookingDTO } from '../models/bookingdto';
import { FlightDTO } from '../models/flightdto';
import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y/input-modality/input-modality-detector';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*"
        })
    };

  constructor(private httpClient:HttpClient) { }
// verify methods
  private host:string = "http://localhost:9090/api/v1.0/bookingservice/";
  email:any
  
  

  bookTicket(ticketDetails:BookingDTO){
    return this.httpClient.post(this.host+"bookings/book", ticketDetails,this.httpOptions);
  }

  getBookingHistory(){
    this.email = sessionStorage.getItem('email');
    return this.httpClient.get(this.host+"bookings/history" + this.email,this.httpOptions);
  }

  cancelTicket(pnr:any){
    return this.httpClient.post(this.host+"bookings/cancel" + pnr,this.httpOptions);
  }

}
