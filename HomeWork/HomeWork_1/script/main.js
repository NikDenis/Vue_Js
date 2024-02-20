const app = {
  data() {
    return {
      textButton: "Перевернуть",
      elements: [],
    };
  },
  methods: {
    textReverse() {
      this.textButton = this.textButton.split("").reverse().join("");
    },
    addElem() {
      this.elements.push("Новый элемент списка");
    },
    removeElem(index) {
      this.elements.splice(index, 1);
    },
  },
};

Vue.createApp(app).mount("#app");
