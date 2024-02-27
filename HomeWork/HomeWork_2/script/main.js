// Вы разрабатываете приложение для отображения и сортировки списка товаров.
// У вас есть массив объектов products, где каждый объект представляет товар
// с его названием и ценой. Вам необходимо отобразить список товаров и предоставить
//  пользователю возможность сортировать товары по цене (по возрастанию и по убыванию).

const app = {
  data() {
    return {
      products: [
        {
          id: 1,
          title: "Товар 1",
          price: 2500,
        },
        {
          id: 2,
          title: "Товар 2",
          price: 5000,
        },
        {
          id: 3,
          title: "Товар 3",
          price: 400,
        },
        {
          id: 4,
          title: "Товар 4",
          price: 1000,
        },
        {
          id: 5,
          title: "Товар 5",
          price: 25000,
        },
        {
          id: 6,
          title: "Товар 6",
          price: 200,
        },
      ],
    };
  },
  methods: {
    ascending() {
      this.products = this.products.sort((a, b) => a.price - b.price);
    },
    descending() {
      this.products = this.products.sort((a, b) => b.price - a.price);
    },
  },
};

Vue.createApp(app).mount("#app");
