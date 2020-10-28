<template>
  <div id="Web">
    <WebHead></WebHead>
    <div>
      <router-view />
    </div>
    <WebFooter></WebFooter>
  </div>
</template>

<script>
import WebHead from '../../components/Web/Shares/Head.vue'
import WebFooter from '../../components/Web/Shares/Footer.vue'

export default {
  components: {
    WebHead,
    WebFooter,
  },
}
</script>

<style lang="scss">
@import '../../assets/Web/css/site_basic.css';
@import '../../assets/Web/css/header_bs.css';
</style>
