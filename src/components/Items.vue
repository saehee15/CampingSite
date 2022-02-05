<template>
  <div
    class="card"
    style="width: 20rem"
    v-for="(item, id) in items.tent"
    :key="id"
    @click="goToDetail()"
  >
    <img src="../assets/img/tent/tent1.png" class="card-img-top" alt="tent" />
    <div class="card-body">
      <h5 class="card-title">{{ item.name }}</h5>
      <p class="card-text">
        {{ item.merit }}
      </p>
      <div class="footer">
        <p class="price">{{ item.price }}</p>
        <button type="button" class="btn btn-outline-success">
          <span class="plus" @click="addItem">+</span>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: {
        tent: [],
        stove: [],
      },
    };
  },
  created() {
    this.fetchItems();
  },
  methods: {
    async fetchItems() {
      const result = await import(`~/public/data/items.json`);
      const { tent, stove } = result.default;
      this.items = { tent, stove };
      console.log(tent);
    },
    goToDetail() {},
    addItem() {},
  },
};
</script>
<style lang="scss" scoped>
.card {
  margin: 0 10px 0 10px;
  cursor: pointer;
}
.card-body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.card-title {
  margin-bottom: 20px;
}
.footer {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0;

  .plus {
    font-size: 1rem;
  }
}
</style>
