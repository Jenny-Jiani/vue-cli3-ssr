<template>
  <div class="container basicCustomers">
    <div class="row">
      <div class="col-12 customerSwiper">
        <!-- Mobile  -->
        <swiper ref="customerSwiper" class="show-block-md show-block-sm" :options="swiperOption">
          <swiper-slide v-for="(customer, index) in customerData" :key="index"
            ><i class="company-logo" :class="customer.logoClass"></i
          ></swiper-slide>
        </swiper>
        <div class="customerPrevArrow" @click="PrevSlide" slot="button-prev">
          <i class="arrow-left"></i>
        </div>
        <div class="customerNextArrow" @click="NextSlide" slot="button-next">
          <i class="arrow-right"></i>
        </div>
        <!-- End Mobile -->

        <!-- PC -->
        <ul class="customer-logos">
          <li v-for="(customer, index) in customerData" :key="index">
            <i class="company-logo" :class="customer.logoClass"></i>
          </li>
        </ul>
        <!-- End PC -->
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'

export default {
  props: {
    CustomerJSON: {
      type: String,
    },
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  directives: {
    swiper: directive,
  },
  data() {
    return {
      customerData: null,
      swiperOption: {
        slidesPerView: 'auto',
        spaceBetween: 30,
        breakpoints: {
          768: {
            spaceBetween: 60,
          },
        },
      },
    }
  },
  created() {
    this.customerData = JSON.parse(this.CustomerJSON)
  },
  methods: {
    PrevSlide() {
      let swiper = this.$refs.customerSwiper
      swiper.$swiper.slidePrev()
    },
    NextSlide() {
      let swiper = this.$refs.customerSwiper
      swiper.$swiper.slideNext()
    },
  },
}
</script>

<style lang="scss">
.basicCustomers .swiper-container {
  height: 50px;
}
.basicCustomers .swiper-slide {
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.basicCustomers .swiper-slide i.company-logo {
  opacity: 0.8;
}
.basicCustomers .customer-logos {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
@media (max-width: 991px) {
  .customer-logos {
    display: none !important;
  }
}
</style>
