<template>
  <div id="homePage">
    <div class="indexBanner">
      <div class="bannerBgImg"></div>
      <div class="container">
        <div class="row">
          <div class="col-12 pl50 pt100">
            <h1 class="textUpperCase fontOswald">Power Your development</h1>
            <p class="indexBannerDesc">
              Enterprise-grade document capture and barcode reading SDKs.
            </p>
            <router-link class="textUpperCase downloadBtn d-btn orange-btn" to="/download"
              >download 30-day free trial</router-link
            >
          </div>
        </div>
      </div>
    </div>

    <IndexCustomer
      class="indexCompanys"
      :CustomerJSON="JSON.stringify(indexDatas.customerData)"
    ></IndexCustomer>

    <div class="indexProduct container">
      <div class="row">
        <div class="col-12 col-lg-6">
          <div class="productBox pr barcodeProduct">
            <span class="icon icon-barcode"></span>
            <h3 class="textUpperCase fontOswald">Create Barcoding Applications</h3>
            <p class="mt30 disc">
              In just minutes, developers can create industrial-grade barcode scanning for
              <router-link class="orangeLink" to="">Android</router-link>,
              <router-link class="orangeLink" to="">iOS</router-link>,
              <router-link class="orangeLink" to="">JavaScript</router-link>,
              <router-link class="orangeLink" to="">Linux</router-link> or
              <router-link class="orangeLink" to="">Windows</router-link> applications with just a
              few lines of code and realize immediate savings by avoiding months of development time
              and costs. Supports a myriad of common 1D and 2D barcodes.
            </p>
            <p class="f24 mt30 textUpperCase fontOswald dbrlink">
              <router-link class="orangeLink" to=""
                >Discover Dynamsoft Barcode Reader ></router-link
              >
            </p>
            <img
              class="productImg"
              src="../../../assets/Web/images/banner/index/homePage_createBarcodeApplication.png"
            />
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <div class="productBox pr documentProduct">
            <span class="icon-scanner icon"></span>
            <h3 class="textUpperCase fontOswald">Implement Document Scanning</h3>
            <p class="mt30 disc">
              Rapidly implement secure document scanning for a web or .NET application with just a
              few lines of code to support any sized organization needing business-grade document
              scanning, editing and saving to local/server repositories.
            </p>
            <p class="f24 mt30 textUpperCase fontOswald dwtlink">
              <router-link class="orangeLink" to="">Discover Dynamic Web Twain ></router-link>
            </p>
            <p class="f24 textUpperCase fontOswald dntlink">
              <router-link class="orangeLink" to="">Discover Dynamic .net Twain ></router-link>
            </p>
            <img
              class="productImg"
              src="../../../assets/Web/images/banner/index/homePage_implementDocumentScanning.png"
            />
          </div>
        </div>
      </div>
    </div>

    <IndexSwiper
      class="indexSwiper mt150"
      :SwiperJSON="JSON.stringify(indexDatas.swiperData)"
    ></IndexSwiper>

    <div class="indexReason container">
      <div class="row">
        <div class="col-12">
          <div class="indexReasonBg"></div>
          <div style="z-index: 111">
            <h2 class="textUpperCase fontOswald">Why Choose Dynamsoft?</h2>
            <ul class="reasonList">
              <li>
                <p class="title textUpperCase fontOswald">Trusted by World-Class Organizations</p>
                <p class="cnt">
                  Dynamsoft’s solutions have been tried, tested and used by many of the world’s
                  leading businesses and organizations across industries: finance, government,
                  healthcare, technology and much more.
                </p>
              </li>
              <li>
                <p class="title textUpperCase fontOswald">Simple Integration and Customizability</p>
                <p class="cnt">
                  Using just a few lines of code, efficiently embed document scanning / image
                  capture, barcode recognition and information extraction in your web, desktop or
                  mobile applications with customizable configurations to optimize performance.
                </p>
              </li>
              <li>
                <p class="title textUpperCase fontOswald">Cost Effective</p>
                <p class="cnt">
                  Realize immediate short-term cost-savings by removing extra time required for
                  development. Eliminate internal long-term support, and development costs and
                  worries by relying on Dynamsoft’s continual product improvements and 15+ years of
                  R&D in its SDKs.
                </p>
              </li>
              <li>
                <p class="title textUpperCase fontOswald">Award-Winning Sales and Support Team</p>
                <p class="cnt">
                  Dynamsoft continually wins distribution partner awards for sales and has been
                  presented a Bronze Stevie® Award for Customer Service. Our friendly support staff
                  can be reached via phone, email or live chat for fast responses.
                </p>
              </li>
            </ul>
          </div>
          <img
            class="indexReasonImg"
            src="../../../assets/Web/images/banner/HomeIllustrations_Benefits.png"
          />
        </div>
      </div>
    </div>

    <IndexFeature
      class="indexFeature"
      :FeatureJSON="JSON.stringify(indexDatas.featureData)"
    ></IndexFeature>

    <div class="indexBottom bgOrange fontWhite">
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-8 col-xl-6 offset-lg-2 offset-xl-0">
            <h2 class="textUpperCase fontOswald fontWhite">Ready to power your development?</h2>
            <p class="cnt">
              Dynamsoft offers online demos for its SDKs. In addition, all SDKs allow for a 30-day
              free trial so you can rest assured with Dynamsoft.
            </p>
            <div class="btns">
              <router-link
                class="textUpperCase downloadBtn d-btn white-btn"
                :to="DYNAMSOFTURL + '/Downloads/Downloads.aspx'"
                >download 30-day free trial</router-link
              >
              <!-- <router-link class="textUpperCase tryBtn fontOswald whiteLink f24" to="/download">Try our online demos ></router-link> -->
            </div>
          </div>
          <div class="col-12 hide-lg col-xl-6">
            <img
              class="powerClickImg fr hide-sm hide-md"
              style="width: 100%"
              src="../../../assets/Web/images/banner/index/Poweryourdev.gif"
              alt="Dynamsoft"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import productApi from '@/api/product.api'
