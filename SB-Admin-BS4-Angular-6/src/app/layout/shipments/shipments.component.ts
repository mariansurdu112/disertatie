import {Component, OnInit, ViewChild} from '@angular/core';
import {jqxGridComponent} from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid';
import {Order} from '../../models/order.model';
import {ShipmentsService} from './shipments.service';

@Component({
    selector: 'app-shipments',
    templateUrl: './shipments.component.html',
    styleUrls: ['./shipments.component.scss']
})
export class ShipmentsComponent implements OnInit {
    @ViewChild('myGrid') myGrid: jqxGridComponent;

    // orderdates: Date[] = [new Date()];
    // orderNumbers: string[] = ['1234121', '2321342', '1341231', '5524', '2351453', '53323', '5324321', '5324231'];
    // users: string[] = ['Marian Surdu', 'Ionel Sandu', 'Ioana Vasile'];
    // reqNumbers: string[] = ['123123', '1231231', '13123123', '1231421', '12312313333', '4321212'];
    reqPriority: string[] = ['01', '02', '03', '04'];
    // reqTargetDates: Date[] = [new Date()];
    // partNumbers: any[] = [{ pNo: '1BWW737', description: 'CARPET BOTANY WEAVING' },
    //  { pNo: '2083-11-1', description: 'MACH AIR SPEED INDICATOR'},
    //   {pNo: '10037-1000-0156', description: 'INDICATOR FUEL QTY' },
    //   { pNo: 'QD3R150', description: 'TORQUE WRENCH' },
    //   { pNo: '340-001-816-0', description: 'PLATFORM-FAN BLADE' },
    //   { pNo: '2215108-1', description: 'GASKET  - AIR CYCLE MACHINE' },
    //   { pNo: '60-4162-5', description: 'LAMP HOLDER' },
    //   { pNo: 'B0E2236-0016', description: 'SEAL' },
    //   { pNo: '65-46108-21', description: 'LLP - ACTUATOR BEAM ASSY' },
    //   { pNo: 'G7404-30', description: 'VHF COMMUNICATION CONTROL PANEL' },
    //   { pNo: '630-1001-018', description: 'CAP ASSY LOW PRESSURE' },
    //   { pNo: 'C23102-275-001', description: 'SWITCH' },
    //   { pNo: '863521-02', description: 'FIRE EXTINGUISHER, PORTABLE' },
    //   { pNo: 'C32034-227', description: 'REMOVAL/INSTALLATION EQUIPMENT - MLG' },
    //   { pNo: 'C32029-1', description: 'PIN KIT - REMOV/INSTALL MAIN LANDING GEAR ASSY' },
    //   { pNo: 'BACR15BB6D7C', description: 'RIVET' }
    // ];
    // aircrafts: string[] = ['YR-AMA', 'YR-BAR', 'YR-AME', 'YR-AMB', '734'];
    // tslint:disable-next-line:max-line-length
    // froms: string[] = ['AERMECCANICA', 'Lufthansa Technik AG Hamburg', 'Czech Airlines Technics, a.s.', 'SUMMIT AEROSPACE','AVIOTEK INST. & ACCESS. INC'];
    // to: string[] =  ['MARAIR'];
    // edds: Date[] = [new Date()];
    shippers: string[] = ['UPS EXPRESS SAVER', 'ROAD TRANSPORTATION', 'DHL EXPRESS IMPORT'];
    // awbs: string[] = ['12312', '1231312', '1331313133', '88122467222', '6001645580', '2896525586'];
    // ordered: number[] = [10, 20, 30, 40, 50];
    // delivered: number[] = [10, 20, 30, 40, 50];
    // comments: string[] = ['Delivered', 'Not delivered', 'Achitat'];
    // criticals: boolean[] = [true, false];
    // logDep: boolean[] = [true, false];
    // techDep: boolean[] = [true, false];
    orderToAdd: Order;

    constructor(private shipmentsService: ShipmentsService) {
    }

    ngOnInit() {

        this.getPartNumbers();
        this.getAircrafts();
    }

    getWidth(): any {
        if (document.body.offsetWidth < 850) {
            return '90%';
        }
        return 850;
    }

    generaterow(data: any): any {
        const row = {};
        row['orderdate'] = data.OrderDate;
        row['ordernumber'] = data.OrderNumber;
        row['user'] = data.UserName;
        row['requirementnumber'] = data.RequirementNumber;
        row['reqpriority'] = data.RequirementPriority;
        row['reqtargetdate'] = data.Edd;
        row['partnumber'] = data.Fk_Part_No.PartNo;
        row['description'] = data.Fk_Part_No.Description;
        row['aircraft'] = data.FK_NOM_AIRCRAFT.AircraftName;
        row['from'] = data.From;
        row['to'] = data.To;
        row['edd'] = data.Edd;
        row['shipper'] = data.Shipper;
        row['awb'] = data.Awb;
        row['ordered'] = data.Ordered;
        row['delivered'] = data.Delivered;
        row['critical'] = data.Critical;
        row['log_dep_ack'] = data.LogisticAck;
        row['tech_dep_ack'] = data.TechnicAck;
        row['comments'] = data.Comments;
        row['id'] = data.Id;


        return row;
    }

