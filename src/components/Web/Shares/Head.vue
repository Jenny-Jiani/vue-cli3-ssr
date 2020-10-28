<template>
  <div id="dynamsoft-header">
    <div id="overall-header">
      <!--xs-header-->
      <div id="xsHeader" class="show-block-sm">
        <div id="xsMenu" class="container">
          <div class="row">
            <div class="col-12">
              <a class="ds-logo" :href="DYNAMSOFTURL"></a>
              <div class="xsMenuToggle" @click="xsMenuToggle">
                <div class="open"><span></span><span></span><span></span></div>
                <span class="close">&times;</span>
              </div>
            </div>
          </div>
        </div>
        <collapse>
          <div @click.stop="StateNotChange" v-show="showXSMenu" id="xsNav">
            <div id="xsSearch" class="headerSearch">
              <input type="text" @keyup.enter="onSearchFinish" placeholder="Search" />
              <span class="xsSearchSubmit headerSearchSubmit"></span>
            </div>
            <div style="line-height: 30px;">
              <span @click="xsNavToggle" class="xsNavToggle"
                >Products <i v-show="!xsNavProduct" class="fa fa-caret-down" aria-hidden="true"></i
                ><i v-show="xsNavProduct" class="fa fa-caret-up" aria-hidden="true"></i
              ></span>
            </div>
            <collapse>
              <ul v-show="xsNavProduct" class="products clearfix">
                <li>
                  <a :href="DYNAMSOFTURL + '/Products/WebTWAIN_Overview.aspx'">Dynamic Web TWAIN</a>
                </li>
                <li>
                  <a :href="DYNAMSOFTURL + '/Products/.Net-TWAIN-Scanner.aspx'"
                    >Dynamic .Net TWAIN</a
                  >
                </li>
                <li>
                  <a :href="DYNAMSOFTURL + '/Products/Dynamic-Barcode-Reader.aspx'"
                    >Dynamsoft Barcode Reader</a
                  >
                </li>
                <li>
                  <a :href="DYNAMSOFTURL + '/Products/dynamsoft-webcam-sdk.aspx'"
                    >Dynamsoft Camera SDK</a
                  >
                </li>
                <li><a :href="DYNAMSOFTURL + '/Products/Products.aspx'">See all</a></li>
              </ul>
            </collapse>
            <ul class="company clearfix">
              <li>
                <a
                  class="bluelink"
                  :href="DYNAMSOFTURL + '/Support/How-to-purchase-Dynamsoft-products.aspx'"
                  >Pricing</a
                >
              </li>
              <li>
                <a class="bluelink" :href="DYNAMSOFTURL + '/Downloads/Downloads.aspx'">Download</a>
              </li>
              <li>
                <a class="bluelink" :href="DYNAMSOFTURL + '/Support/Support.aspx'">Support</a>
              </li>
              <li>
                <a class="bluelink" :href="DYNAMSOFTURL + '/Company/AboutDynamsoft.aspx'"
                  >Company</a
                >
              </li>
            </ul>
          </div>
        </collapse>
      </div>

      <!--sm-header-->
      <div id="smHeader" class="show-block-md">
        <div id="smMenu">
          <div class="container">
            <a class="ds-logo" :href="DYNAMSOFTURL"> </a>
            <div class="smMenuToggle" @click.stop="mdMenuToggle">
              <div class="bars"><span></span> <span></span> <span></span></div>
              <span class="textMenu">MENU</span>
            </div>
          </div>
        </div>
      </div>

      <!--md&lg- header -->
      <div id="mdHeader" class="show-block-lg show-block-xl show-block-xxl">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <a class="ds-logo" :href="DYNAMSOFTURL"></a>
              <ul id="mdMenu" class="clearfix">
                <li class="products">
                  <a class="mdMenuToggle" @click.stop="mdMenuToggle" href="javascript:void(0);"
                    >Products <i class="fa fa-caret-down" aria-hidden="true"></i
                  ></a>
                </li>
                <li class="hide-lg">
                  <a :href="DYNAMSOFTURL + '/Downloads/Downloads.aspx'">Download</a>
                </li>
                <li class="hide-lg">
                  <a :href="DYNAMSOFTURL + '/Support/How-to-purchase-Dynamsoft-products.aspx'"
                    >Buy</a
                  >
                </li>
                <li class="hide-lg">
                  <a :href="DYNAMSOFTURL + '/Support/Support.aspx'">Support</a>
                </li>
                <li><a :href="DYNAMSOFTURL + '/Company/AboutDynamsoft.aspx'">Company</a></li>
                <div id="cp-header">
                  <div id="CPHeader-Container">
                    <ul id="action-nav">
                      <li class="action-signin">
                        <div class="header-visitor" v-if="!userId">
                          <a class="fr" href="javascript:void(0)" @click="goToLogin()">
                            <img
                              src="https://www.dynamsoft.com/assets/img-icon/icon-user-16x16.png"
                              alt="Sign In"
                            />Sign In</a
                          >
                        </div>
                        <div class="header-signin" v-else>
                          <div class="userbox pr fr">
                            <div @click.stop="onLoginMenuChange" class="usericon"></div>
                            <label
                              @click.stop="onLoginMenuChange"
                              class="userName"
                              id="lblUserName"
                              >{{ userName }}</label
                            >
                            <div @click.stop="onLoginMenuChange" class="fl">
                              &nbsp;<i class="fa fa-caret-down f16"></i>
                            </div>
                            <collapse>
                              <div
                                @click.stop="StateNotChange"
                                v-show="showLoginMenu"
                                class="popup userbox-more fr pa"
                              >
                                <div class="arrow-up"></div>
                                <ul>
                                  <li><a :href="DYNAMSOFTURL + '/customer'">Customer Portal</a></li>
                                  <li v-if="role == 1 || role == 4">
                                    <a :href="DYNAMSOFTURL + '/sales'">Sales Portal</a>
                                  </li>
                                  <li><a href="javascript:void(0)" @click="logOut">Logout</a></li>
                                </ul>
                              </div>
                            </collapse>
                          </div>
                        </div>
                      </li>
                      <li class="action-search">
                        <div class="toggle-search"><span class="icon-search"></span>Search</div>
                        <input
                          id="txtSearch"
                          @keyup.enter="onSearchFinish"
                          class="search"
                          type="text"
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--subMenu-->
    <collapse>
      <div id="subMenu" @click.stop="StateNotChange" v-show="showPCMenu" class="clearfix">
        <ul id="smNav" class="clearfix show-block-md">
          <li>
            <a href="javascript:void(0)"
              >Products <i class="fa fa-caret-down" aria-hidden="true"></i
            ></a>
          </li>
          <li>
            <a
              :href="
                DYNAMSOFTURL +
                  '/Support/How-to-purchase-Dynamsoft-products.aspx?urlsource=navigation'
              "
              >Pricing</a
            >
          </li>
          <li>
            <a :href="DYNAMSOFTURL + '/Downloads/Downloads.aspx?urlsource=navigation'">Download</a>
          </li>
          <li>
            <a :href="DYNAMSOFTURL + '/Support/Support.aspx?urlsource=navigation'">Support</a>
          </li>
          <li>
            <a :href="DYNAMSOFTURL + '/Company/AboutDynamsoft.aspx?urlsource=navigation'"
              >Company</a
            >
          </li>
        </ul>
        <div class="subMenuContent">
          <div class="row proPanel">
            <div class="col-lg-4 pro">
              <a :href="DYNAMSOFTURL + '/Products/WebTWAIN_Overview.aspx?urlsource=navigation'"
                ><i class="logo"
                  ><img
                    class="img-responsive"
                    src="https://www.dynamsoft.com/assets/img-icon/icon-dwt.svg"
                    alt="Dynamic Web TWAIN"/></i
                >Dynamic Web TWAIN</a
              >
              <p class="intro">Cross-browser document scanning SDK for web application;</p>
              <p class="intro">Supports browsers on Windows, Linux, macOS and Mobile</p>
            </div>
            <div class="col-lg-4 pro">
              <a :href="DYNAMSOFTURL + '/Products/.Net-TWAIN-Scanner.aspx?urlsource=navigation'"
                ><i class="logo"
                  ><img
                    class="img-responsive"
                    src="https://www.dynamsoft.com/assets/img-icon/icon-dnt.svg"
                    alt="Dynamic .NET TWAIN"/></i
                >Dynamic .NET TWAIN</a
              >
              <p class="intro">Document scanning SDK for .NET desktop applications</p>
            </div>
            <div class="col-lg-4 pro">
              <a :href="DYNAMSOFTURL + '/Products/Dynamic-Barcode-Reader.aspx?urlsource=navigation'"
                ><i class="logo"
                  ><img
                    class="img-responsive"
                    src="https://www.dynamsoft.com/assets/img-icon/icon-dbr.svg"
                    alt="Dynamsoft Barcode Reader"/></i
                >Dynamsoft Barcode Reader</a
              >
              <p class="intro">
                <a
                  class="bluelink"
                  :href="
                    DYNAMSOFTURL + '/Products/barcode-cpp-api-for-windows.aspx?urlsource=navigation'
                  "
                  >Windows</a
                >
                and
                <a
                  class="bluelink"
                  :href="
                    DYNAMSOFTURL + '/Products/barcode-reader-c-api-linux.aspx?urlsource=navigation'
                  "
                  >Linux</a
                >
                editions
              </p>
              <p class="intro">
                <a
                  class="bluelink"
                  :href="
                    DYNAMSOFTURL + '/Products/barcode-scanner-sdk-ios.aspx?urlsource=navigation'
                  "
                  >iOS</a
                >
                and
                <a
                  class="bluelink"
                  :href="
                    DYNAMSOFTURL + '/Products/barcode-scanner-sdk-android.aspx?urlsource=navigation'
                  "
                  >Android</a
                >
                editions
              </p>
              <p class="intro">
                <a
                  class="bluelink"
                  :href="
                    DYNAMSOFTURL +
                      '/Products/barcode-recognition-javascript.aspx?urlsource=navigation'
                  "
                  >JavaScript</a
                >
                editions for web
              </p>
            </div>
          </div>
          <div class="ct-bt">
            <a
              class="bluelink"
              :href="DYNAMSOFTURL + '/Products/Products.aspx?urlsource=navigation'"
              >View All Products &rsaquo;</a
            >
          </div>
        </div>
      </div>
    </collapse>
  </div>
