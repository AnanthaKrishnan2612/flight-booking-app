import { Time } from "@angular/common";

export class TicketDetails {



    constructor(

        public userEmail: string,
        public userName: string,
        public flightNumber: string,
        public startingLocation: string,
        public destination: string,

        public contactNo: number,
        public noOfSeats: number,
        public bookingStatus: string,
        public departureDate: Date,

        public returnDate: Date,
        public departureTime?: Date,
        public returnTime?: Date,
        public pnrNumber?: number) { }


}