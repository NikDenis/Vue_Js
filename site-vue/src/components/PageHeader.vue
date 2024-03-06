<template>
  <header class="page-header header-blog">

  <div class="center">
    <div class="page-header__wrapper">
      <div class="page-logo">
        <a class="page-logo__link" href="./index.html">
          <img class="page-logo__image" src="@/assets/images/page-logo.svg" alt="Logo" width="177">
        </a>
      </div>
      <div class="page-header__nav-wrapper">
        <nav class="page-header__nav">
          <ul class="page-header__list">
            <li class="page-header__item"><a class="page-header__link" href="#!">Home</a></li>
            <li class="page-header__item"><a class="page-header__link" href="#!">Project</a></li>
            <li class="page-header__item"><a class="page-header__link" href="#!">Blog</a></li>
          </ul>
        </nav>
      </div>
    </div>
  </div>

  </header>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss">
@import '@/assets/style/scss/vars.scss';

.page-header {
  padding: 55px 0;

  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__list {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 48px;
  }

  &__item {
    font-size: 20px;
    line-height: 125%;
  }

  &__link {
    font-family: "Jost", sans-serif;
    color: $text-color2;
    // color: #292f36;
  }
}
</style>