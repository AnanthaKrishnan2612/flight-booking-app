import { FlightDTO } from "./flightdto";
import { Passengers } from "./passengers";
import { TicketDetails } from "./ticketdetails";

export class BookingDTO {

    constructor(

        public ticketDetails: TicketDetails,
        public passengerDetails: Passengers[],
        public flightDetails?: FlightDTO,
    ) { }


}