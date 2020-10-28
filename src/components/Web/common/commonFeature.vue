<template>
  <div class="basicFeature container">
    <div class="row">
      <h2 class="col-12 textUpperCase fontOswald tc pb30">Featured content</h2>
      <div
        class="col-12 col-sm-12 col-lg-4 featureMain"
        v-for="(feature, index) in featureContent"
        :key="index"
      >
        <a :href="feature.url">
          <div class="featureBox">
            <div class="featureBoxTop">
              <i class="playBtn" v-if="feature.type == 'video'"></i>
              <span class="featureTag textUpperCase fontOswald">{{ feature.typeName }}</span>
            </div>
            <div class="featureBoxBottom">
              <p class="title textUpperCase fontOswald">{{ feature.title }}</p>
              <p class="cnt">{{ feature.content }}</p>
              <a
                class="fontOswald textUpperCase orangeLink pt40"
                target="_blank"
                :href="feature.url"
                >{{
                  feature.type == 'pdf'
                    ? 'Download the PDF'
                    : feature.type == 'video'
                    ? 'Play Video'
                    : 'Read More'
                }}
                ></a
              >
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    FeatureJSON: {
      type: String,
    },
  },
  data() {
    return {
      featureContent: null,
    }
  },
  created() {
    this.featureContent = JSON.parse(this.FeatureJSON)
  },
}
</script>

<style lang="scss">
.basicFeature .featureBoxBottom a {
  font-size: 20px;
}

@media (max-width: 1200px) {
  .basicFeature .featureBoxBottom a {
    font-size: 18px;
  }
}
</style>
