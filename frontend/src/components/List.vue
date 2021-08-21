<template>
    <div class='container mt-5'>

        <div class="alert alert-primary text-center" role="alert">Lista de Usuários</div>

        <div class="card">

            <div class="row mx-3 my-3">

                <div class="col ">

                    <input v-model="form.name" type="text" class="form-control" placeholder="Nome">

                </div>

                <div class="col">

                    <input v-model="form.email" type="email" class="form-control" placeholder="E-mail">
                </div>

                <div class="col">
                    <button @click="search" type="button" class="btn btn-primary">Pesquisar</button>
                </div>

            </div>


        </div>

        <div class="list-group">

            <button @click='editUser(user._id)' v-for="(user, index) in users" :key="index" type="button" class="list-group-item list-group-item-action text-center" aria-current="true">
                {{user.name}}
            </button>

        </div>
    </div>
</template>

<script>
export default {

    props: ['users'],

    data() {
        return {
            form: {
                name: '',
                email: ''
            }
        }
    },

    methods: {
        editUser(id) {

            this.$router.push(`/update_user/${id}`)

        },

        search() {

            Object.keys(this.form).forEach(key => { 
                if (!this.form[key]) delete this.form[key] 
            })

            this.$emit('search', this.form)

        }
    },

}
</script>

<style scoped>

.container {

    width: 500px

}

</style>