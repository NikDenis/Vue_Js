<template>
  <li class="projects__item" v-for="project in projects" :key="project.id">
    <article>
      <div class="projects__image-wrapper">
        <img class="projects__image" :src="project.img" alt="Photo" width="525">
      </div>
      <div class="projects__card-description">
        <div class="projects__card-info-wrapper">
          <h4 class="projects__card-name">{{ project.name }}</h4>
          <span class="projects__card-info">{{ project.cardInfo }}</span>
        </div>
        <div class="icon projects__icon-arrow">
          <a class="icon-link" href="#"><span class="icon-image projects__icon-image"></span></a>
        </div>
      </div>
    </article>
  </li>
</template>

<script>
  export default {
    data() {
      return {
        projects: [
          {
            id: 1,
            img: require('@/assets/images/projects/projects-1.jpg'),
            name: 'Modern kitchan',
            cardInfo: 'Decor / Artchitecture',
          },
          {
            id: 2,
            img: require('@/assets/images/projects/projects-2.jpg'),
            name: 'Modern kitchan',
            cardInfo: 'Decor / Artchitecture',
          },
          {
            id: 3,
            img: require('@/assets/images/projects/projects-3.jpg'),
            name: 'Modern kitchan',
            cardInfo: 'Decor / Artchitecture',
          },
          {
            id: 4,
            img: require('@/assets/images/projects/projects-4.jpg'),
            name: 'Modern kitchan',
            cardInfo: 'Decor / Artchitecture',
          }
        ]
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>