import editionEnumApi from '@/api/editionEnum.api'
import IndexSwiper from '@/components/Web/common/commonSwiper.vue'
import IndexCustomer from '@/components/Web/common/commonCustomer.vue'
import IndexFeature from '@/components/Web/common/commonFeature.vue'
import { ProductModel, VersonModel, EditionModel } from '@/models/product.model'
import { ProductEditionModel } from '@/models/standardOffer.model'

export default {
  components: {
    IndexSwiper,
    IndexCustomer,
    IndexFeature,
  },
  data() {
    return {
      productList: [],
      moreProductList: [],
      ProductEditionList: [],
      indexDatas: {
        swiperData: [
          {
            quote:
              'After an exhaustive search, we were very pleased to find a scanning tool that met our needs.',
            author: 'David Haring, Lockheed Martin',
            company: 'LockheadMartin',
          },
          {
            quote:
              'IBM opted for Dynamsoft’s Dynamic Web TWAIN SDK. Using Dynamsoft’s SDK accelerated delivery of the total solution as IBM developers were able to leverage the SDK to quickly implement scanning capabilities.',
            author: 'IBM Datacap Team',
            company: 'IBM',
          },
          {
            quote:
              'We now have a high-quality SDK integrated in our application to easily scan barcodes. We’re very happy with the SDK and help received from Dynamsoft.',
            author: 'artin Held, German Red Cross',
            company: 'GermanRedCross',
          },
        ],
        customerData: [
          {
            logoClass: 'disney-logo',
          },
          {
            logoClass: 'epson-logo',
          },
          {
            logoClass: 'fujifilm-logo',
          },
          {
            logoClass: 'hp-logo',
          },
          {
            logoClass: 'ibm-logo',
          },
          {
            logoClass: 'lm-logo',
          },
          {
            logoClass: 'sumsung-logo',
          },
          {
            logoClass: 'usa-logo',
          },
        ],
        featureData: [
          {
            type: 'blog',
            typeName: 'CASE STUDY',
            title: 'Scan Documents Online and Upload as Images',
            content:
              'Dynamic Web TWAIN is a mature, stable product compared with other similar products in the market. The SDK was first released in 2003.',
            url: 'http://blog.dynamsoft.com/insights/scan-documents-images-and-upload-online',
          },
          {
            type: 'blog',
            typeName: 'BLOG POST',
            title: 'What are the Best Barcode Reader SDKs?',
            content:
              'In this article, we look at the leading vendors from the barcode reading industry and provide a detailed breakdown of how each of them perform. ',
            url: 'https://blog.dynamsoft.com/insights/best-barcode-reader-sdks/',
          },
          {
            type: 'video',
            typeName: 'VIDEO',
            title: 'Dynamic .NET TWAIN 7.0 Document Scanning',
            content:
              'A quick walkthrough of how to embed Dynamic .NET TWAIN in your WinForms application.',
            url: 'https://www.youtube.com/watch?v=rWAsBPor9xQ',
          },
        ],
      },
    }
  },
  mounted() {
    let obj = document.getElementById('dynamsoft-header')
    obj.style.position = 'fixed'
    window.addEventListener('scroll', this.handleScroll, true)
  },
  methods: {
    getProductList() {
      productApi.getProductList({}, res => {
        res.forEach(element => {
          if (element.DisplayLevel == 1) {
            let productItem = new ProductModel()
            productItem.productId = element.ProductId
            productItem.productName = element.ProductName
            productItem.fullName = element.FullName
            productItem.introduce = element.Introduce
            element.EditionInfos.forEach(edition => {
              let EditionItem = new EditionModel()
              EditionItem.editionId = edition.EditionId
              EditionItem.productEditionId = edition.ProductEditionId
              EditionItem.productEditionName = this.getEditionName(edition.EditionId)
              edition.VersionInfos.forEach(item => {
                let VersionItem = new VersonModel()
                VersionItem.versionMajor = item.VersionMajor
                VersionItem.versionMinor = item.VersionMinor
                VersionItem.versionBuild = item.VersionBuild
                VersionItem.isTest = item.IsTest
                VersionItem.hasHelpDoc = item.HasHelpDoc
                VersionItem.hasTrialResource = item.HasTrialResource
                VersionItem.helpDocUrl = item.HelpDocUrl
                VersionItem.trialResourceUrl = item.TrialResourceUrl
                EditionItem.versionInfos.push(VersionItem)
              })
              EditionItem.versionInfos.sort((a, b) => {
                if (a.versionMajor > b.versionMajor) {
                  return -1
                } else if (a.versionMajor == b.versionMajor) {
                  if (a.versionMinor > b.versionMinor) {
                    return -1
                  } else if (a.versionMinor == b.versionMinor) {
                    if (a.versionBuild > b.versionBuild) {
                      return -1
                    } else {
                      return 1
                    }
                  } else {
                    return 1
                  }
                } else {
                  return 1
                }
              })
              productItem.editionInfos.push(EditionItem)
            })
            this.productList.push(productItem)
          }
        })
      })
    },
    getEditionName(editionId) {
      let editionName = ''
      this.ProductEditionList.forEach(edition => {
        if (edition.editionId == editionId) {
          editionName = edition.editionName
        }
      })
      return editionName
    },
    goToProductPage(productId) {
      if (productId == 1000001) {
        this.$router.push({ path: '/store/dynamic-web-twain' })
      }
      if (productId == 1000003) {
        this.$router.push({ path: '/store/dynamsoft-barcode-reader' })
      }
      if (productId == 1000002) {
        this.$router.push({ path: '/store/dynamic-.net-twain' })
      }
      if (productId == 1000004) {
        this.$router.push({ path: '/store/sourceAnyWhere' })
      }
    },
    handleScroll() {
      var scrollTop =
        document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
      let obj = document.getElementById('dynamsoft-header')
      if (scrollTop > 0) {
        obj.style.background = '#FFFFFF'
        obj.style.borderBottom = '2px solid #ddd'
      } else {
        obj.style.background = 'transparent'
        obj.style.borderBottom = '0'
      }
    },
  },
}
</script>

