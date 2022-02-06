import { Time } from "@angular/common";

export class FlightDTO{

    constructor(
        public flightNumber:string, 
        public airline:string, 
        public startingLocation:string, 
        public destination:string,
        public departureDateTime:Date,
        public returnDateTime:Date, 
        public scheduledDays:string, 
        public totalSeats:number, 
        public instrumentsUsed:string,
        public totalNoOfRows:number,
        public ticketCost:number, 
        public meals:string, 
        public isBlocked:boolean, 
        public isOneWay:boolean,
        public isBooked:boolean,
        public departureDate:Date,
        public returnDate:Date, 
        public departureTime?:Date,
        public returnTime?:Date
    ){}


}