</template>

<script>
import { Util } from '@/common/util'
import { BASEURI, DYNAMSOFTURL, WebBASEURI } from '@/common/api-config'
import authentication from '@/common/authentication'
import collapse from '@/common/collapse'

export default {
  components: {
    collapse,
  },
  data() {
    return {
      showPCMenu: false,
      showLoginMenu: false,
      userId: null,
      role: null,
      userName: null,
      xsNavProduct: true,
      showXSMenu: false,
    }
  },
  computed: {
    visibleMainSubMenu() {
      return this.$store.state.web.visibleMainSubMenu
    },
    visibleSubMenu() {
      return this.$store.state.web.visibleSubMenu
    },
  },
  mounted() {
    this.userId = Util.getCookie('DynamsoftUser') == null ? '' : Util.getCookie('DynamsoftUser')
    this.role =
      Util.getCookie('DynamsoftRole') == null ? '' : parseInt(Util.getCookie('DynamsoftRole'))
    this.userName = Util.getCookie('DynamsoftUserName')
    document.addEventListener('click', () => {
      if (this.showPCMenu === true) {
        this.showPCMenu = false
      }
      if (this.showLoginMenu === true) {
        this.showLoginMenu = false
      }
    })
  },
  methods: {
    mdMenuToggle() {
      this.showPCMenu = !this.showPCMenu
    },
    xsMenuToggle() {
      this.showXSMenu = !this.showXSMenu
    },
    StateNotChange() {},
    onLoginMenuChange() {
      this.showLoginMenu = !this.showLoginMenu
    },
    goToLogin() {
      window.location.href = BASEURI + '/Login/Login?callback=' + window.location.href
    },
    logOut() {
      authentication.logOut()
    },
    xsNavToggle() {
      this.xsNavProduct = !this.xsNavProduct
    },
    onSearchFinish(e) {
      window.location.href = DYNAMSOFTURL + '/Search.aspx?q=' + e.target.value
    },
  },
}
</script>

<style lang="scss">
@media (min-width: 992px) {
  #dynamsoft-header #overall-header .container {
    max-width: calc(100% - 40px);
  }
}
@media (min-width: 1200px) {
  #dynamsoft-header #overall-header .container {
    max-width: calc(100% - 100px);
  }
}
@media (min-width: 1200px) and (max-width: 1230px) {
  #dynamsoft-header #overall-header #mdMenu li > a {
    padding: 0 20px;
  }
}
@media (min-width: 1680px) {
  #dynamsoft-header #overall-header .container {
    max-width: 1630px;
  }
}
</style>
