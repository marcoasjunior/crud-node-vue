<template>
  <div>
      
      <list :users="users" @search='getList($event)' />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import List from '../components/List.vue'
import { FIND_USERS } from '../store/constants'

export default {

    components: { List },

    data() {
        return {
            users: [],

        }
    },

    methods: {

        ...mapActions({ usersList: FIND_USERS }),

        async getList(event) {

            try {

                this.users = await this.usersList(event)

            } catch (error) {

                alert(error.message)

            }

        }

    },

    async created() {

        await this.getList()
    
    },

}
</script>

<style>

</style>