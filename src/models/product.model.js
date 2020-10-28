export class ProductModel {
  productId
  productName = ''
  fullName = ''
  iconImage = ''
  backgroundImage = ''
  introduce = ''
  status = null
  displaySort = null
  tag = null
  bindingProduct = null
  versionMajors
  editionInfos = []
}

export class EditionModel {
  editionId = 0
  productEditionId = 0
  productEditionName = ''
  versionInfos = []
}

export class VersonModel {
  productVersionId
  versionMajo = 0
  versionMinor = 0
  versionBuild = 0
  hasHelpDoc = false
  hasTrialResource = false
  helpDocUrl = ''
  isTest = false
  trialResourceUrl = ''
  trialResourcePackageSize = ''
}

export class AddApiParam {
  Module = ''
  ApiName = ''
  Match = ''
  BaseDesc = ''
  AdvancedDesc = ''
}

export class UpdatedApiParam extends AddApiParam {
  ApiId = 0
}
