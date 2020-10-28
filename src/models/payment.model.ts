export class PayOrderBillModal {
  OrderId: number = 0;
  Signature: string = '';
  PayMethod: number = 3;
  PayType: number = 1;
  // credit card
  CreditCardNumber: string = "";
  CreditCardName: string = "";
  CreditCardVerifyCode: string = "";
  CreditCardExpireYear: string = "";
  CreditCardExpireMonth: string = "";
  ZipCode: string = "";
  // Instalment
  InstalmentCount?: number;
  IsPrePayInstalment?: boolean;
  // Delay pay
  DelayPayTime?: number;
  DownPaymentPercent?: number;
  // Check or Tele
  Comment?: string;
  IsTransferred?: boolean; 
}

export class SetOrderPayTypeModal {
  OrderId: number = 0;
  PayType: number = 0;
  Count: number = 0;
  Date: string = '';
  DownPaymentPercent: number = 0;
  ReceiverEmail: string = '';
}