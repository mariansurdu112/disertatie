import { Component, OnInit } from '@angular/core';
import { PopoverController, AlertController, ModalController, ToastController, MenuController, NavController } from '@ionic/angular';
import { DatePipe } from '@angular/common';
@Component({
    selector: 'app-personal-docs',
    templateUrl: './personal-docs.component.html',
    styleUrls: ['./personal-docs.component.scss']
})



export class PersonalDocsComponent implements OnInit {

    searchKey = '';
    yourLocation = 'OTP Airport,FCO Airport';
    themeCover = 'assets/img/ionic4-Start-Theme-cover.jpg';
    docs: Array<any> = [{
        Id: 1, Name: 'ID', ExpiryDate: new Date(2019, 9, 5), Icon: 'card'
    },
        {
            Id: 2, Name: 'Passport', ExpiryDate: new Date(2019, 12, 5), Icon: 'card'
        },
        {
            Id: 3, Name: 'Flying License', ExpiryDate: new Date(2020, 2, 15)
        },
        {
            Id: 4, Name: 'Medical License', ExpiryDate: new Date(2019, 9, 25)
        },
        {
            Id: 5, Name: 'Radio License', ExpiryDate: new Date(2019, 11, 29)
        },
        {
            Id: 6, Name: 'Employee contract', ExpiryDate: new Date(2099, 12, 31)
        }];

    constructor() {
    }

    ngOnInit() {
    }

    s(row: any) {

    }

    async showDetails(row: any) {
        const changeLocation = await this.alertCtrl.create({
            header: row.Name,
            message: "Document details",
            inputs: [
                {
                    name: 'expdate',
                    placeholder: 'Expiry date',
                    type: 'text',
                    disabled: true,
                    value: 'Expiry date:'+this.datePipe.transform(row.ExpiryDate, 'dd/MM/yyyy')
                },
                {
                    name: 'type',
                    placeholder: 'Type',
                    type: 'text',
                    disabled: true,
                    value: 'Type:'+row.Type,
                },
                {
                    name: 'licno',
                    placeholder: 'License Number',
                    type: 'text',
                    disabled: true,
                    value: 'License number:' + row.Number
                },

            ],
            buttons: [
                {
                    text: 'Ok',
                    handler: data => {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        changeLocation.present();
    }







}
