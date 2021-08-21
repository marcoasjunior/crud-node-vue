<template>
    <div class="card container">

        <form>

            <div class="row">
                <div class="col">
                    <label class="form-label">E-mail</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                </div>
            </div>

            <div class="row">
                <div class="col">
                    <label for="exampleInputPassword1" class="form-label">Senha</label>
                    <input type="password" class="form-control" id="exampleInputPassword1">
                </div>
            </div>

            <div class="row">
                <div class="col">
                    <button @click="doLogin" type="submit" class="btn btn-primary">Login</button>

                </div>
                <div class="col">

                    <button @click="toRegister"  type="submit" class="btn btn-primary">Registrar</button>
                </div>
            </div>

        </form>

    </div>
</template>

<script>

export default {

    methods: {

        toRegister() {

            this.$router.push('/register')

        },

        doLogin() {

            this.$router.push('/register')

        },
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