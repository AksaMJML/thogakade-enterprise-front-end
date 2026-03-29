export interface DobModel {
  month: number;
  day: number;
  year: number;
}

export interface CustomerModel{
    id: String;
    title: string;
    name: string;
    dob: DobModel;
    salary: number;
    address: string;
    city: string;
    province: string;
    postalCode: string;
}

export interface ItemModel{
  ItemCode : String;
  Description : String;
  PackSize : String;
  UnitPrice : number;
  QtyOnHand : number;
}

