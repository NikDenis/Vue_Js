<template>
 <section class="quality">
      <div class="center">
        <div class="quality__wrapper">
          <ul class="quality__list">
            <li class="quality__item">
              <span class="quality__text-count">12</span>
              <h5 class="quality__title">Years of experiance</h5>
            </li>
            <li class="quality__item">
              <span class="quality__text-count">85</span>
              <h5 class="quality__title">Success project</h5>
            </li>
            <li class="quality__item">
              <span class="quality__text-count">15</span>
              <h5 class="quality__title">Active project</h5>
            </li>
            <li class="quality__item">
              <span class="quality__text-count">95</span>
              <h5 class="quality__title">Happy CUstomers</h5>
            </li>
          </ul>
        </div>
      </div>
    </section>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
@import "@/assets/style/scss/vars.scss";
.quality {
  background-color: #f4f0ec;

  &__wrapper {
    padding: 151px 0;
  }
  &__list {
    max-width: 1082px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__item {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;

    &:not(:first-child)::before {
      content: "";
      position: absolute;
      width: 1px;
      background-color: #cda274;
      width: 130px;
      height: 1px;
      transform: rotate(90deg);
      bottom: 72px;
      left: -142px;
    }
  }
  &__text-count {
    margin: 0 0 16px;
    font-family: "DM Serif Display", sans-serif;
    font-weight: 400;
    font-size: 85px;
    line-height: 125%;
    letter-spacing: 0.02em;
    color: #cda274;
  }
  &__title {
    text-transform: capitalize;
    font-family: "Jost", sans-serif;
    font-weight: 400;
    font-size: 22px;
    line-height: 150%;
    letter-spacing: 0.01em;
  }
}
</style>