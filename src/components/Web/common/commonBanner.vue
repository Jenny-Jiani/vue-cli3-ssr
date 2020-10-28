<template>
  <div class="basicBanner">
    <div class="container" v-if="bannerContent">
      <div class="row">
        <div class="col-12" :class="{ 'xxl-pl100': !productId }" style="position: relative;">
          <div class="logo mt80 hide-block-sm">
            <i v-if="productId == 1000001" class="dwt-white-logo"></i>
            <i v-if="productId == 1000002" class="dnt-white-logo"></i>
          </div>
          <p
            class="textUpperCase fontOswald f20 mb0 mt30"
            :class="{ mt80: !productId, 'sm-mt40': !productId }"
          >
            {{ bannerContent.bannerTypeName }}
          </p>
          <h2
            class="textUpperCase fontOswaldLight mt20"
            v-html="bannerContent.bannerBriefInfo"
          ></h2>
          <div class="btns mt40">
            <a
              v-if="bannerContent.hasTryDemoBtn"
              class="d-btn orange-btn textUpperCase fontOswald"
              :href="bannerContent.tryDemoLink"
              >TRY ONLINE DEMO</a
            >
            <a
              v-if="bannerContent.hasDownloadBtn"
              class="d-btn border-btn textUpperCase fontOswald"
              :href="bannerContent.downloadLink"
              >download 30-day free trial</a
            >
            <a
              v-if="bannerContent.hasSampleCode"
              class="d-btn orange-btn textUpperCase fontOswald"
              :href="bannerContent.sampleCodeLink"
              >Get Sample Code</a
            >
          </div>
          <div class="bannerImg"><i class="artwork"></i></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    ContentJSON: {
      type: String,
    },
    ProductId: {
      type: String,
    },
  },
  data() {
    return {
      bannerContent: null,
      productId: null,
    }
  },
  created() {
    this.bannerContent = JSON.parse(this.ContentJSON)
    this.productId = Number(this.ProductId)
  },
}
</script>

<style lang="scss"></style>
