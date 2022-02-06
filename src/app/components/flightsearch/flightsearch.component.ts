import { HttpErrorResponse } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FlightDTO } from 'src/app/models/flightdto';
import { BookingService } from 'src/app/services/booking.service';
import { FlightService } from 'src/app/services/flight.service';

@Component({
  selector: 'app-flightsearch',
  templateUrl: './flightsearch.component.html',
  styleUrls: ['./flightsearch.component.scss']
})
export class FlightsearchComponent implements OnInit {

  searchForm: FormGroup;
  isDisabled :boolean = true;
  flights: FlightDTO[] = [];
  selectedFlight !: FlightDTO;
  searchParameter:FlightDTO = new FlightDTO('','','','',new Date,new Date,'',0,'',0,0,'',false,false, false,new Date,new Date);

  
  displayedColumns : string[] = ['flightNumber', 'airline', 'ticketCost']
 

  constructor(private flightService : FlightService, private router: Router) {
    this.searchForm = new FormGroup({
      "startingLocation": new FormControl("", [Validators.required]),
      "destination": new FormControl("", [Validators.required]),
      "departureDate": new FormControl("", [Validators.required]),
      "returnDate": new FormControl("", []),
      "isOneWay": new FormControl("", [])
      
    });
   // this.flights.push(this.searchParameter);
  }

  
  searchFlights() {
    //this.searchParameter.isOneWay = false;
    if(this.searchForm.value.isOneWay=="true"){
      this.searchParameter.isOneWay = true;
    }else{
      this.searchParameter.isOneWay = false;
    }
    console.log("Flight-app-log: Log -- searchflights : one way:"+this.searchParameter.isOneWay)
    this.searchParameter.departureDate = this.searchForm.value.departureDate;
    this.searchParameter.returnDate = this.searchForm.value.returnDate;
    this.searchParameter.startingLocation = this.searchForm.value.startingLocation;
    this.searchParameter.destination = this.searchForm.value.destination;
   
    console.log("Flight-app-log: Log -- searchflights : departureDate: " + this.searchParameter.departureDate + " :returnDate : " + this.searchParameter.returnDate + " : destination :" +this.searchParameter.destination+ " : startingLocation: " + this.searchParameter.startingLocation)

     this.flightService.searchFlights(this.searchParameter).subscribe((res: any) => {
     this.flights = res;
     if(this.flights.length==0){
       alert("No Flights Available")
     }
    }, this.handleError)

  }

  clickedRows(row: FlightDTO){
    this.selectedFlight = row;
    this.isDisabled = false;
    console.log("clicked"+row.airline); 
  }

  bookTicket(flight: FlightDTO){
    console.log("Flight"+flight)
    let route = '/userbooking';
    this.router.navigate([route],{state: {data: {flight}}});

    // return this.bookingSerivce.bookTicket(this.bookingDetails).subscribe((res:any) =>{   
    //     this.tickets = res;
    // })
}

errorMessage : string ='';
handleError = (err:any)=>{
  console.log(err);
  if(err instanceof HttpErrorResponse)
  console.log("Return Date not needed for One way")
  alert("Return Date not needed for One way")
  this.errorMessage = err.message;
  
}


  ngOnInit(): void {
    
  }

}
