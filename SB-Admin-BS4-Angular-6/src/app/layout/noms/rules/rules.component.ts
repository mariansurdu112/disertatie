import {Component, OnInit, ViewChild} from '@angular/core';
import {jqxGridComponent} from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid';
import {jqxWindowComponent} from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxwindow';
import {jqxInputComponent} from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxinput';
import {NomsService} from '../noms.service';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.scss']
})
export class RulesComponent implements OnInit {
    @ViewChild('myGrid') myGrid: jqxGridComponent;
    @ViewChild('myWindow') myWindow: jqxWindowComponent;

    @ViewChild('rule') rule: jqxInputComponent;
    @ViewChild('area') area: jqxInputComponent;

    editrow = -1;
    dataLoaded = false;
    dataGrid = this.getRules();
    dataServer = [];
    /* [
                {id: 1, rule: '20_733_735_1 SCC 1 CC2 1 CC', area: 'CABIN'},
                {id: 1, rule: '01_734_1 SCC 1 CC2 2 CC', area: 'CABIN'},
                {id: 1, rule: '00 SYSTEM DEFAULT NO CABIN', area: 'CABIN'},
                {id: 1, rule: '10_1 PIC 1 FO', area: 'COCKPIT'}]*/
    source =
        {
            localdata: this.dataGrid,
            datatype: 'array',
            datafields:
                [
                    { name: 'id', type: 'number' },
                    { name: 'rule', type: 'string' },
                    { name: 'area', type: 'string' }
                ]
        };
    dataAdapter = new jqx.dataAdapter(this.source);
    getWidth(): any {
        if (document.body.offsetWidth < 850) {
            return '90%';
        }

        return 850;
    }
    columns = [
        { text: 'ID', datafield: 'id', width: 200 },
        { text: 'Rule', datafield: 'rule', width: 300 },
        { text: 'Area', datafield: 'area', width: 190 },
        {
            text: 'Edit', datafield: 'Edit', columntype: 'button', width: 100,
            cellsrenderer: (): string => {
                return 'Edit';
            },
            buttonclick: (row: number): void => {
                // get the data and append in to the inputs
                this.editrow = row;
                const dataRecord = this.myGrid.getrowdata(this.editrow);
                this.rule.val(dataRecord.rule);
                this.area.val(dataRecord.area);
                this.myWindow.position({ x: 68, y: 368 });
                this.myWindow.open();
            }
        }
    ];

    generateRow(data: any) {
        const row = {};
        row['id'] = data.Id;
        row['rule'] = data.Rule;
        row['area'] = data.Area;
        return row;
    }

    getRules() {
        const data = [];
        this.nomsService.getRules().subscribe(res => {
            console.log(res);
            this.dataServer = res;
            res.forEach((rule) => {
                data.push(this.generateRow(rule));
            });
            this.dataLoaded = true;

        });
        return data;
    }
    saveBtn(): void {
        if (this.editrow >= 0) {
            const row = {
                    id: this.myGrid.getrowid(this.editrow),
                    rule: this.rule.val(),
                    area: this.area.val()
                };
            const rowID = this.myGrid.getrowid(this.editrow);
            this.myGrid.updaterow(rowID, row);
            this.dataServer[rowID].Rule = this.rule.val();
            this.dataServer[rowID].Area = this.area.val();
            this.nomsService.updateRule(this.dataServer[rowID]).subscribe((res) => {
                console.log('Updated!!');
            });
            this.myWindow.hide();
        }
    }
    cancelBtn(): void {
        this.myWindow.hide();
    }
  constructor(private nomsService: NomsService) { }

  ngOnInit() {
  }

}
