<template>
  <div class="dynamsoft-footer">
    <!-- START PC-FOOTER -->
    <div class="footer-top hide-block-sm">
      <div class="container">
        <div class="row">
          <div class="col-5 col-lg-4 col-xl-3">
            <ul class="product">
              <li class="title fontOswald">PRODUCTS</li>
              <li class="subTitle">TWAIN Scanning SDK</li>
              <li class="item pl15">
                <a class="" :href="DYNAMSOFTURL + '/Products/WebTWAIN_Overview.aspx'"
                  >Dynamic Web TWAIN</a
                >
              </li>
              <li class="item pl15">
                <a class="" :href="DYNAMSOFTURL + '/Products/.Net-TWAIN-Scanner.aspx'"
                  >Dynamic .NET TWAIN</a
                >
              </li>
              <li class="item pl15 mb10">
                <a class="" :href="DYNAMSOFTURL + '/Products/dynamsoft-webcam-sdk.aspx'"
                  >Dynamsoft Camera SDK</a
                >
              </li>
              <li class="subTitle">Recognition</li>
              <li class="item pl15 mb10">
                <a class="" :href="DYNAMSOFTURL + '/Products/Dynamic-Barcode-Reader.aspx'"
                  >Dynamsoft Barcode Reader</a
                >
              </li>
              <li class="subTitle">Version Control</li>
              <li class="item pl15">
                <a
                  class=""
                  :href="
                    DYNAMSOFTURL + '/Products/version-control-source-control-sourceanywhere.aspx'
                  "
                  >Source Anywhere</a
                >
              </li>
              <li class="item pl15">
                <a
                  class=""
                  :href="
                    DYNAMSOFTURL +
                      '/Products/SourceAnywhere-Hosting-Version-Control-Source-Control.aspx'
                  "
                  >Source Anywhere Hosted</a
                >
              </li>
            </ul>
          </div>
          <div class="col-4 col-lg-2 ">
            <ul class="resource">
              <li class="title fontOswald">RESOURCES</li>
              <li class="item"><a class="" :href="DYNAMSOFTURL + '/blog'">Dynamsoft Blog</a></li>
              <li class="item"><a class="" href="http://www.codepool.biz/">Codepool Blog</a></li>
              <li class="item"><a class="" href="http://labs.dynamsoft.com/">Dynamsoft Labs</a></li>
              <li class="item">
                <a class="" :href="DYNAMSOFTURL + '/Company/Customers.aspx?Category=CaseStudies'"
                  >Case Studies</a
                >
              </li>
            </ul>
          </div>
          <div class="col-3 col-lg-2 col-xl-3">
            <ul class="company">
              <li class="title fontOswald">COMPANY</li>
              <li class="item">
                <a class="" :href="DYNAMSOFTURL + '/Company/AboutDynamsoft.aspx'">About Us</a>
              </li>
              <li class="item">
                <a class="" :href="DYNAMSOFTURL + '/Company/Careers.aspx'">Careers</a>
              </li>
              <li class="item"><a class="" :href="DYNAMSOFTURL + '/Company/news.aspx'">News</a></li>
              <li class="item">
                <a class="" :href="DYNAMSOFTURL + '/Company/Contact.aspx'">Contact Us</a>
              </li>
              <li class="item"><a :href="DYNAMSOFTURL + '/company/policies.aspx'">Policies</a></li>
            </ul>
          </div>
          <div class="col-12 col-lg-4">
            <div class="subscribeCnt hide-block-sm hide-block-md">
              <p class="mb20 fontWhite f18">Subscribe to our newsletter</p>
              <div class="SubscribeForm">
                <input
                  class="SubscribeInput"
                  v-model="SubscribeEmail"
                  placeholder="Email Address"
                />
                <button @click="SubscribeNews">Subscribe</button>
              </div>
              <div class="shareList">
                <span
                  ><a class="linkedin" href="http://www.linkedin.com/company/dynamsoft"></a
                ></span>
                <span><a class="facebook" href="https://www.facebook.com/Dynamsoft"></a></span>
                <span><a class="twitter" href="https://twitter.com/dynamsoft"></a></span>
                <span><a class="youtube" href="https://www.google.com/+Dynamsoft"></a></span>
                <span><a class="instagram" href="https://www.youtube.com/user/Dynamsoft"></a></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom hide-block-sm">
      <div class="container">
        <div class="row">
          <div class="col-12 clearfix">
            <router-link class="dynamsoftLogo fl" to="/"></router-link>
            <ul class="rightMenu">
              <li>© 2003–2020 Dynamsoft. All rights reserved.</li>
              <li class="hide-sm">
                <a class="fc9Link" :href="DYNAMSOFTURL + '/PrivacyStatement.aspx'"
                  >Privacy Statement</a
                >
              </li>
              <li class="hide-sm">
                <a class="fc9Link" :href="DYNAMSOFTURL + '/SiteMap.aspx'">Site Map</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- END PC-FOOTER -->
    <!-- START MOBILE-FOOTER -->
    <div class="mobile-footer-top show-block-sm">
      <div class="container">
        <div class="row">
          <p class="col-12 tc"><router-link class="dynamsoftLogo" to="/"></router-link></p>
          <ul class="col-12 mobile-links tc">
            <li><a class="fontOswald orangeLink textUpperCase" href="/">home</a></li>
            <li>
              <a
                class="fontOswald orangeLink textUpperCase"
                :href="DYNAMSOFTURL + '/Company/Careers.aspx'"
                >Careers</a
              >
            </li>
            <li>
              <a
                class="fontOswald orangeLink textUpperCase"
                :href="DYNAMSOFTURL + '/Company/Contact.aspx'"
                >Contact</a
              >
            </li>
            <li>
              <a
                class="fontOswald orangeLink textUpperCase"
                :href="DYNAMSOFTURL + '/company/policies.aspx'"
                >Policies</a
              >
            </li>
          </ul>
          <div class="shareList col-12 tc">
            <span><a class="linkedin" href="http://www.linkedin.com/company/dynamsoft"></a></span>
            <span><a class="facebook" href="https://www.facebook.com/Dynamsoft"></a></span>
            <span><a class="twitter" href="https://twitter.com/dynamsoft"></a></span>
            <span><a class="youtube" href="https://www.google.com/+Dynamsoft"></a></span>
            <span><a class="instagram" href="https://www.youtube.com/user/Dynamsoft"></a></span>
          </div>
        </div>
      </div>
    </div>
    <div class="mobile-footer-bottom show-block-sm">
      <div class="container">
        <div class="row">
          <p class="tc col-12 fc9">© 2003–2020 Dynamsoft. All rights reserved.</p>
          <ul class="tc col-12">
            <li>
              <a class="fc9Link" :href="DYNAMSOFTURL + '/PrivacyStatement.aspx'"
                >Privacy Statement</a
              >
            </li>
            <li><a class="fc9Link" :href="DYNAMSOFTURL + '/SiteMap.aspx'">Site Map</a></li>
          </ul>
        </div>
      </div>
    </div>
    <!-- END MOBILE-FOOTER -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      SubscribeEmail: '',
    }
  },
  methods: {
    SubscribeNews() {},
  },
}
</script>

<style lang="scss">
.dynamsoft-footer .item a {
  color: #ffffff;
}
.dynamsoft-footer .item a:hover,
.dynamsoft-footer .item a:active {
  color: #fe8e14;
}
@media (max-width: 991px) {
  .dynamsoft-footer .footer-top {
    min-height: 44rem;
    height: auto;
  }
  .dynamsoft-footer .footer-top .subscribeCnt .shareList {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
  .dynamsoft-footer .footer-bottom {
    min-height: 10.5rem;
  }
  .dynamsoft-footer .footer-bottom .rightMenu {
    float: none;
  }
  .dynamsoft-footer .footer-bottom .rightMenu li {
    margin-left: 3rem;
  }
}
</style>
