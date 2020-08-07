declare interface IPost {
  id: number;
  userId: number;
  title: string;
  body: string;
}

declare interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IAddress;
  phone: string;
  website: string;
  company: ICompany;
}

declare interface IAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: IGeo;
}

declare interface IGeo {
  lat: string;
  lng: string;
}

declare interface ICompany {
  name: string;
  catchPhrase: string;
  bs: string;
}

declare interface IApiErrors {
  [key: string]: string[];
}

declare interface IValidationError {
  name: string;
  message: string;
  errors: IApiErrors;
}

declare interface IThemeContext {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
}
