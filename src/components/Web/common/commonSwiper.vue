<template>
  <div class="basicSwiper container">
    <div class="row">
      <div class="col-12 SwiperContent">
        <a-carousel arrows style="position: relative" autoplay>
          <div slot="prevArrow" class="custom-slick-arrow">
            <i class="arrow-left"></i>
          </div>
          <div slot="nextArrow" class="custom-slick-arrow">
            <i class="arrow-right"></i>
          </div>
          <div class="clearfix" v-for="(swiper, index) in swiperContent" :key="index">
            <div class="slide-right fr show-sm">
              <div :class="swiper.company"><i class="artwork"></i></div>
            </div>
            <div class="slide-left fl">
              <div class="personWords">
                <i class="preQuote"></i>{{ swiper.quote }}<i class="afterQuote"></i>
              </div>
              <p class="personName fontBold mt20">– {{ swiper.author }}</p>
            </div>
            <div class="slide-right fr hideOnMobile">
              <div :class="swiper.company"><i class="artwork"></i></div>
            </div>
          </div>
        </a-carousel>
        <div class="tc swiperBottomLink hide-block-sm">
          <a
            class="orangeLink f24 textUpperCase fontOswald"
            href="https://www.dynamsoft.com/Company/Customers.aspx?Category=CaseStudies"
            >Discover why our customers love us ></a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    SwiperJSON: {
      type: String,
    },
  },
  data() {
    return {
      swiperContent: null,
    }
  },
  created() {
    this.swiperContent = JSON.parse(this.SwiperJSON)
  },
}
</script>

<style lang="scss">
.basicSwiper .SwiperContent {
  padding: 0 10rem;
}
.basicSwiper .ant-carousel .slick-dots {
  display: none !important;
}
.basicSwiper .ant-carousel .slick-dots li button {
  background: transparent;
}
.basicSwiper .swiperBottomLink {
  margin-top: 80px;
}

@media (max-width: 1199px) {
  .basicSwiper .swiperBottomLink {
    margin-top: 50px;
  }
}
</style>