    // tslint:disable-next-line:member-ordering
    dataGrid = this.getOrders();
    // tslint:disable-next-line:member-ordering
    partNumbers = [];
    // tslint:disable-next-line:member-ordering
    aircrafts = [];
    // tslint:disable-next-line:member-ordering
    dataLoaded = false;
    // tslint:disable-next-line:member-ordering
    source: any =
        {
            localdata: this.dataGrid,
            datatype: 'local',
            datafields:
                [
                    {name: 'orderdate', type: 'date'},
                    {name: 'ordernumber', type: 'string'},
                    {name: 'user', type: 'string'},
                    {name: 'requirementnumber', type: 'number'},
                    {name: 'reqpriority', type: 'string'},
                    {name: 'reqtargetdate', type: 'date'},
                    {name: 'partnumber', type: 'string'},
                    {name: 'description', type: 'string'},
                    {name: 'aircraft', type: 'string'},
                    {name: 'from', type: 'string'},
                    {name: 'to', type: 'string'},
                    {name: 'edd', type: 'date'},
                    {name: 'shipper', type: 'string'},
                    {name: 'awb', type: 'string'},
                    {name: 'ordered', type: 'number'},
                    {name: 'delivered', type: 'number'},
                    {name: 'comments', type: 'string'},
                    {name: 'critical', type: 'bool'},
                    {name: 'log_dep_ack', type: 'bool'},
                    {name: 'tech_dep_ack', type: 'bool'},
                    {name: 'id', type: 'number'}

                ]
        };
    // tslint:disable-next-line:member-ordering
    dataAdapter: any = new jqx.dataAdapter(this.source);
    // tslint:disable-next-line:member-ordering
    columns: any[] =
        [
            {text: 'Order Date', datafield: 'orderdate', width: 200},
            {text: 'Order Number', datafield: 'ordernumber', width: 200},
            {text: 'User', datafield: 'user', width: 180},
            {text: 'Requirement number', datafield: 'requirementnumber', width: 80, cellsalign: 'right'},
            {text: 'Requirement priority', datafield: 'reqpriority', width: 90, cellsalign: 'right', cellsformat: 'c2'},
            {text: 'Target date', datafield: 'reqtargetdate', cellsalign: 'right'},
            {text: 'Part number', datafield: 'partnumber', width: 200},
            {text: 'Description', datafield: 'description', width: 200},
            {text: 'Aircraft', datafield: 'aircraft', width: 200},
            {text: 'From', datafield: 'from', width: 200},
            {text: 'To', datafield: 'to', width: 200},
            {text: 'Edd', datafield: 'edd', width: 200},
            {text: 'Shipper', datafield: 'shipper', width: 200},
            {text: 'Awb', datafield: 'awb', width: 200, editable: true},
            {text: 'Ordered', datafield: 'ordered', width: 200},
            {text: 'Delivered', datafield: 'delivered', width: 200},
            {text: 'Comments', datafield: 'comments', width: 200, editable: true},
            {text: 'Critical', datafield: 'critical', width: 200, columntype: 'checkbox', editable: true, filtertype: 'bool'},
            {
                text: 'Acknowledge logisitc',
                datafield: 'log_dep_ack',
                width: 200,
                columntype: 'checkbox',
                editable: true,
                filtertype: 'bool'
            },
            {
                text: 'Acknowledge technical',
                datafield: 'tech_dep_ack',
                width: 200,
                columntype: 'checkbox',
                editable: true,
                filtertype: 'bool'
            },

        ];
    rendertoolbar = (toolbar: any): void => {
        const container = document.createElement('div');
        container.style.margin = '5px';
        const buttonContainer1 = document.createElement('div');
        const buttonContainer2 = document.createElement('div');
        const buttonContainer3 = document.createElement('div');
        const buttonContainer4 = document.createElement('div');
        buttonContainer1.id = 'buttonContainer1';
        buttonContainer2.id = 'buttonContainer2';
        buttonContainer3.id = 'buttonContainer3';
        buttonContainer4.id = 'buttonContainer4';
        buttonContainer1.style.cssText = 'float: left';
        buttonContainer2.style.cssText = 'float: left; margin-left: 5px';
        buttonContainer3.style.cssText = 'float: left; margin-left: 5px';
        buttonContainer4.style.cssText = 'float: left; margin-left: 5px';
        container.appendChild(buttonContainer1);
        container.appendChild(buttonContainer2);
        container.appendChild(buttonContainer3);
        container.appendChild(buttonContainer4);
        toolbar[0].appendChild(container);
        // const addRowButton = jqwidgets.createInstance('#buttonContainer1', 'jqxButton', { width: 105, value: 'Add New Row' });
        const deleteRowButton = jqwidgets.createInstance('#buttonContainer3', 'jqxButton', {width: 150, value: 'Delete Order'});
        /* addRowButton.addEventHandler('click', () => {
           const datarow = this.generaterow();
           this.myGrid.addrow(null, datarow);
         });*/

        deleteRowButton.addEventHandler('click', () => {
            const selectedrowindex = this.myGrid.getselectedrowindex();
            const rowscount = this.myGrid.getdatainformation().rowscount;
            if (selectedrowindex >= 0 && selectedrowindex < parseFloat(rowscount)) {
                const id = this.myGrid.getrowid(selectedrowindex);
                this.myGrid.deleterow(id);
            }
        });
    }


