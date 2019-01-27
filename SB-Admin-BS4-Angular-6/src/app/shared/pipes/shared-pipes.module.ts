import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightSortPipe } from './flight-sort.pipe';
import { FlightPointsPipe } from './flight-points.pipe';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [FlightSortPipe, FlightPointsPipe]
})
export class SharedPipesModule { }
