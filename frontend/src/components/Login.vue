<template>
    <div class="card container">

        <div class="alert alert-primary text-center mt-2 fw-bolder" role="alert">Login</div>

        <form>

            <div class="row mb-3">
                <div class="col">
                    <label class="form-label">E-mail</label>
                    <input v-model="form.email" required type="email" class="form-control" autocomplete="email">
                </div>
            </div>

            <div class="row my-3">
                <div class="col">
                    <label for="exampleInputPassword1" class="form-label">Senha</label>
                    <input v-model="form.password" required type="password" class="form-control" autocomplete="current-password">
                </div>
            </div>

            <div class="row my-3 ">
                <div class="col d-flex justify-content-center">
                    <button @click="doLogin" type="button" class="btn btn-primary">Login</button>

                </div>
                <div class="col d-flex justify-content-center">

                    <button @click="toRegister"  type="button" class="btn btn-primary">Registrar</button>
                </div>
            </div>

        </form>

    </div>
</template>

<script>
import { mapActions } from 'vuex'
import { LOGIN } from '../store/constants'

export default {

    data() {
        return {
            
            form: {
                email: '',
                password: '',
            }

        }
    },

    methods: {

        ...mapActions({ loginMe: LOGIN}),

        toRegister() {

            this.$router.push('/register')

        },

        async doLogin() {

            try {

                await this.loginMe(this.form)

                this.$router.push('/list_users')

                alert('Logado com sucesso')
                
            } catch (error) {

                alert(error.message)
                
            }

        },
    },

}

</script>

<style scoped>

.card {

    width: 25%;
    min-width: 300px;
    height: 100%;
    margin-top: 30px;

}

.btn {

    width: 100px

}

</style>