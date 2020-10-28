export class AddUserRoleParam {
  RoleName: string = '';
  Role: number = 1;
  Comment: string = '';
}

export class UpdateUserRoleParam {
  
}

export class AddUserParam {
  Role: number = 2;
  CompanyId: number = 0;
  CompanyName: string = "";
  WebSite: string = "";
  Domain: string = "";
  TimeZoneOffset: number = 0;
  CompanyPhone: string = "";
  Fax: string = "";
  FirstName: string = "";
  LastName: string = "";
  Email: string = "";
  Phone: string = "";
  ZipCode: string = "";
  CountryCode: string = "";
  StateCode: string = "";
  City: string = "";
  Address: string = "";
  Title: string = "";
  Rank: number = 0;
  Comment: string = "";
  IsSendRegisterEmail: boolean = false;
}