    getPartNumbers() {
        this.shipmentsService.getPartNumbers().subscribe(res => {
            console.log(res);
            res.forEach((partnumber) => {
                this.partNumbers.push({Id: partnumber.Id, pNo: partnumber.PartNo, description: partnumber.Description});
            });


        });
    }

    getAircrafts() {
        this.shipmentsService.getAircrafts().subscribe(res => {
            console.log(res);
            this.aircrafts = res;


        });
    }

    getOrders() {
        const data = [];
        this.shipmentsService.getOrders().subscribe(res => {
            console.log(res);
            res.forEach((order) => {
                data.push(this.generaterow(order));
            });
            this.dataLoaded = true;

        });
        return data;
    }

    addRowToGrid($event) {
        const row = {};
        this.orderToAdd = JSON.parse($event);
        row['orderdate'] = this.orderToAdd.OrderDate;
        row['ordernumber'] = this.orderToAdd.OrderNumber;
        row['user'] = this.orderToAdd.UserName;
        row['requirementnumber'] = this.orderToAdd.RequirementNumber;
        row['reqpriority'] = this.orderToAdd.ReqPriority;
        row['reqtargetdate'] = this.orderToAdd.ReqTargetDate;
        row['partnumber'] = this.orderToAdd.PartNumber.description;
        row['description'] = this.orderToAdd.Description;
        row['aircraft'] = this.orderToAdd.Aircraft.AircraftName;
        row['from'] = this.orderToAdd.From;
        row['to'] = this.orderToAdd.To;
        row['edd'] = this.orderToAdd.Edd;
        row['shipper'] = this.orderToAdd.Shipper;
        row['awb'] = this.orderToAdd.Awb;
        row['ordered'] = this.orderToAdd.Ordered;
        row['delivered'] = this.orderToAdd.Delivered;
        row['critical'] = this.orderToAdd.Critical;
        row['log_dep_ack'] = this.orderToAdd.LogDepAck;
        row['tech_dep_ack'] = this.orderToAdd.TechDepAck;
        row['comments'] = this.orderToAdd.Comments;
        row['id'] = this.orderToAdd.Id;
        this.myGrid.addrow(null, row);
        const dataRow = JSON.parse($event);
        console.log(this.orderToAdd);
        this.orderToAdd.PartNo = this.orderToAdd.PartNumber[0].Id;
        const aircraftId = this.orderToAdd.Aircraft[0].Id;
        this.orderToAdd.Aircraft = aircraftId;
        this.shipmentsService.addOrder(this.orderToAdd).subscribe((res) => {
            console.log(res);
        });
    }

    cellBeginEditEvent(event: any): void {
        console.log(event);
    }

    cellEndEditEvent(event: any): void {
        console.log(event);
        // tslint:disable-next-line:triple-equals
        if (event.args.datafield == 'log_dep_ack') {
            const data = {Id: event.args.row.id, Value: event.args.row.log_dep_ack};
            this.shipmentsService.markAckLog(data).subscribe((res) => {
            });
        }
        // tslint:disable-next-line:triple-equals
        if (event.args.datafield == 'tech_dep_ack') {

            const data = {Id: event.args.row.id, Value: event.args.row.tech_dep_ack};
            this.shipmentsService.markAckTech(data).subscribe((res) => {
            });

        }
        // tslint:disable-next-line:triple-equals
        if (event.args.datafield == 'critical') {
            const data = {Id: event.args.row.id, Value: event.args.row.critical};
            this.shipmentsService.markOrderCritical(data).subscribe((res) => {
            });

        }
    }

}
