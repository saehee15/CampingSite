<template>
  <div class="items">
    <div class="card" style="width: 20rem">
      <img src="../assets/img/tent/tent1.png" class="card-img-top" alt="tent" />
      <div class="card-body">
        <div class="text">
          <h5 class="card-title">{{ this.name }}</h5>
          <p class="card-text">{{ this.merit }}</p>
        </div>
        <div class="footer">
          <p class="price">{{ this.price }}</p>
          <button type="button" class="btn btn-outline-success">
            <span class="plus">+</span>
          </button>
        </div>
      </div>
    </div>
    <div class="card" style="width: 20rem">
      <img src="../assets/img/tent/tent1.png" class="card-img-top" alt="tent" />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <p class="price">￦249,000</p>
        <a href="#" class="btn btn-outline-success">Go somewhere</a>
      </div>
    </div>
    <div class="card" style="width: 20rem">
      <img src="../assets/img/tent/tent1.png" class="card-img-top" alt="tent" />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <p class="price">￦249,000</p>
        <a href="#" class="btn btn-outline-success">Go somewhere</a>
      </div>
    </div>
    <div class="card" style="width: 20rem">
      <img src="../assets/img/tent/tent1.png" class="card-img-top" alt="tent" />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <p class="price">￦249,000</p>
        <a href="#" class="btn btn-outline-success">Go somewhere</a>
      </div>
    </div>
  </div>
</template>
<script>
import products from "~/assets/data/products.json";
const data = products;
export default {
  data() {
    return [
      (this.name = data.name),
      (this.price = data.price),
      (this.merit = data.merit),
    ];
  },
};
</script>
<style lang="scss" scoped>
.items {
  display: flex;
  align-content: center;
  justify-content: center;

  .card {
    margin: 0 10px 0 10px;
  }
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
