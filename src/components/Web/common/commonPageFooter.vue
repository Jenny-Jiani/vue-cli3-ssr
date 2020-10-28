<template>
  <div class="basicPageFooter bgOrange">
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-10 offset-lg-1 col-xxl-8 offset-xxl-2 tc">
          <h2 class="textUpperCase fontOswald">Ready to Take the Next Step?</h2>
          <p>
            We’re here to help at all stages of your application development. You can begin with our
            30-day free trial or contact our sales team if you’re ready to go, or with any
            questions.
          </p>
          <a
            v-if="productId == 1000001"
            class="d-btn textUpperCase fontOswald footerDownloadBtn"
            href="/dynamic-webtwain/webtwain-download"
            >Download 30-day free trial</a
          >
          <a
            v-if="productId == 1000002"
            class="d-btn textUpperCase fontOswald footerDownloadBtn"
            href="/dynamic-.net-twain/.net-twain-download"
            >Download 30-day free trial</a
          >
          <a
            class="d-btn textUpperCase fontOswald"
            href="https://www.dynamsoft.com/Company/Contact.aspx"
            >Contact Sales</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    ProductId: {
      type: String,
    },
  },
  data() {
    return {
      productId: null,
    }
  },
  created() {
    this.productId = Number(this.ProductId)
  },
}
</script>

<style lang="scss">
@media (max-width: 767px) {
  .basicPageFooter a {
    margin: 10px 0;
    display: block;
  }
}
</style>
