export class PromotionModel {
  PromotionId: any;
	PromotionRange: number = 1;
	PromotionName: string = '';
	ProductId: any;
	ProductName: any;
	DiscountPercentOff?:number;
	DiscountMinusOff?:number;
	ValidStartTime?: string = '';
	ValidEndTime?: string = '';
	StartUser?: any;
	EndUser?: any;
	ConditionStdOfferCount?: number;
	RetrospectStartDate?: string = '';
	RetrospectEndDate?: string = '';
	RetrospectTimeSpan?: number;
	ConditionTotalCost?:number;
	PromotionCategory?: number;
	PromotionSerialNo: string = '';
	PromotionSerialName?: string = '';
	CardinalNumberType?: number;
}

export class AddPromotionModel {
	PromotionName: string = '';
	// StandardOffer = 1, Global = 2
	PromotionRange: number = 1;
	// VolumeDiscount = 1(基于总价),
	// AccessoryDiscount = 2(买 A 后再买 B 有优惠),
	// XInYDiscount = 3(Y 个产品中买 X 个有优惠)
	PromotionCategory: number = 1;
	// 计算折扣时的基数，可选值为：1.按实际总价，2.按最低份数，3.按最低总价
	// ps:PromotionCategory = VolumeDiscount ,XInYDiscount时， CardinalNumberType可选all
	// PromotionCategory = AccessoryDiscount时， CardinalNumberType可选LeastMultiple，LeastAmount
	CardinalNumberType: number = 1;
	// PromotionRange为IndependentProduct时生效
	// 即Global 时，可填写这个字段(拿出所有的productId 让他单选，一个都不选就是all)
	ProductId?: any = '';
	// PromotionRange为StandardOffer时生效
	// AccessoryDiscount时需要填写这里的discount，和IsAccessory
	StandardOfferIdList: any = [];
	// 系列号，一系列的Promotion，如阶梯价格 默认不填自动生成
	PromotionSerialNo: string = '';
	// 系列名称，一系列的Promotion，如阶梯价格，默认填PromotionName
	PromotionSerialName: string = '';
	// VolumeDiscount 独有，总价的条件
	ConditionTotalCost?: number;
	// XInYDiscount时填写，默认值等于StandardOfferIdList.count 满足条件的 StandardOffer 的数量 如 DBR 1D + DBR QR，数量为2，10（列表中的记录数） 选 3 数量为3
	ConditionStdOfferCount?: number;
	DiscountPercentOff?: number;
	DiscountMinusOff?: number;
	RetrospectStartDate?: string;
	RetrospectEndDate?: string;
	RetrospectTimeSpan?: any;
	PromotionPrivileges: any = []
	ExpireDate: any = '';
	OrderType?: any = '';
}