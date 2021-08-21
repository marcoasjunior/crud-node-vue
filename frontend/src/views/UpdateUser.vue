<template>
  <div>

      <form-update :userId="$route.params.id" />

  </div>
</template>

<script>

import FormUpdate from '../components/FormUpdate.vue'

export default {

  components: { FormUpdate },

}
</script>

<style>

</style>