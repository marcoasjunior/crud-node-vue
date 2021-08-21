<template>
    <div class='container mt-5'>

        <div class="alert alert-primary text-center" role="alert">Lista de Usuários</div>
        
        <div class="list-group">

            <button @click='editUser(user)' v-for="(user, index) in users" :key="index" type="button" class="list-group-item list-group-item-action text-center" aria-current="true">
                {{user.name}}
            </button>

        </div>
    </div>
</template>

<script>
export default {

    props: ['users'],

    methods: {
        editUser(user) {

            console.log(user)


        }
    },

}
</script>

<style scoped>

.container {

    width: 500px

}

</style>