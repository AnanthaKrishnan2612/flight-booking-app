import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FlightDTO } from 'src/app/models/flightdto';
import { FlightService } from 'src/app/services/flight.service';

@Component({
  selector: 'app-addnewflight',
  templateUrl: './addnewflight.component.html',
  styleUrls: ['./addnewflight.component.scss']
})
export class AddnewflightComponent implements OnInit {

  

  addFlightForm:FormGroup

  errorMessage : String = '';

  constructor(private flightService : FlightService) {this.addFlightForm = new FormGroup({
    "flightNumber": new FormControl("", [Validators.required]),
    "airline": new FormControl("", [Validators.required]),
    "startingLocation": new FormControl("", [Validators.required]),
    "destination": new FormControl("", [Validators.required]),
    "departureDate": new FormControl("", [Validators.required]),
    "returnDate": new FormControl("", []),
    "departureTime": new FormControl("", [Validators.required]),
    "returnTime": new FormControl("", []),
    "totalSeats": new FormControl("", []),
    "ticketCost": new FormControl("", [])
    
  }); }


  flightSaved!:FlightDTO;
  flightDto:FlightDTO = new FlightDTO('', '', '', '',new Date, new Date, '',0, '', 0, 0, '', false, false, false, new Date, new Date);


  ngOnInit(): void {
  }
  addFlights(){

  this.flightDto.flightNumber = this.addFlightForm.value.flightNumber
  this.flightDto.airline = this.addFlightForm.value.airline
  this.flightDto.startingLocation = this.addFlightForm.value.startingLocation
  this.flightDto.destination = this.addFlightForm.value.destination
  this.flightDto.departureDate = this.addFlightForm.value.departureDate
  this.flightDto.returnDate = this.addFlightForm.value.returnDate
  this.flightDto.totalSeats = this.addFlightForm.value.totalSeats
  this.flightDto.ticketCost = this.addFlightForm.value.ticketCost
  return this.flightService.addnewFlight(this.flightDto).subscribe((res:any) =>{   
    this.flightSaved = res;
    alert("Flights added Successfully-"+this.flightSaved.flightNumber)
}
, this.handleError
)

}

handleError = (err:any)=>{
  console.log(err);
  if(err instanceof HttpErrorResponse)
  console.log("HTTP Response is handled here  for CORS error ")
  this.errorMessage = err.message;
  
}

}
