<template>
  <section>
    <BlogList />
  </section>
</template>

<script>
import BlogList from '../../../components/Admin/Tables/BlogStore/ListOfBlog.vue';

export default {
  name: 'ProductHouse',
  components: {
    BlogList,
  },
};
</script>
