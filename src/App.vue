<template>
  <!-- todo -->
  <!-- items 뒤에 모든 문자 일치하여 items, Order 컴터넌트 뿌려주기 -->
  <Header v-if="$route.path !== '/'" />
  <div class="content" v-if="$route.path === '/items/stove'">
    <RouterView>
      <Items />
      <Order />
    </RouterView>
  </div>
  <div class="content" v-else>
    <RouterView />
  </div>

  <Footer class="footer" v-if="$route.path !== '/'" />
</template>

<script>
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
import Items from "./components/Items.vue";
import Order from "./components/Items.vue";
export default {
  components: {
    Header,
    Footer,
    Items,
    Order,
  },
};
</script>
<style lang="scss">
@import "~/scss/main.scss";
.content {
  height: 100%;
  padding-bottom: 100px;
}
</style>
