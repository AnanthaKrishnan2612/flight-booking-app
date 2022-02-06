import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookingDTO } from 'src/app/models/bookingdto';
import { FlightDTO } from 'src/app/models/flightdto';
import { Passengers } from 'src/app/models/passengers';
import { TicketDetails } from 'src/app/models/ticketdetails';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  bookTicketForm: FormGroup;
  flightDetails: FlightDTO;

  constructor(private bookingService: BookingService ,private router: Router) {
    // check for other ways to add flight details
    this.flightDetails = history.state.data.flight;
    console.log(this.flightDetails);
    this.bookTicketForm = new FormGroup({
      "username": new FormControl("", [Validators.required]),
      "email": new FormControl("", [Validators.required]),
      "name": new FormControl("", [Validators.required]),
      "age": new FormControl("", [Validators.required]),
      "gender": new FormControl("", [Validators.required]),
      "contact": new FormControl("", [Validators.required]),
      "seatNumber": new FormControl("", [Validators.required]),
      "meal" :new FormControl("", [Validators.required])
    });
    // this.flights.push(this.searchParameter);
  }
  // passengers() : FormArray {
  //   return this.bookTicketForm.get("passengers") as FormArray
  // }
// verify if displayedColums are reqd
  // displayedColumns : string[] = ['pnrNumber', 'flightNumber', 'airline','departureDate','departureTime', 'returnDate', 'returnTime', 'totalSeats', 'ticketCost', 'bookTicket', 'passengerName','passengerAge', 'passengerGender']
  passengerDetails : Passengers= new Passengers('','',0,0,false,0,0);
  ticketDetails!: TicketDetails;
  bookingDTO!: BookingDTO;
  ticketResponse!: BookingDTO;
  passengerList: Passengers[] = [];
  count:any=0;
  customerCheck = false;
  totalamount:any = 0;

  addPassenger(){
    // this.passengerDetails.name=this.bookTicketForm.value.name;
    // this.passengerDetails.age=this.bookTicketForm.value.age;
    // this.passengerDetails.gender=this.bookTicketForm.value.gender;
    // this.passengerDetails.seatNumber = this.bookTicketForm.value.seatNumber;
    // this.passengerDetails.isMealReqd = this.bookTicketForm.value.meal;
    const passenger={name:this.bookTicketForm.value.name,age:this.bookTicketForm.value.age,gender:this.bookTicketForm.value.gender,seatNumber:this.bookTicketForm.value.seatNumber,isMealReqd:this.bookTicketForm.value.meal}
    this.passengerList.push(passenger);
    this.count+=1;
    this.customerCheck = true;
    this.totalamount = (this.flightDetails.ticketCost) * (this.count);
  }
  
  // removePassenger(){
    
  // }
  generatePnr() {
    this.ticketDetails = new TicketDetails(
      this.bookTicketForm.value.email,
      this.bookTicketForm.value.username,
      this.flightDetails.flightNumber,
      this.flightDetails.startingLocation,
      this.flightDetails.destination,
      this.bookTicketForm.value.contact,
      1,
      "CONFIRMED",
      this.flightDetails.departureDate,
      
      this.flightDetails.returnDate,
      this.flightDetails.departureTime,
      this.flightDetails.returnTime)

    // this.passengerDetails = new Passengers(this.bookTicketForm.value.name,
    //   this.bookTicketForm.value.gender,
    //   this.bookTicketForm.value.age,
     
    //   this.bookTicketForm.value.seatNumber)
    // this.passengerList.push(this.passengerDetails);
    
    this.bookingDTO = new BookingDTO(this.ticketDetails, this.passengerList)
    this.bookingService.bookTicket(this.bookingDTO).subscribe((res:any) =>{   
      this.ticketResponse = res;
      alert("Ticket Booked Successfully with pnr -"+this.ticketResponse.ticketDetails.pnrNumber)
      this.router.navigate(['/history']);
      
  })

  }

  clickedRows(row: BookingDTO){}

  ngOnInit(): void {
  }


}
