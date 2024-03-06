<template>
   <section class="promo">
      <div class="center">
        <div class="promo__background-image">
          <div class="promo__description">
            <h1 class="promo__title">Let your home be unique</h1>
            <p class="page-text promo__text">There are many variations of the passages of
              lorem Ipsum fromavailable, majority.</p>
            <button class="promo__button">
              <span class="promo__button-text">Get started</span>
              <span class="promo__button-icon">
                <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 8.43542L14.7232 8.29857M9.61818 1.91138L16.1412 8.43436L9.48677 15.0887" stroke="#CDA274"
                    stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
@import '@/assets/style/scss/vars.scss';
.promo {
  &__background-image {
    min-height: 758px;
    padding: 0 52px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background: url(@/assets/images/promo-background.jpg) no-repeat center / cover;
    border-radius: 70px;
  }

  &__title {
    margin: 0 0 18px;
    max-width: 435px;
    width: 100%;
    text-transform: capitalize;
    font-family: "DM Serif Display", sans-serif;
    font-weight: 400;
    font-size: 65px;
    line-height: 125%;
    color: $text-color2;
  }

  &__text {
    max-width: 435px;
    width: 100%;
    margin-bottom: 20px;
  }

  &__button {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 18px;
    padding: 26px 47px 26px 48px;
    box-shadow: 0 10px 20px 0 rgba(192, 192, 192, 0.35);
    background: $text-color2;

    &-text {
      margin: 0 10px 0 0;
      font-family: "Jost", sans-serif;
      font-weight: 600;
      font-size: 18px;
      line-height: 125%;
      letter-spacing: 0.02em;
      text-transform: capitalize;
      color: #fff;
    }

    &-icon {
      width: 18px;
      height: 17px;

      svg {
        display: block;
      }
    }
  }
}
</style>