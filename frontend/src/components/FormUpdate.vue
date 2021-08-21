<template>
    <div class="card container">

        <form>

            <div class="row  my-3">
                <div class="col">
                    <label class="form-label">Novo Nome</label>
                    <input v-model="form.name" type="text" class="form-control">
                </div>
            </div>

            <div class="row  my-3">
                <div class="col">
                    <label class="form-label">Novo E-mail</label>
                    <input v-model="form.email"  type="email" class="form-control">
                </div>
            </div>

            <div class="row  my-3">
                <div class="col">
                    <label for="exampleInputPassword1" class="form-label"> Nova Senha</label>
                    <input v-model="form.password"  type="password" class="form-control" >
                </div>
            </div>

            <div class="row  my-3">
                <div class="col">
                    <label class="form-label"> Novo Telefone</label>
                    <input v-model="form.phone"  type="tel" class="form-control">
                </div>
            </div>

            <div class="row my-3">
                <div class="col d-flex justify-content-center">

                    <button @click="doUpdate" type="button" class="btn btn-primary">Atualizar</button>

                </div>
            </div>

        </form>

    </div>
</template>

<script>
import { mapActions } from 'vuex';
import { UPDATE_USER } from '../store/constants';

export default {

    props: ['userId'],

    data() {
        return {

            form: {

                name: '',
                email: '',
                password: '',
                phone: '',

            }
            
        }
    },

    methods: {

        ...mapActions({ updateUser: UPDATE_USER }),  

        async doUpdate() {

            Object.keys(this.form).forEach(key => { 
                if (!this.form[key]) delete this.form[key] 
            })

            if(!Object.keys(this.form).length) return alert("Sem dados para atualizar")

            try {

                await this.updateUser({ id: this.userId, userData: this.form })

                this.$router.push('/list_users')

                alert('Usuário atualizado com sucesso')
                
            } catch (error) {

                alert(error.message)
                
            }

        }
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

</style>