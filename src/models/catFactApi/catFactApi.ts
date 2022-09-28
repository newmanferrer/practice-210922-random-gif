export interface IFact {
  fact: string;
  length: number;
}

export interface IFactList {
  current_page: number;
  data: IFact[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: ILink[];
  next_page_url: string;
  path: string;
  per_page: number;
  prev_page_url: null;
  to: number;
  total: number;
}

export interface IBreed {
  breed: string;
  coat: string;
  country: string;
  origin: string;
  pattern: string;
}

export interface IBreedList {
  current_page: number;
  data: IBreed[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: ILink[];
  next_page_url: string;
  path: string;
  per_page: number;
  prev_page_url: null;
  to: number;
  total: number;
}

export interface ILink {
  active: boolean;
  label: string;
  url: null | string;
}
