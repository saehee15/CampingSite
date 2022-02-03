<template>
  <div class="section">
    <Items />
    <Order />
  </div>
</template>
<script>
import Items from "~/components/Items";
import Order from "~/components/Order";
export default {
  components: {
    Items,
    Order,
  },
};
</script>
<style lang="scss" scoped>
.section {
  display: flex;
  justify-content: center;
  margin: 30px 0px 30px 0;
}
</style>
