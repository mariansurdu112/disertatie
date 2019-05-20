import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-concierge',
  templateUrl: './concierge.component.html',
  styleUrls: ['./concierge.component.scss']
})
export class ConciergeComponent implements OnInit {

  requestsType: any = [
      {Id: 1, Name: 'Flight Request'},
      {Id: 2, Name: 'Swap Request'},
      {Id: 3, Name: 'Staff travel Request'},
      {Id: 4, Name: 'Off Request'}
      ];
  selectedDate: Date;
  selectedFlight: string;
  selectedRequest: number;
  constructor() { }

  ngOnInit() {
  }

  segmentChanged(req: any) {
    this.selectedRequest = req.Id;
    console.log(req);
  }

}
