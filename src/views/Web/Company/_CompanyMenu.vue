<template>
  <div id="Company" class="main">
    <div id="CompanyMenu" class="productMenu " :class="{ fixedMenu: isScrollTop }">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <ul class="menuList">
              <li class="item textUpperCase">
                <router-link to="/company/about">About Us</router-link>
              </li>
              <li class="item textUpperCase">
                <router-link to="/company/contact">Contact Us</router-link>
              </li>
              <li class="item textUpperCase">
                <router-link to="/company/careers">Careers</router-link>
              </li>
              <li class="item textUpperCase"><router-link to="/company/news">News</router-link></li>
              <li class="item textUpperCase"><a href="https://www.dynamsoft.com/blog">Blog</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="content" :class="{ mt100: isScrollTop }">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isScrollTop: false,
      isSubMenuShow: false,
    }
  },
}
</script>

<style lang="scss"></style>
