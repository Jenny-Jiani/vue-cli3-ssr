export class StandardOfferModel {
  standardOfferId = null
  standardOfferName = ''
  deploymentMode = 0
  moduleCombinationMode = false
  editionCombinationMode = false
  usageStage = 0
  price = 0
  productId = 0
  productModuleList = []
  productEditionList = []
  productShowModuleNameList = []
  productShowEditionNameList = []
  chooseProductModuleList = []
  chooseProductEditionList = []
  chargeWay = 0
  usageDays = 0
  serviceDays = 0
  productName = ''
  versionMajor
  versionMinor
  versionBuild
  count = 0
  ModuleIds
  EditionIds
  licenseGenerator = null
  popularity = null
}

export class ProductModuleModel {
  moduleId = null
  moduleName = ''
}

export class ProductEditionModel {
  editionId = null
  editionName = ''
  versionBuild
  versionMajor
  versionMinor
}

export class StandardTabModel {
  key = 0
  name = ''
  runtimeList = []
  developList = []
  runtimeAndDevelopList = []
  productionList = []
  nonProductionList = []
  productionAndNonProductionList = []
  displaySort = 0
  displayLevel = 0
}

export class AddStandardOfferModel {
  ProductId = ''
  Price = 0
  StandardOfferName = ''
  StandardOfferCode = ''
  NameExtend = ''
  DeploymentMode = 0
  UsageStage = 1
  ChargeWay = 0
  ModuleCombinationMode = 0
  ModuleList = []
  EditionCombinationMode = 0
  EditionList = []
  Count = ''
  UsageDays = ''
  ServiceDays = ''
  UpgradeFromVersionMajor = null
  UpgradeFromStandardOfferId = null
  IsTrial = false
  IsTest = false
  IsFoldLicenseQty = false
  IsShowToCustomer = false
  IsShowToReseller = false
  Creator = 0
  Comment = ''
  LicenseGenerator = 0
}

export class UpdateStandardOfferModel extends AddStandardOfferModel {
  StandardOfferId = 0
}
