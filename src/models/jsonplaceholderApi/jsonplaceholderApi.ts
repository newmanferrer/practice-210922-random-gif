export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  address: IAddress;
  company: ICompany;
  website: string;
}

export interface IAddress {
  city: string;
  geo: IGeo;
  street: string;
  suite: string;
  zipcode: string;
}

export interface IGeo {
  lat: string;
  lng: string;
}

export interface ICompany {
  bs: string;
  catchPhrase: string;
  name: string;
}
