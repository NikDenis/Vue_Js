const app = {
  data() {
    return {
      newsArticles: [
        {
          id: 1,
          imgSrc: "./images/news-article1.jpg",
          tag: "Kitchan design",
          title: "Let’s get solution for building construction work",
          date: "26 December,2022 ",
        },
        {
          id: 2,
          imgSrc: "./images/news-article2.jpg",
          tag: "Living design",
          title: "Low cost latest invented interior designing ideas.",
          date: "22 December,2022 ",
        },
        {
          id: 3,
          imgSrc: "./images/news-article3.jpg",
          tag: "Interior design",
          title: "Best for any office & business interior solution",
          date: "25 December,2022 ",
        },
        {
          id: 4,
          imgSrc: "./images/blog/news-article4.jpg",
          tag: "Kitchan design",
          title: "Let’s get solution for building construction work",
          date: "26 December,2022 ",
        },
        {
          id: 5,
          imgSrc: "./images/blog/news-article5.jpg",
          tag: "Living design",
          title: "Low cost latest invented interior designing ideas.",
          date: "22 December,2022 ",
        },
        {
          id: 6,
          imgSrc: "./images/blog/news-article6.jpg",
          tag: "Interior design",
          title: "Best for any office & business interior solution",
          date: "25 December,2022 ",
        },
      ],
    };
  },
};

Vue.createApp(app).mount("#app");
