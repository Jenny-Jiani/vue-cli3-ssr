export class CreateOrderModel {
  OrderType = 1
  BillingFullName = ''
  BillingEmail = ''
  TechnicalFullName = ''
  TechnicalEmail = ''
  ResellerEmail = ''
  DiscountPercentOff = 0
  DiscountMinusOff = 0
  IsPaid
  CompanyId = 0
  CompanyName = null
  CompanyPhone = ''
  Address = ''
  City = ''
  CountryCode = ''
  StateCode = ''
  ZipCode = ''
  // Bill Info Sales下单填写
  TicketNumber = ''
  PONumbe = ''
  CustomerPONumber = ''
  TaxCode = ''
  PayNotes = ''
}

export class CreateQuoteModel {
  // Quote/Invoice Params
  IsNeedProformaInvoice = false
  QuoteValidStartTime = ''
  QuoteValidEndTime = ''
  NoteList = []
  // Bill Info
  TicketNumber = ''
  PONumber = ''
  CustomerPONumber = ''
  TaxCode = ''
  PayNotes = ''
  // Contact Info
  Email = ''
  FirstName = ''
  LastName = ''
  // Country Info
  CountryCode = ''
  StateCode = ''
  City = ''
  Address = ''
  Phone = ''
  ZipCode = ''
  TaxRate
  // Reseller
  ResellerEmail = ''
  // Sales 下单有效
  DiscountPercentOff
  DiscountMinusOff
  CompanyId = ''
  CompanyName = ''
}

export class SearchQuoteParam {
  QuoteId
  UserEmail = ''
  IsAssigned = false
  PageSize = 10
  PriceStart = 0
  PriceEnd = 0
  Company = ''
  InvoiceNumber = ''
  isCustomerPage = true
  CurrentPage = 1
  Amount = null
  IsConvertToOrder = false
}

export class SearchRenewParam {
  OrderType = 0
  IsSubmitOrder = false
  ProductSaleIdList = []
  MantenanceYearCount
  RenewYearOrQuantityCount
  BillingFullName = ''
  BillingEmail = ''
  TechnicalFullName = ''
  TechnicalEmail = ''
  ResellerEmail = ''
}

export class RenewOrderModel {
  OrderType = 0
  BillingFullName = ''
  BillingEmail = ''
  TechnicalFullName = ''
  TechnicalEmail = ''
  ResellerEmail = ''
  DiscountPercentOff
  DiscountMinusOff
  isPaid
  ProductSaleIdList = []
  MantenanceYearCount
  RenewYearOrQuantityCount
  IsSubmitOrder = true
  IsAlign
  // Bill Info Sales下单填写
  TicketNumber = ''
  PONumber = ''
  CustomerPONumber = ''
  TaxCode = ''
  PayNotes = ''
  // New Order
  CompanyName = ''
  CompanyPhone = ''
  Address = ''
  City = ''
  CountryCode = ''
  StateCode = ''
  ZipCode = ''
  CompanyId = 0
}

export class SearchUpgradeStandardOfferParam {
  IsSubmitOrder = false
  UpgradeStandardOfferId = 0
  ProductSaleId = 0
}

export class UpgradeOrderModel {
  OrderType = 16
  BillingFullName = ''
  BillingEmail = ''
  TechnicalFullName = ''
  TechnicalEmail = ''
  ResellerEmail = ''
  DiscountPercentOff
  DiscountMinusOff
  isPaid
  IsSubmitOrder = true
  UpgradeStandardOfferId = 0
  ProductSaleId = 0
  VersionMajor
  VersionMinor
  VersionBuild
  // Bill Info Sales下单填写
  TicketNumber = ''
  PONumbe = ''
  CustomerPONumber = ''
  TaxCode = ''
  PayNotes = ''
  // New Order
  CompanyName = ''
  CompanyPhone = ''
  Address = ''
  City = ''
  CountryCode = ''
  StateCode = ''
  ZipCode = ''
  CompanyId = 0
}

export class CreateOrderFromQuoteModel {
  QuoteId = 0
  Signature = ''
  IsSubmitOrder = false
  BillingFullName = ''
  BillingEmail = ''
  TechnicalFullName = ''
  TechnicalEmail = ''
  ResellerEmail = ''
  DiscountPercentOff
  DiscountMinusOff
  IsPaid
  CompanyId = 0
  // Sales下单填写
  TicketNumber = ''
  PONumber = ''
  CustomerPONumber = ''
  TaxCode = ''
  PayNotes = ''
}

export class UpdateQuoteInfoParam extends CreateQuoteModel {
  QuoteId = 0
}

export class UpdateQuoteItemModel {
  QuoteItemOperation = 1
  QuoteId = 0
  // AddStandardOffer
  StandardOfferId
  ModuleIds
  EditionIds
  VersionMajor
  VersionMinor
  VersionBuild
  // UpdateProductSale
  ProductSaleId
  Quantity
}

export class OrderSearchParam {
  OrderId = ''
  StartTime = ''
  EndTime = ''
  isCustomerPage = true
  Email = ''
  IsBillingContact = false
  IsDelete = false
  CompanyName = ''
  CompanyId = ''
  CustomerPONumber = ''
  PONumber = ''
  TicketNumber = ''
  InvoiceNumber = ''
  ProductId = '' // 做成下拉框的形式
  CountryCode = ''
  StateCode = ''
  IsAnnualLicense = ''
  HasReseller = ''
  IsLatestPayDate = ''
  IsAmountZero = ''
  PageSize = 10
  CurrentPage = 1
  OrderStatus = -99
  IsCustomerUnpaid = false
}

export class UpdateOrderInfoModal {
  OrderId = 0
  Country = ''
  State = ''
  TicketNumber = ''
  CustomerPONumber = ''
  PONumber = ''
  TaxCode = ''
  PayNotes = ''
  Note = ''
  City = ''
  Address = ''
  Phone = ''
  ZipCode = ''
}