<style lang="scss">
@import '../../../assets/Web/css/basic_style.css';
@import '../../../assets/Web/css/index-bs.css';
.dynamsoft-header {
  background: transparent;
}
.basicFeature .featureBox .featureBoxBottom {
  min-height: 36rem;
}
.basicFeature .featureBox .featureBoxBottom a {
  position: absolute;
  bottom: 4rem;
}
#homePage .indexCompanys {
  margin-top: 10rem;
}
#homePage .basicCustomers .customer-logos li {
  margin-right: 79px;
  opacity: 0.6;
}
#homePage .basicCustomers .customer-logos li:last-child {
  margin-right: 0;
}

@media (max-width: 1699px) {
  #homePage .basicCustomers .customer-logos li {
    margin-right: 35px;
  }
  #homePage .basicCustomers .customer-logos li:last-child {
    margin-right: 0;
  }
  #homePage .basicFeature .featureBox .featureBoxBottom {
    min-height: 300px;
  }
}

@media (max-width: 1199px) {
  #homePage .basicCustomers .customer-logos li i.company-logo {
    transform: scale(0.8);
  }
  #homePage .basicCustomers .customer-logos li {
    margin-right: 9px;
  }
  #homePage .basicCustomers .customer-logos li:last-child {
    margin-right: 0;
  }
}

@media (max-width: 991px) {
  #homePage .basicFeature .featureBox:hover {
    box-shadow: unset;
    margin: auto;
  }
  #homePage .basicFeature .featureBox .featureBoxBottom a {
    position: static;
  }
  #homePage .basicFeature .featureBox .featureBoxBottom {
    min-height: unset;
  }
}

@media (max-width: 767px) {
  #homePage .indexCompanys {
    margin-top: 50px;
  }
}
</style>
