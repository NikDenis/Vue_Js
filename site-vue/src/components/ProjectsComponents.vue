<template>
  <section class="projects">
      <div class="center">
        <div class="projects__description">
          <h2 class="page-title projects__title">Follow our projects</h2>
          <p class="page-text projects__text">It is a long established fact that a reader will be distracted by the of
            readable
            content of page lookings
            at its layouts points.</p>
        </div>
        <div class="projects__cards">
          <ul class="projects__list">
            <ProjectsCard />
          </ul>
        </div>
      </div>
    </section>
</template>

<script>
import ProjectsCard from './ProjectsCard.vue';

  export default {
    components: { ProjectsCard }
}
</script>

<style lang="scss">
@import '@/assets/style/scss/vars.scss';

.projects {
  padding: 96px 0;
  &__description {
    max-width: 738px;
    width: 100%;
    margin: 0 auto 93px;
  }

  &__title {
    margin: 0 0 8px;
  }

  &__text {
    text-align: center;
  }

  &__list {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 56px;
  }
  &__item {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
  }
  &__item:nth-child(1) &__image {
    border-radius: 0 80px 0 0;
  }
  &__item:nth-child(2) &__image {
    border-radius: 80px 0 0;
  }
  &__item:nth-child(3) &__image {
    border-radius: 0 0 80px 0;
  }
  &__item:nth-child(4) &__image {
    border-radius: 0 0 0 80px;
  }
  &__image-wrapper {
    max-width: 548px;
    width: 100%;
    margin: 0 0 24px;
  }
  &__image {
    display: block;
    max-width: 548px;
    width: 100%;
  }
  &__card-description {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
  }
  &__card-name {
    font-family: "DM Serif Display", sans-serif;
    font-weight: 400;
    font-size: 25px;
    line-height: 125%;
    letter-spacing: 0.02em;
    color: $text-color2;
  }
  &__card-info {
    font-family: "Jost", sans-serif;
    font-weight: 400;
    font-size: 22px;
    line-height: 150%;
    letter-spacing: 0.01em;
  }

  &__icon-arrow {
    width: 70px;
    height: 70px;
  }

  &__icon-image {
    width: 10px;
    height: 20px;
  }
}

</style>