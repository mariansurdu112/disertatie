import { Component, OnInit, ViewChild } from '@angular/core';
import { jqxGridComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid';

@Component({
  selector: 'app-shipments',
  templateUrl: './shipments.component.html',
  styleUrls: ['./shipments.component.scss']
})
export class ShipmentsComponent implements OnInit {
  @ViewChild('myGrid') myGrid: jqxGridComponent;

  orderdates: Date[] = [new Date()];
  orderNumbers: string[] = ['1234121', '2321342', '1341231', '5524', '2351453', '53323', '5324321', '5324231'];
  users: string[] = ['Marian Surdu', 'Ionel Sandu', 'Ioana Vasile'];
  reqNumbers: string[] = ['123123', '1231231', '13123123', '1231421', '12312313333', '4321212'];
  reqPriority: string[] = ['01', '02', '03', '04'];
  reqTargetDates: Date[] = [new Date()];
  partNumbers: any[] = [{ pNo: '1BWW737', description: 'CARPET BOTANY WEAVING' },
   { pNo: '2083-11-1', description: 'MACH AIR SPEED INDICATOR'},
    {pNo: '10037-1000-0156', description: 'INDICATOR FUEL QTY' },
    { pNo: 'QD3R150', description: 'TORQUE WRENCH' },
    { pNo: '340-001-816-0', description: 'PLATFORM-FAN BLADE' },
    { pNo: '2215108-1', description: 'GASKET  - AIR CYCLE MACHINE' },
    { pNo: '60-4162-5', description: 'LAMP HOLDER' },
    { pNo: 'B0E2236-0016', description: 'SEAL' },
    { pNo: '65-46108-21', description: 'LLP - ACTUATOR BEAM ASSY' },
    { pNo: 'G7404-30', description: 'VHF COMMUNICATION CONTROL PANEL' },
    { pNo: '630-1001-018', description: 'CAP ASSY LOW PRESSURE' },
    { pNo: 'C23102-275-001', description: 'SWITCH' },
    { pNo: '863521-02', description: 'FIRE EXTINGUISHER, PORTABLE' },
    { pNo: 'C32034-227', description: 'REMOVAL/INSTALLATION EQUIPMENT - MLG' },
    { pNo: 'C32029-1', description: 'PIN KIT - REMOV/INSTALL MAIN LANDING GEAR ASSY' },
    { pNo: 'BACR15BB6D7C', description: 'RIVET' }
  ];
  aircrafts: string[] = ['YR-AMA', 'YR-BAR', 'YR-AME', 'YR-AMB', '734'];
  // tslint:disable-next-line:max-line-length
  froms: string[] = ['AERMECCANICA', 'Lufthansa Technik AG Hamburg', 'Czech Airlines Technics, a.s.', 'SUMMIT AEROSPACE','AVIOTEK INST. & ACCESS. INC'];
  to: string[] =  ['MARAIR'];
  edds: Date[] = [new Date()];
  shippers: string[] = ['UPS EXPRESS SAVER', 'ROAD TRANSPORTATION', 'DHL EXPRESS IMPORT'];
  awbs: string[] = ['12312', '1231312', '1331313133', '88122467222', '6001645580', '2896525586'];
  ordered: number[] = [10, 20, 30, 40, 50];
  delivered: number[] = [10, 20, 30, 40, 50];
  comments: string[] = ['Delivered', 'Not delivered', 'Achitat'];
  criticals: boolean[] = [true, false];
  logDep: boolean[] = [true, false];
  techDep: boolean[] = [true, false];

  constructor() { }

  ngOnInit() {
  }

  getWidth(): any {
    if (document.body.offsetWidth < 850) {
      return '90%';
    }
    return 850;
  }
  generaterow(): any {
    let row = {};
    const orderIndex = Math.floor(Math.random() * this.orderNumbers.length);
    const reqIndex = Math.floor(Math.random() * this.reqNumbers.length);
    const userIndex = Math.floor(Math.random() * this.users.length);
    const reqPriorityIndex = Math.floor(Math.random() * this.reqPriority.length);
    const partNoIndex = Math.floor(Math.random() * this.partNumbers.length);
    const aircraftIndex = Math.floor(Math.random() * this.aircrafts.length);
    const fromIndex = Math.floor(Math.random() * this.froms.length);
    const toIndex = Math.floor(Math.random() * this.to.length);
    const shipperIndex = Math.floor(Math.random() * this.shippers.length);
    const awbIndex = Math.floor(Math.random() * this.awbs.length);
    const orderedIndex = Math.floor(Math.random() * this.ordered.length);
    const deliveredIndex = Math.floor(Math.random() * this.delivered.length);
    const commentsIndex = Math.floor(Math.random() * this.comments.length);
    const criticalIndex = Math.floor(Math.random() * this.criticals.length);
    const logDepIndex = Math.floor(Math.random() * this.logDep.length);
    const techDepIndex = Math.floor(Math.random() * this.reqNumbers.length);
    row['orderdate'] = this.orderdates[0];
    row['ordernumber'] = this.orderNumbers[orderIndex];
    row['user'] = this.users[userIndex];
    row['requirementnumber'] = this.reqNumbers[reqIndex];
    row['reqpriority'] = this.reqPriority[reqPriorityIndex];
    row['reqtargetdate'] = this.reqTargetDates[0];
    row['partnumber'] = this.partNumbers[partNoIndex].pNo;
    row['description'] = this.partNumbers[partNoIndex].description;
    row['aircraft'] = this.aircrafts[aircraftIndex];
    row['from'] = this.froms[fromIndex];
    row['to'] = this.to[toIndex];
    row['edd'] = this.edds[0];
    row['shipper'] = this.shippers[shipperIndex];
    row['awb'] = this.awbs[awbIndex];
    row['ordered'] = this.ordered[orderIndex];
    row['delivered'] = this.delivered[deliveredIndex];
    row['critical'] = this.criticals[criticalIndex];
    row['log_dep_ack'] = this.logDep[logDepIndex];
    row['tech_dep_ack'] = this.techDep[techDepIndex];


    return row;
  }

  generateData(): any {
    let data = {};
    for (let i = 0; i < 100; i++) {
      let row = this.generaterow();
      data[i] = row;
    }
    return data;
  }
  // tslint:disable-next-line:member-ordering
  source: any =
    {
      localdata: this.generateData(),
      datatype: 'local',
      datafields:
        [
          { name: 'orderdate', type: 'date' },
          { name: 'ordernumber', type: 'string' },
          { name: 'user', type: 'string' },
          { name: 'requirementnumber', type: 'number' },
          { name: 'reqpriority', type: 'string' },
          { name: 'reqtargetdate', type: 'date' },
          { name: 'partnumber', type: 'string' },
          { name: 'description', type: 'string' },
          { name: 'aircraft', type: 'string' },
          { name: 'from', type: 'string' },
          { name: 'to', type: 'string' },
          { name: 'edd', type: 'date' },
          { name: 'shipper', type: 'string' },
          { name: 'awb', type: 'string' },
          { name: 'ordered', type: 'number' },
          { name: 'delivered', type: 'number' },
          { name: 'comments', type: 'string' },
          { name: 'critical', type: 'bool' },
          {name: 'log_dep_ack',type: 'bool'},
          { name: 'tech_dep_ack', type: 'bool' }
      ]
    };
  // tslint:disable-next-line:member-ordering
  dataAdapter: any = new jqx.dataAdapter(this.source);
  // tslint:disable-next-line:member-ordering
  columns: any[] =
    [
      { text: 'Order Date', datafield: 'orderdate', width: 200 },
      { text: 'Order Number', datafield: 'ordernumber', width: 200 },
      { text: 'User', datafield: 'user', width: 180 },
      { text: 'Requirement number', datafield: 'requirementnumber', width: 80, cellsalign: 'right' },
      { text: 'Requirement priority', datafield: 'reqpriority', width: 90, cellsalign: 'right', cellsformat: 'c2' },
      { text: 'Target date', datafield: 'reqtargetdate', cellsalign: 'right' },
      { text: 'Part number', datafield: 'partnumber', width: 200 },
      { text: 'Description', datafield: 'description', width: 200 },
      { text: 'Aircraft', datafield: 'aircraft', width: 200 },
      { text: 'From', datafield: 'from', width: 200 },
      { text: 'To', datafield: 'to', width: 200 },
      { text: 'Edd', datafield: 'edd', width: 200 },
      { text: 'Shipper', datafield: 'shipper', width: 200 },
      { text: 'Awb', datafield: 'awb', width: 200, editable: true },
      { text: 'Ordered', datafield: 'ordered', width: 200 },
      { text: 'Delivered', datafield: 'delivered', width: 200 },
      { text: 'Comments', datafield: 'comments', width: 200, editable: true },
      { text: 'Critical', datafield: 'critical', width: 200, columntype: 'checkbox', editable: true },
      { text: 'Acknowledge logisitc', datafield: 'log_dep_ack', width: 200, columntype: 'checkbox', editable: true },
      { text: 'Acknowledge technical', datafield: 'tech_dep_ack', width: 200, columntype: 'checkbox', editable: true },
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
    const addRowButton = jqwidgets.createInstance('#buttonContainer1', 'jqxButton', { width: 105, value: 'Add New Row' });
    const deleteRowButton = jqwidgets.createInstance('#buttonContainer3', 'jqxButton', { width: 150, value: 'Delete Selected Row' });
    addRowButton.addEventHandler('click', () => {
      const datarow = this.generaterow();
      this.myGrid.addrow(null, datarow);
    });

    deleteRowButton.addEventHandler('click', () => {
      const selectedrowindex = this.myGrid.getselectedrowindex();
      const rowscount = this.myGrid.getdatainformation().rowscount;
      if (selectedrowindex >= 0 && selectedrowindex < parseFloat(rowscount)) {
        const id = this.myGrid.getrowid(selectedrowindex);
        this.myGrid.deleterow(id);
      }
    });
  }

  addRowToGrid($event) {
    console.log($event);
  }

}
