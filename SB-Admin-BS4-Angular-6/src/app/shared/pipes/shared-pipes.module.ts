import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightSortPipe } from './flight-sort.pipe';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [FlightSortPipe]
})
export class SharedPipesModule { }
