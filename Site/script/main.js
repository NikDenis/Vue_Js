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
      tags: [
        {
          id: 1,
          text: "Kitchen",
        },
        {
          id: 2,
          text: "Bedroom",
        },
        {
          id: 3,
          text: "Building",
        },
        {
          id: 4,
          text: "Architecture",
        },
        {
          id: 5,
          text: "Kitchen Planning",
        },
        {
          id: 6,
          text: "Bedroom",
        },
      ],
      articleDetails: [
        {
          id: "Kitchen",
          title1: "Let’s get solution for building construction work",
          date: "26 December,2022",
          imgSrc: "./images/blog-details/img1.jpg",
        },
        {
          id: "Bedroom",
          title1: "Let’s get solution for building construction work2",
          date: "2 December,2022",
          imgSrc: "./images/blog-details/img2.jpg",
        },
        {
          id: "Building",
          title1: "Let’s get solution for building construction work3",
          date: "16 December,2022",
          imgSrc: "./images/news-article1.jpg",
        },
        {
          id: "Architecture",
          title1: "Let’s get solution for building construction work4",
          date: "9 December,2022",
          imgSrc: "./images/news-article2.jpg",
        },
        {
          id: "Kitchen Planning",
          title1: "Let’s get solution for building construction work5",
          date: "5 December,2022",
          imgSrc: "./images/news-article3.jpg",
        },
        {
          id: "Bedroom",
          title1: "Let’s get solution for building construction work6",
          date: "28 December,2022",
          imgSrc: "./images/blog/news-article4.jpg",
        },
      ],
      date: "26 December,2022",
      title: "Let’s get solution for building construction work",
      img: "./images/blog-details/img1.jpg",
    };
  },
  methods: {
    tagClick(tag) {
      const currentTag = tag.target;
      const parent = currentTag.parentElement;
      const children = parent.children;
      for (let i = 0; i < children.length; i++) {
        if (children[i].classList.contains("tags__item--active")) {
          children[i].classList.remove("tags__item--active");
        }
      }
      currentTag.classList.add("tags__item--active");
      this.articleDetails.forEach((elem) => {
        if (currentTag.textContent.toLowerCase() === elem.id.toLowerCase()) {
          this.title = elem.title1;
          this.date = elem.date;
          this.img = elem.imgSrc;
        }
      });
    },
  },
};

Vue.createApp(app).mount("#app");
