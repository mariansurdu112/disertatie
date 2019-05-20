import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {
flight:any;
  @Input() value: any;
  constructor(private modalCtrl: ModalController, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.flight = this.sanitizer.bypassSecurityTrustStyle(this.value);
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

}
