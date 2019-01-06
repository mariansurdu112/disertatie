import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { jqxListBoxComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxlistbox';

@Component({
  selector: 'app-crew-selector',
  templateUrl: './crew-selector.component.html',
  styleUrls: ['./crew-selector.component.scss']
})
export class CrewSelectorComponent implements AfterViewInit {
 @ViewChild('jqxListBox') myListBox: jqxListBoxComponent;
  @ViewChild('Events') Events: ElementRef;
  @ViewChild('CheckedItems') CheckedItems: ElementRef;

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit(): void {
      this.myListBox.checkIndex(0);
      this.myListBox.checkIndex(1);
      this.myListBox.checkIndex(2);
      this.myListBox.checkIndex(5);
  }
  // tslint:disable-next-line:member-ordering
  source: string[] = [
      'MARIAN SURDU',
      'FLORIN SURDU',
      'ANA SIMION',
      'IONEL ION'
  ];
  checkChange(event: any): void {
      const eventsContainer = this.Events.nativeElement;
      const checkedItemsContainer = this.CheckedItems.nativeElement;
      if (event.args.checked) {
          eventsContainer.innerHTML = 'Checked: ' + event.args.label;
      } else {
          eventsContainer.innerHTML = 'Unchecked: ' + event.args.label;
      }
      const items = this.myListBox.getCheckedItems();
      let checkedItems = '';
      for (let i = 0; i < items.length; i++) {
          if (i < items.length - 1) {
              checkedItems += items[i].label + ', ';
          } else { checkedItems += items[i].label; }
      }
      checkedItemsContainer.innerHTML = checkedItems;
  }

}
