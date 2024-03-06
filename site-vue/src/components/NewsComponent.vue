<template>
    <section class="news">
      <div class="center">
        <div class="news__description">
          <h2 class="page-title news__title">Articles & news</h2>
          <p class="page-text news__text">It is a long established fact that a reader will be distracted by the of
            readable content of a page when lookings at its layouts the points of using.</p>
        </div>
        <div class="news__articles">
          <ul class="news__list-articles">
            <li class="news__item" v-for="article in newsArticles" :key="article.id">
              <article class="news__article">
                <div class="news__image-wrapper">
                  <img class="news__image" :src="article.image" alt="Photo" width="340">
                  <div class="news__image-tag">{{ article.nameTag }}</div>
                </div>
                <div class="news__description-card">
                  <p class="news__info">{{ article.info }}</p>
                  <div class="news__date-wrapper">
                    <span class="news__date">article.date</span>
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
</template>

<script>
  export default {
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
          // { id: 4,
          //   image: require('@/assets/images/blog/news-article4.jpg'),
          //   nameTag: 'Interior Design',
          //   info: 'Best for any office & business interior solution',
          //   date: '25 December,2022',
          // },
          // { id: 5,
          //   image: require('@/assets/images/blog/news-article5.jpg'),
          //   nameTag: 'Interior Design',
          //   info: 'Best for any office & business interior solution',
          //   date: '25 December,2022',
          // },
          // { id: 6,
          //   image: require('@/assets/images/blog/news-article6.jpg'),
          //   nameTag: 'Interior Design',
          //   info: 'Best for any office & business interior solution',
          //   date: '25 December,2022',
          // },
        ]
      }
    },
}
</script>

<style lang="scss">
@import '@/assets/style/scss/vars.scss';
.news {
  padding: 96px 0;

  &__description {
    max-width: 810px;
    width: 100%;
    margin: 0 auto 52px;
    text-align: center;
  }

  &__title {
    margin-bottom: 12px;
  }

  &__list-articles {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }

  &__item {
    max-width: 382px;
    width: 100%;
    box-shadow: 0 10px 30px 0 rgba(255, 255, 255, 0.25);
    border: 1px solid #e7e7e7;
    border-radius: 62px;
    padding: 20px 20px 36px;
    transition: all 0.3s ease-in-out;

    &:hover {
      background-color: #f4f0ec;
      cursor: pointer;

      .icon {
        background-color: #fff;
      }
    }
  }

  &__image-wrapper {
    position: relative;
    max-width: 340px;
    width: 100%;
    margin-bottom: 11px;
  }

  &__image {
    display: block;
    max-width: 340px;
    width: 100%;
    border-radius: 45px 45px 0 0;
  }

  &__image-tag {
    position: absolute;
    padding: 7px 10px 10px 11px;
    bottom: 20px;
    left: 20px;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0.01em;
    text-transform: capitalize;
    background: #fff;
    border-radius: 8px 8px 8px 0;
  }

  &__info {
    max-width: 295px;
    width: 100%;
    min-height: 93px;
    margin-bottom: 17px;
    text-transform: capitalize;
    font-family: "DM Serif Display", sans-serif;
    font-weight: 400;
    font-size: 25px;
    line-height: 125%;
    letter-spacing: 0.02em;
    color: $text-color2;
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
  }

  &__icon-arrow {
    width: 52px;
    height: 52px;
  }

  &__icon-image {
    width: 8px;
    height: 16px;
    background: url(@/assets/images/arrow-products-small.svg) no-repeat center /
      cover;
  }
}
</style>