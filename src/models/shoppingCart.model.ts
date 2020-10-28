export class ShoppingCartModel {
  productSalesId: any = null;
  productSaleName: any = '';
  orderType: number = 0;
  count: number = 0;
  quantity: number = 0;
  quantityTotal: number = 0;
  price: number = 0;
  amount: number = 0;
  chargeWay: number = 0;
  discountPromotionSaving?: string = '';
  amountAfterStdOfferPromotion: number = 0;
  recommendPromotions: any = null;
  comment: string = "";
}

export class AppliedPromotion { 
  name: string = '';
  discountAmount: number = 0;
}
