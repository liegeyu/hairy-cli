export default 
`<template>
  <!-- Your template code goes here -->
</template>

<script setup<%- scriptType ? ' lang="' + scriptType + '"' : '' %>>
import { ref, computed, onCreated } from 'vue'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'
// Your script code goes here
const store = useStore()
const router = useRouter()
const route = useRoute()

onCreated(() => {
  console.log('Component created')
})

</script>

<style<%- cssPreprocessor ? ' lang="' + cssPreprocessor + '"' : '' %> scoped>
/* Your styles here */
</style>
`