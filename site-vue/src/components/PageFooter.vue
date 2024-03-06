<template>
  <footer class="page-footer footer-blog">
    <div class="center">
      <div class="page-footer__box">
        <div class="page-footer__icons-wrapper">
          <div class="page-logo page-footer__logo">
            <a class="page-logo__link" href="./index.html">
              <img class="page-logo__image" src="@/assets/images/page-logo.svg" alt="Logo" width="177">
            </a>
          </div>
          <p class="page-text page-footer__text-info">
            It is a long established fact that a reader will be distracted lookings.
          </p>
          <div class="page-footer__icons">
            <a class="page-footer__icon-link" href="#!">
              <svg width="18" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16.6367 4.59375C17.3398 4.06641 17.9727 3.43359 18.4648 2.69531C17.832 2.97656 17.0938 3.1875 16.3555 3.25781C17.1289 2.80078 17.6914 2.09766 17.9727 1.21875C17.2695 1.64062 16.4609 1.95703 15.6523 2.13281C14.9492 1.39453 14 0.972656 12.9453 0.972656C10.9062 0.972656 9.25391 2.625 9.25391 4.66406C9.25391 4.94531 9.28906 5.22656 9.35938 5.50781C6.30078 5.33203 3.55859 3.85547 1.73047 1.64062C1.41406 2.16797 1.23828 2.80078 1.23828 3.50391C1.23828 4.76953 1.87109 5.89453 2.89062 6.5625C2.29297 6.52734 1.69531 6.38672 1.20312 6.10547V6.14062C1.20312 7.93359 2.46875 9.41016 4.15625 9.76172C3.875 9.83203 3.52344 9.90234 3.20703 9.90234C2.96094 9.90234 2.75 9.86719 2.50391 9.83203C2.96094 11.3086 4.33203 12.3633 5.94922 12.3984C4.68359 13.3828 3.10156 13.9805 1.37891 13.9805C1.0625 13.9805 0.78125 13.9453 0.5 13.9102C2.11719 14.9648 4.05078 15.5625 6.16016 15.5625C12.9453 15.5625 16.6367 9.97266 16.6367 5.08594C16.6367 4.91016 16.6367 4.76953 16.6367 4.59375Z"
                  fill="#292F36" />
              </svg>
            </a>
            <a class="page-footer__icon-link" href="#!">
              <svg width="18" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M4.14062 16H0.871094V5.48828H4.14062V16ZM2.48828 4.08203C1.46875 4.08203 0.625 3.20312 0.625 2.14844C0.625 1.12891 1.46875 0.285156 2.48828 0.285156C3.54297 0.285156 4.38672 1.12891 4.38672 2.14844C4.38672 3.20312 3.54297 4.08203 2.48828 4.08203ZM16.3398 16H13.1055V10.9023C13.1055 9.67188 13.0703 8.125 11.3828 8.125C9.69531 8.125 9.44922 9.42578 9.44922 10.7969V16H6.17969V5.48828H9.30859V6.92969H9.34375C9.80078 6.12109 10.8555 5.24219 12.4375 5.24219C15.7422 5.24219 16.375 7.42188 16.375 10.2344V16H16.3398Z"
                  fill="#292F36" />
              </svg>
            </a>
          </div>
        </div>
        <div class="page-footer__links-wrapper">
          <div class="page-footer__nav">
            <h5 class="page-footer-title">Pages</h5>
            <ul class="page-footer__nav-list">
              <li class="page-footer-item page-footer__nav-item">
                <a class="page-footer-link page-footer__nav-link" href="#!">Home</a>
              </li>
              <li class="page-footer-item page-footer__nav-item">
                <a class="page-footer-link page-footer__nav-link" href="#!">Project</a>
              </li>
              <li class="page-footer-item page-footer__nav-item">
                <a class="page-footer-link page-footer__nav-link" href="#!">Blog</a>
              </li>
            </ul>
          </div>
          <div class="page-footer__contacts">
            <h5 class="page-footer-title">Contact</h5>
            <ul class="page-footer__contacts-list">
              <li class="page-footer-item page-footer__contacts-item">
                <a class="page-footer-link page-footer__contacts-link" href="#!">55 East Birchwood Ave. Brooklyn, New
                  York 11201</a>
              </li>
              <li class="page-footer-item page-footer__contacts-item">
                <a class="page-footer-link page-footer__contacts-link" href="#!">contact@interno.com</a>
              </li>
              <li class="page-footer-item page-footer__contacts-item">
                <a class="page-footer-link page-footer__contacts-link" href="#!">(123) 456 - 7890</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
@import '@/assets/style/scss/vars.scss';
.page-footer {
  padding-bottom: 134px;

  &__box {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 20px;
  }

  &__logo {
    margin-bottom: 18px;
  }

  &__text-info {
    max-width: 395px;
    width: 100%;
    margin-bottom: 31px;
  }

  &__icons-wrapper {
    max-width: 395px;
    width: 100%;
  }

  &__icons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    gap: 54px;
  }

  &__icon-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 18px;
    height: 22px;

    & svg {
      display: block;
    }
  }

  &__links-wrapper {
    max-width: 705px;
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 20px;

    &--blog-details {
      justify-content: flex-start;
      gap: 101px;
    }
  }

  &__nav {
    max-width: 125px;
    width: 100%;
  }

  &__contacts {
    max-width: 258px;
    width: 100%;
  }

  &__nav-list,
  &__contacts-list {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 32px;
  }

  &-item {
    letter-spacing: 0.01em;
  }

  &-link {
    color: #4d5053;
  }

  &-title {
    margin-bottom: 27px;
    font-family: "DM Serif Display", sans-serif;
    font-size: 25px;
    font-weight: 400;
    line-height: 125%;
    color: $text-color2;
  }
}

</style>