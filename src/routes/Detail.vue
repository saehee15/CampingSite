<template>
  <div class="detail">
    <h1>{{ $route.params.id }}</h1>
    <div class="header">
      <img src="../assets/img/tent/tent1.png" class="card-img-top" alt="tent" />
      <div class="add">
        <h2 :model="name"></h2>
        <div class="content1">
          <div class="row">
            <div class="col-6">판매가</div>
            <div class="col-6">₩245,000</div>
          </div>
          <div class="row">
            <div class="col-6">배송비</div>
            <div class="col-6">₩2,500</div>
          </div>
          <div class="row">
            <div class="col-6">제조사</div>
            <div class="col-6">노르디스크</div>
          </div>
          <div class="row">
            <div class="col-6">원산지</div>
            <div class="col-6">중국</div>
          </div>
          <div class="row">
            <div class="col-6">원산지</div>
            <div class="col-6">중국</div>
          </div>
          <div class="row">
            <div class="col-6">원산지</div>
            <div class="col-6">중국</div>
          </div>
          <div class="row">
            <div class="col-6">원산지</div>
            <div class="col-6">중국</div>
          </div>
        </div>
        <div class="footer">
          <div type="button" class="btn btn-success">BUY NOW</div>
          <div class="second">
            <div type="button" class="btn btn-outline-secondary">CART</div>
            <div type="button" class="btn btn-outline-secondary">WISH LIST</div>
          </div>
        </div>
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
      name: "",
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
      //todo 파라미터랑 같은 넘버로 매칭하기
      const tentItems = Object.values(tent).filter((tent) => tent.id === 1);
      const name = Object.values(tentItems);
      console.log(name);
      for (var key in name) {
        console.log(name[key].price);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.detail {
  margin: 10px 100px 10px 100px;
}
.header {
  margin: 10px 20px 10px 20px;
  border: 1px solid black;
  display: flex;
  position: relative;

  img {
    width: 45%;
  }
  .add {
    width: 55%;
    text-align: center;
    margin: 10px 20px 10px 20px;
  }
  .content1 {
    margin-top: 30px;
    width: 100%;
    height: auto;
  }
  .row {
    margin-bottom: 10px;
    width: 100%;
  }
  .btn-success {
    width: 100%;
  }
  .footer {
    margin-top: 30px;
    margin-bottom: 0px;
  }
  .second {
    margin-top: 5px;
    display: flex;
    justify-content: center;
    .btn-outline-secondary {
      width: calc(50% - 5px);
      &:first-child {
        margin-right: 10px;
      }
    }
  }
}
</style>
