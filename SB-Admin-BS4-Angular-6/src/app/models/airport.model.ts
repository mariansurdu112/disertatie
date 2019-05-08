export class Airport {
    Id: number;
    Name: string;
    IataCode: string;
    IcaoCode: string;
    Country: string;
    Timezone: string;
    Latitude: string;
    Longitude: string;
    TaxiIn: number;
    TaxiOut: number;
    Category: string;
    Sector: string;
    FuelDensity: string;
    Contact: string;
    constructor(Id: number,
    Name: string,
    IataCode: string,
    IcaoCode: string,
    Country: string,
    Timezone: string,
    Latitude: string,
    Longitude: string,
    TaxiIn: number,
    TaxiOut: number,
    Category: string,
    Sector: string,
    FuelDensity: string,
    Contact: string) {
        this.Id = Id;
        this.Name = Name;
        this.IataCode = IataCode;
        this.IcaoCode = IcaoCode;
        this.Country = Country;
        this.Timezone = Timezone;
        this.Latitude = Latitude;
        this.TaxiIn = TaxiIn;
        this.TaxiOut = this.TaxiOut;
        this.Category = Category;
        this.Sector = Sector;
        this.FuelDensity = FuelDensity;
        this.Contact = Contact;
    }
}
