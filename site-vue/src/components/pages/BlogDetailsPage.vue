<template>
<PageHeader />
<main>
  <div class="banner"></div>

<section class="article-details">
  <div class="center">
    <div class="article-details__wrapper">
      <div class="article-details__block">

        <h2 class="article-details__title">{{title}}</h2>

        <div class="article-details__image-wrapper">
          <img class="article-details__image" :src="img" alt="photo" width="799">
        </div>

        <div class="article-details__date-wrapper">
          <span class="article-details__date-text">{{date}}</span>
          <span class="article-details__date-tags">Interior / Home / Decore</span>
        </div>

        <div>
          <p class="article-details__text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
            turpmaximus.posuere in.Contrary to popular
            belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered
            alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.
          </p>
          <p class="article-details__text article-details__text--margin40"> Embarrassing hidden in the middle of
            text. All the Lorem Ipsum
            generators on the Internet tend to
            repeat predefined chunks as necessary.</p>
        </div>

        <div class="tagline">
          <div class="tagline__wrapper">
            <img class="tagline__image" src="@/assets/images/blog-details/quotes.png" alt="quotes">
            <p class="tagline__text">The details are not the details.
              They make the design.</p>
          </div>
        </div>

        <div class="article-details__design-sprints">
          <h3 class="article-details__title article-details__title--style">Design sprints are great</h3>
          <p class="article-details__text article-details__text--design-sprints">Lorem ipsum dolor sit amet,
            adipiscing Aliquam eu sem vitae
            turpmaximus.posuere in.Contrary to popular
            belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.
          </p>
          <ul class="article-details__design-sprints-list">
            <li class="article-details__design-sprints-item">Contrary to popular belief.There are many variations of
              passages of Lorem
              Ipsum available, but the
              majority have suffered.</li>
            <li class="article-details__design-sprints-item">Contrary to popular belief.There are many variations of
              passages of Lorem
              Ipsum available, but the
              majority have suffered.</li>
            <li class="article-details__design-sprints-item">Contrary to popular belief.There are many variations of
              passages of Lorem
              Ipsum available, but the
              majority have suffered.</li>
          </ul>
        </div>

        <div class="article-details__desc">
          <div class="article-details__image-wrapper article-details__image-wrapper--design-sprints">
            <img class="article-details__image" src="@/assets/images/blog-details/img2.jpg" alt="photo" width="799">
          </div>
          <p class="article-details__text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
            turpmaximus.posuere in.Contrary to popular
            belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.
          </p>
        </div>
      </div>
      <div class="tags">
        <h3 class="tags__title">Tags</h3>
        <ul class="tags__list">
          <li class="tags__item" @click="tagClick($event)" v-for="tag in tags" :key="tag.id"
            :class="'kitchen' === tag.text.toLowerCase() ? 'tags__item--active' : '' ">
            {{tag.text}}
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>
</main>
<PageFooter />
</template>

<script>
import PageFooter from '../PageFooter.vue';
import PageHeader from '../PageHeader.vue';

  export default {
    components: { PageHeader, PageFooter },
    data() {
      return {
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
          imgSrc: require("@/assets/images/blog-details/img1.jpg"),
        },
        {
          id: "Bedroom",
          title1: "Let’s get solution for building construction work2",
          date: "2 December,2022",
          imgSrc: require("@/assets/images/blog-details/img2.jpg"),
        },
        {
          id: "Building",
          title1: "Let’s get solution for building construction work3",
          date: "16 December,2022",
          imgSrc: require("@/assets/images/news-article1.jpg"),
        },
        {
          id: "Architecture",
          title1: "Let’s get solution for building construction work4",
          date: "9 December,2022",
          imgSrc: require("@/assets/images/news-article2.jpg"),
        },
        {
          id: "Kitchen Planning",
          title1: "Let’s get solution for building construction work5",
          date: "5 December,2022",
          imgSrc: require("@/assets/images/news-article3.jpg"),
        },
        {
          id: "Bedroom",
          title1: "Let’s get solution for building construction work6",
          date: "28 December,2022",
          imgSrc: require("@/assets/images/blog/news-article4.jpg"),
        },
      ],
      date: "26 December,2022",
      title: "Let’s get solution for building construction work",
      img: require("@/assets/images/blog-details/img1.jpg"),
      }
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
}

</script>

<style lang="scss" scoped>
@import '@/assets/style/scss/vars.scss';

.page-header {
  padding: 45px 0;
}

.banner {
  min-height: 351px;
  max-width: 1920px;
  width: 100%;
  margin: 0 auto 200px;
  background: url(@/assets/images/blog-details/banner-bg.jpg) no-repeat center /
    cover;
}

.article-details {
  padding: 0 0 63px;
  &__wrapper {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: row;
    gap: 30px;
  }

  &__block {
    max-width: 804px;
    width: 100%;
  }

  &__title {
    text-transform: capitalize;
    font-family: "DM Serif Display", sans-serif;
    font-weight: 400;
    font-size: 50px;
    line-height: 125%;
    letter-spacing: 0.02em;
    color: $text-color2;
    margin: 0 0 21px;

    &--style {
      text-transform: none;
    }
  }

  &__image-wrapper {
    margin: 0 0 43px;

    &--design-sprints {
      margin: 0 0 35px;
    }
  }

  &__image {
    display: block;
    max-width: 799px;
    width: 100%;
    border-radius: 50px;
  }

  &__date-wrapper {
    padding: 0 70px 0 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    margin: 0 0 43px;

    span {
      font-size: 16px;
      letter-spacing: 0.01em;
      text-transform: capitalize;
    }
  }

  &__text {
    letter-spacing: 0.01em;
    margin: 0 0 33px;

    &--margin40 {
      margin: 0 0 40px;
    }

    &--design-sprints {
      margin: 0 0 24px;
    }
  }

  &__design-sprints-list {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 32px;
    margin: 0 0 44px;
  }
  &__design-sprints-item {
    letter-spacing: 0.01em;
    position: relative;
    padding: 0 0 0 20px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;

    &:nth-child(1)::before {
      content: "1";
    }
    &:nth-child(2)::before {
      content: "2";
    }
    &:nth-child(3)::before {
      content: "3";
    }

    &::before {
      position: absolute;
      left: 0;
      font-family: "DM Serif Display", sans-serif;
      font-weight: 400;
      font-size: 20px;
      line-height: 125%;
      letter-spacing: 0.02em;
      color: #cda274;
    }
  }
}

.tags {
  &__title {
    margin: 0 0 24px;
    font-family: "DM Serif Display", sans-serif;
    font-weight: 400;
    font-size: 25px;
    line-height: 125%;
    letter-spacing: 0.02em;
    color: $text-color2;
  }
  &__list {
    max-width: 345px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 10px;
  }

  &__item {
    padding: 9px 30px;
    border-radius: 10px;
    background: #f4f0ec;
    font-size: 18px;
    line-height: 125%;
    letter-spacing: 0.02em;
    color: $text-color2;
    cursor: pointer;

    &--active {
      background: $text-color2;
      color: #fff;
    }
  }
}

.tagline {
  background: #f4f0ec;
  border-radius: 50px;
  margin: 0 0 27px;

  &__wrapper {
    padding: 59px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  &__image {
    padding: 25px 0 0;
    margin: 0 0 5px;
  }
  &__text {
    max-width: 355px;
    width: 100%;
    font-family: "DM Serif Display", sans-serif;
    font-style: italic;
    font-weight: 400;
    font-size: 25px;
    line-height: 125%;
    letter-spacing: 0.02em;
    text-align: center;
    color: #cda274;
  }
}
</style>