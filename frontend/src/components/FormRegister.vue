<template>
    <div class="card container">

        <form>

            <div class="row  my-3">
                <div class="col">
                    <label class="form-label">Nome</label>
                    <input v-model="form.name" type="text" class="form-control">
                </div>
            </div>

            <div class="row  my-3">
                <div class="col">
                    <label class="form-label">E-mail</label>
                    <input v-model="form.email"  type="email" class="form-control">
                </div>
            </div>

            <div class="row  my-3">
                <div class="col">
                    <label for="exampleInputPassword1" class="form-label">Senha</label>
                    <input v-model="form.password"  type="password" class="form-control" >
                </div>
            </div>

            <div class="row  my-3">
                <div class="col">
                    <label class="form-label">Telefone</label>
                    <input v-model="form.phone"  type="tel" class="form-control">
                </div>
            </div>

            <div class="row my-3">
                <div class="col">
                    <div class="form-check">
                        <input v-model="form.permission"  type="checkbox" class="form-check-input">
                        <label  class="form-check-label" for="check">Administrador</label>
                    </div>
                </div>
            </div>


            <div class="row my-3">
                <div class="col">

                    <button @click="doRegister" type="submit" class="btn btn-primary">Registrar</button>

                </div>
            </div>

        </form>

    </div>
</template>

<script>
import { mapActions } from 'vuex';
import { REGISTER_USER } from '../store/constants';

export default {

    data() {
        return {

            form: {

                name: '',
                email: '',
                password: '',
                phone: '',
                permission: false,

            }
            
        }
    },

    methods: {

        ...mapActions({ registerUser: REGISTER_USER }),  

        async doRegister() {

            this.form.permission = this.form.permission ? "admin" : "standard"

            try {

                await this.registerUser(this.form)

                this.$router.push('/')

                alert('Cadastro realizado com sucesso')
                
            } catch (error) {

                alert(error.message)
                
            }

        }
    },

}
</script>

<style scoped>

.card {

    width: 500px;
    height: 100%;
    margin-top: 30px;

}

</style>