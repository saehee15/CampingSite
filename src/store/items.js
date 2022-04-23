export default {
  // module!
  namespaced: true,
  // 취급해야 하는 데이터
  status: () => ({
    items: [],
  }),
  // computed!
  getters: "",
  // methods!
  mutationds: "",
  actions: {
    async fetchItems() {
      const result = await import(`~/public/data/items.json`);
      const { tent, stove } = result.default;
      this.items = { tent, stove };
      console.log(tent);
    },
  },
};
