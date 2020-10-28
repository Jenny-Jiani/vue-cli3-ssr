<template>
  <div class="basicCompanyLine container">
    <div class="row">
      <div class="col-12">
        <img
          style="width: 100%"
          src="../../../assets/Web/images/icons/dwtCustomers.png"
          alt="Dynamsoft"
        />
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
  },
  data() {
    return {
      companyContent: null,
    }
  },
  created() {
    this.companyContent = JSON.parse(this.CompanyJSON)
  },
}
</script>

<style lang="scss"></style>
