<template>
  <div class="section">
    <Items />
    <Order :class="{ isAddItem: isAddItem }" />
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
  data() {
    return {
      isAddItem: true,
    };
  },
};
</script>
<style lang="scss" scoped>
.section {
  display: flex;
  justify-content: center;
  margin: 30px 50px 30px 50px;
}
</style>
