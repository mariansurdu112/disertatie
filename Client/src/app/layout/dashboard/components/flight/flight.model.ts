
export class Flight {
    dep_date: Date;
    from: string;
    to: string;
    flt_time: string;
    flt_no: string;
    passengers: number;
    landing_time: Date;
    charter: boolean;

    constructor(dep_date: Date, from: string, to: string, flt_time: string , flt_no: string, passengers: number, landing_time: Date,
                charter: boolean) {
        this.dep_date = dep_date;
        this.from = from;
        this.to = to;
        this.flt_time = flt_time;
        this.flt_no = flt_no;
        this.passengers = passengers;
        console.log(landing_time)
        this.landing_time = landing_time;
        this.charter = charter;
    }

}
