import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EventDetailsComponent } from './event-details/event-details.component';

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.scss']
})
export class RosterComponent {
  date: any;
  daysInThisMonth: any;
  daysInLastMonth: any;
  daysInNextMonth: any;
  monthNames: string[];
  currentMonth: any;
  currentYear: any;
  currentDate: any;
  eventList: any;
  selectedEvent: any;
  isSelected: any;
  previousSelectedDay: any;

  constructor(public modalCtrl: ModalController) { }

  ionViewWillEnter() {
    this.date = new Date();
    // tslint:disable-next-line:max-line-length
    this.monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    this.getDaysOfMonth();
    this.loadEventThisMonth();
  }

  getDaysOfMonth() {
    this.daysInThisMonth = new Array();
    this.daysInLastMonth = new Array();
    this.daysInNextMonth = new Array();
    this.currentMonth = this.monthNames[this.date.getMonth()];
    this.currentYear = this.date.getFullYear();
    if (this.date.getMonth() === new Date().getMonth()) {
      this.currentDate = new Date().getDate();
    } else {
      this.currentDate = 999;
    }

    const firstDayThisMonth = new Date(this.date.getFullYear(), this.date.getMonth(), 1).getDay();
    const prevNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth(), 0).getDate();
    for (let i = prevNumOfDays - (firstDayThisMonth - 1); i <= prevNumOfDays; i++) {
      this.daysInLastMonth.push({day: i, isSelected: false});
    }

    const thisNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDate();
    for (let j = 0; j < thisNumOfDays; j++) {
      this.daysInThisMonth.push({ day: j + 1, isSelected: false });
    }

    const lastDayThisMonth = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDay();
    // var nextNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth()+2, 0).getDate();
    for (let k = 0; k < (6 - lastDayThisMonth); k++) {
      this.daysInNextMonth.push({ day: k + 1, isSelected: false });
    }
    const totalDays = this.daysInLastMonth.length + this.daysInThisMonth.length + this.daysInNextMonth.length;
    if (totalDays < 36) {
      for (let l = (7 - lastDayThisMonth); l < ((7 - lastDayThisMonth) + 7); l++) {
        this.daysInNextMonth.push({ day: l, isSelected: false });
      }
    }
  }

  goToLastMonth() {
    this.date = new Date(this.date.getFullYear(), this.date.getMonth(), 0);
    this.getDaysOfMonth();
  }

  goToNextMonth() {
    this.date = new Date(this.date.getFullYear(), this.date.getMonth() + 2, 0);
    this.getDaysOfMonth();
  }

  addEvent() {
    // this.navCtrl.push(AddEventPage);
  }

  loadEventThisMonth() {
    this.eventList = new Array();
    const startDate = new Date(this.date.getFullYear(), this.date.getMonth(), 1);
    const endDate = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0);
// tslint:disable-next-line: max-line-length
    this.eventList.push({ startDate: new Date(2019, 6, 28, 5, 0), endDate: new Date(2019, 6, 28, 7, 45), title: 'FLT', message: 'OTP via FCO', Icon: 'airplane'});
    // tslint:disable-next-line:max-line-length
    this.eventList.push({ startDate: new Date(2019, 6, 28, 8, 45), endDate: new Date(2019, 6, 28, 11, 30), title: 'FLT', message: 'FCO via OTP' , Icon: 'airplane'});
// tslint:disable-next-line: max-line-length
    this.eventList.push({ startDate: new Date(2019, 6, 28, 14, 0), endDate: new Date(2019, 6, 28, 16, 0), title: 'GCO', message: 'Examinare OPC' , Icon: 'document'});
    // tslint:disable-next-line:max-line-length
    this.eventList.push({ startDate: new Date(2019, 6, 28, 16, 0), endDate: new Date(2019, 6, 29, 7, 0), title: 'RES', message: 'Rest' , Icon: 'moon'});
    // this.calendar.listEventsInRange(startDate, endDate).then(
    //   (msg) => {
    //     msg.forEach(item => {
    //       this.eventList.push(item);
    //     });
    //   },
    //   (err) => {
    //     console.log(err);
    //   }
    // );
  }

  checkEvent(day) {
    let hasEvent = false;
    const thisDate1 = this.date.getFullYear() + '-' + (this.date.getMonth() + 1) + '-' + day + ' 00:00:00';
    const thisDate2 = this.date.getFullYear() + '-' + (this.date.getMonth() + 1) + '-' + day + ' 23:59:59';
    this.eventList.forEach(event => {
// tslint:disable-next-line: max-line-length
      if (((event.startDate >= thisDate1) && (event.startDate <= thisDate2)) || ((event.endDate >= thisDate1) && (event.endDate <= thisDate2))) {
        hasEvent = true;
      }
    });
    return hasEvent;
  }

  selectDate(day) {
    this.isSelected = false;

    day.isSelected = true;
    this.selectedEvent = new Array();
    const thisDate1 = this.date.getFullYear() + '-' + (this.date.getMonth() + 1) + '-' + day + ' 00:00:00';
    const thisDate2 = this.date.getFullYear() + '-' + (this.date.getMonth() + 1) + '-' + day + ' 23:59:59';
    this.eventList.forEach(event => {
      // if (((event.startDate >= thisDate1) && (event.startDate <= thisDate2)) || ((event.endDate >= thisDate1) && (event.endDate <= thisDate2))) {
        this.isSelected = true;
        this.selectedEvent.push(event);
      // }
    });
  }

  haveEvents(day: number) {
    return true;
  }

  async displayInfo(se) {
    const modal = await this.modalCtrl.create({
      component: EventDetailsComponent,
      componentProps: { value: se }
    });
    return await modal.present();
  }

  deleteEvent(evt) {


  }
}
