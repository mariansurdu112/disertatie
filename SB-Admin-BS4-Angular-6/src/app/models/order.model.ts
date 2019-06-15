export class Order {
    OrderDate: Date;
    OrderNumber: string;
    UserName: string;
    RequirementNumber: number;
    ReqPriority: string;
    ReqTargetDate: Date;
    PartNumber: any;
    Description: string;
    Aircraft: any;
    From: string;
    To: string;
    Edd: Date;
    Shipper: string;
    Awb: string;
    Ordered: number;
    Delivered: number;
    Comments: string;
    Critical: boolean;
    LogDepAck: boolean;
    TechDepAck: boolean;
    PartNo: number;
    Id: number;

    constructor(OrderDate: Date,
                OrderNumber: string,
                User: string,
                RequirementNumber: number,
                ReqPriority: string,
                ReqTargetDate: Date,
                PartNumber: any,
                Description: string,
                Aircraft: any,
                From: string,
                To: string,
                Edd: Date,
                Shipper: string,
                Awb: string,
                Ordered: number,
                Delivered: number,
                Comments: string,
                Critical: boolean,
                LogDepAck: boolean,
                TechDepAck: boolean) {
        this.OrderDate = OrderDate;
        this.OrderNumber = OrderNumber;
        this.UserName = User;
        this.RequirementNumber = RequirementNumber;
        this.ReqPriority = ReqPriority;
        this.ReqTargetDate = ReqTargetDate;
        this.PartNumber = PartNumber;
        this.Description = Description;
        this.Aircraft = Aircraft;
        this.From = From;
        this.To = To;
        this.Edd = Edd;
        this.Shipper = Shipper;
        this.Awb = Awb;
        this.Ordered = Ordered;
        this.Delivered = Delivered;
        this.Comments = Comments;
        this.Critical = Critical;
        this.LogDepAck = LogDepAck;
        this.TechDepAck = TechDepAck;
    }

}
