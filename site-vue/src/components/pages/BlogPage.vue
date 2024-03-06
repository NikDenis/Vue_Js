<template>
 <PageHeader />
<main>
  <section class="promo">
    <div class="center">
      <div class="promo__wrapper">
        <div class="promo__banner">
          <div class="promo__text-wrapper">
            <h1 class="promo__title">Articles & news</h1>
            <p class="promo__text">Home / Blog</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="latest-post">
    <div class="center">
      <h2 class="page-title latest-post__title">Latest post</h2>
      <div class="latest-post__box">
        <div class="latest-post__image-wrapper">
          <img class="latest-post__image" src="@/assets/images/blog/latest-post-image.jpg" alt="Photo" width="569">
        </div>
        <div class="latest-post__description-wrapper">
          <div class="latest-post__description-block">
            <p class="latest-post__text-thumbnail">
              Low cost latest invented interior designing ideas
            </p>
            <p class="latest-post__text">
              Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere
              in.Contrary
              to popular belief.
            </p>
            <p class="latest-post__text">
              Lorem Ipsum is not simply random text. It has roots in a piece of classica.
            </p>
          </div>
          <div class="latest-post__date-wrapper">
            <span class="latest-post__date">25 December,2022 </span>
            <div class="icon latest-post__icon-arrow">
              <a class="icon-link" href="#"><span class="icon-image latest-post__icon-image"></span></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="news">
    <div class="center">
      <div class="news__description">
        <h2 class="page-title news__title">Articles & news</h2>
      </div>
      <div class="news__articles">
        <ul class="news__list-articles">
          <li class="news__item" v-for="article in newsArticles" :key="article.id">
            <article class="news__article">
              <div class="news__image-wrapper">
                <img class="news__image" :src="article.image" alt="Photo" width="340">
                <div class="news__image-tag">{{article.nameTag}}</div>
              </div>
              <div class="news__description-card">
                <p class="news__info">{{article.info}}</p>
                <div class="news__date-wrapper">
                  <span class="news__date">{{article.date}}</span>
                  <div class="icon news__icon-arrow">
                    <a class="icon-link" href="#"><span class="icon-image news__icon-image"></span></a>
                  </div>
                </div>
              </div>
            </article>
          </li>
        </ul>
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
        newsArticles: [
          { id: 1,
            image: require('@/assets/images/news-article1.jpg'),
            nameTag: 'Kitchan design',
            info: 'Let’s get solution for building construction work',
            date: '26 December,2022',
          },
          { id: 2,
            image: require('@/assets/images/news-article2.jpg'),
            nameTag: 'Living design',
            info: 'Low cost latest invented interior designing ideas.',
            date: '22 December,2022',
          },
          { id: 3,
            image: require('@/assets/images/news-article3.jpg'),
            nameTag: 'Interior Design',
            info: 'Best for any office & business interior solution',
            date: '25 December,2022',
          },
          { id: 4,
            image: require('@/assets/images/blog/news-article4.jpg'),
            nameTag: 'Interior Design',
            info: 'Best for any office & business interior solution',
            date: '25 December,2022',
          },
          { id: 5,
            image: require('@/assets/images/blog/news-article5.jpg'),
            nameTag: 'Interior Design',
            info: 'Best for any office & business interior solution',
            date: '25 December,2022',
          },
          { id: 6,
            image: require('@/assets/images/blog/news-article6.jpg'),
            nameTag: 'Interior Design',
            info: 'Best for any office & business interior solution',
            date: '25 December,2022',
          },
        ]
      }
    },
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/scss/vars.scss';

.header-blog {
  padding: 45px 0;
}

.footer-blog {
  padding-bottom: 116px;
}

.promo {
  max-width: 1920px;
  width: 100%;
  margin: 0 auto;
  background: url(@/assets/images/blog/bg-image.jpg) no-repeat center / cover;

  &__wrapper {
    min-height: 356px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
  }

  &__banner {
    max-width: 503px;
    width: 100%;
    padding: 41px 78px;
    background-color: #fff;
    border-radius: 37px 37px 0 0;
  }

  &__text-wrapper {
    text-align: center;
  }

  &__title {
    text-transform: capitalize;
    font-family: "DM Serif Display", sans-serif;
    font-weight: 400;
    font-size: 50px;
    line-height: 125%;
    color: $text-color2;
  }

  &__text {
    letter-spacing: 0.01em;
  }
}

.latest-post {
  padding: 200px 0 150px;
  &__title {
    text-align: left;
    margin-bottom: 27px;
  }

  &__box {
    padding: 22px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    gap: 65px;
    border: 1px solid #e7e7e7;
    border-radius: 62px;
  }

  &__image-wrapper {
    max-width: 569px;
    width: 100%;
  }

  &__image {
    display: block;
    max-width: 569px;
    width: 100%;
    border-radius: 50px;
  }

  &__description-wrapper {
    max-width: 489px;
    width: 100%;
  }

  &__text-thumbnail {
    text-transform: capitalize;
    font-family: "DM Serif Display", sans-serif;
    font-size: 25px;
    line-height: 125%;
    letter-spacing: 0.02em;
    color: $text-color2;
    margin-bottom: 22px;
  }

  &__text {
    letter-spacing: 0.01em;
    margin-bottom: 41px;

    &:nth-child(2) {
      margin-bottom: 32px;
    }
  }

  &__date-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__date {
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0.01em;
    text-transform: capitalize;
    color: #4d5053;
  }

  &__icon-arrow {
    width: 52px;
    height: 52px;
  }

  &__icon-image {
    width: 8px;
    height: 16px;
  }
}
.news {
  padding: 0 0 200px;

  &__description {
    margin: 0 0 30px;
  }

  &__title {
    text-align: left;
    margin: 0;
  }

  &__list-articles {
    column-gap: 27px;
    row-gap: 30px;
  }
}
</style>