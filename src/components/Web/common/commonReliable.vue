<template>
  <div class="basicReliable container">
    <div class="row">
      <div class="col-12 col-md-12 tc reliableDisc">
        <h2 class="textUpperCase fontOswaldLight">{{ reliableContent.reliableTitle }}</h2>
        <p class="f24" v-html="reliableContent.reliableDiscription"></p>
      </div>
    </div>
    <div class="row functionList">
      <div
        class="col-12 col-sm-12 col-md-6 col-lg-4 mobile-div-clear-padding"
        v-for="(func, index) in reliableContent.functionList"
        :key="index"
      >
        <router-link :to="func.url">
          <div class="functionBox mobile-box-clear-padding card-hover card-trans">
            <span class="icon"><i :class="func.icon"></i></span>
            <h3 class="textUpperCase fontOswald">{{ func.title }}</h3>
            <p class="mt30" style="color:black;" v-html="func.description"></p>
            <span
              v-if="func.hasLearnMore"
              style="color:#FE8E14;"
              class="orangeLink fontOswald textUpperCase mt30 f24"
              >Learn More ></span
            >
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    ReliableJSON: {
      type: String,
    },
  },
  data() {
    return {
      reliableContent: null,
    }
  },
  created() {
    this.reliableContent = JSON.parse(this.ReliableJSON)
  },
}
</script>

<style lang="scss"></style>
