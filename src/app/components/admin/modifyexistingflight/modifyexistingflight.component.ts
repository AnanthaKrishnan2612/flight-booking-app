import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlightDTO } from 'src/app/models/flightdto';
import { FlightService } from 'src/app/services/flight.service';

@Component({
  selector: 'app-modifyexistingflight',
  templateUrl: './modifyexistingflight.component.html',
  styleUrls: ['./modifyexistingflight.component.scss']
})
export class ModifyexistingflightComponent implements OnInit {

  headers = ["Flight Number", "Airline", "Source", "Destination", "Departure Time", "Arrival Time", "Seats", "Instrument Used", "Meals", "Blocked",];
  flightList: FlightDTO[] = [];
  constructor(private flightservice: FlightService, private router: Router) { }

  ngOnInit(): void {
    this.getAllFlights();
  }

  getAllFlights() {
    this.flightservice.getAllFlights().subscribe((list: any) => {
      console.log(list);
      this.flightList = list;
      console.log("All Flights Table :", this.flightList);
    });
  }

  blockFlight(airline: any) {
    console.log(airline)
    this.flightservice.blockFlight(airline).subscribe(data => {
      console.log("Success");
      this.getAllFlights();

    });
  }
  unblockFlight(airline: any) {
    console.log(airline)
    this.flightservice.unblockFlight(airline).subscribe(data => {
      console.log("Success");
      this.getAllFlights();
      this.router.navigate(['/admin/modifyflight']);
    });

  }
}
