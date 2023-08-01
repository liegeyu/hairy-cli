export default 
`<template>
  <div <%- 'class="' + htmlTitle + '"' %>>
    <!-- Your template content here -->
  </div>
</template>

<script>
  export default {
    name: '',
    data() {
      return {

      }
    },
    computed: {

    },
    created() {

    },
    methods: {

    }
  }
</script>

<style<%- cssPreprocessor ? ' lang="' + cssPreprocessor + '"' : '' %> scoped>
/* Your styles here */
</style>
`
