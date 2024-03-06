<template>
 <PageHeader />
 <IndexPagePromo />
 <ProjectsComponents />
 <QualityComponent />
 <NewsComponent />
 <PageFooter />
</template>

<script>
import PageHeader from '@/components/PageHeader.vue';
import PageFooter from '@/components/PageFooter.vue';
import IndexPagePromo from '../IndexPagePromo.vue';
import ProjectsComponents from '../ProjectsComponents.vue';
import QualityComponent from '../QualityComponent.vue';
import NewsComponent from '../NewsComponent.vue';

  export default {
    components: { PageHeader, PageFooter, IndexPagePromo, ProjectsComponents, QualityComponent, NewsComponent }
    
  }
</script>

<style lang="scss" scoped>

</style>