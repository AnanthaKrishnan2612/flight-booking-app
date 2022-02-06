import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Router } from '@angular/router';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-bookinghistory',
  templateUrl: './bookinghistory.component.html',
  styleUrls: ['./bookinghistory.component.css']
})
export class BookinghistoryComponent implements OnInit {
  username:any;
  email:any;
  bookingHistory :any;
  message:any;

  constructor(private bookingservice : BookingService,private router: Router) { }

  ngOnInit(): void {
    this.username = sessionStorage.getItem('username');
    this.email = sessionStorage.getItem('email');
    this.bookingservice.getBookingHistory().subscribe(data => {
      this.bookingHistory = data;
      console.log(this.bookingHistory);
    })
  }

  cancelTicket(pnrNumber:any)
 {
  this.bookingservice.cancelTicket(pnrNumber).subscribe(data => {
    this.message = data;})
  //  this.ngOnInit;

  alert("Cancel Ticket!!!!");
   this.router.navigate(["/history"]);
 }
  openPDF(){
    //window.print();
    let DATA = document.getElementById('historyList') as HTMLElement;
    //let DATA1 = document.getElementById('historyList') as HTMLElement;
    html2canvas(DATA).then(canvas => {
      let fileWidth = 208;
      let fileHeight = canvas.height * fileWidth / canvas.width;

      const FILEURI = canvas.toDataURL('image/png')
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight)
      PDF.save('Booking-details.pdf');
    })
  }
}
