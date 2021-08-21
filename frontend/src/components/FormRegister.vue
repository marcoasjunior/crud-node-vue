<template>
    <div class="card container">

        <form>

            <div class="row  my-3">
                <div class="col">
                    <label class="form-label">Nome</label>
                    <input type="text" class="form-control">
                </div>
            </div>

            <div class="row  my-3">
                <div class="col">
                    <label class="form-label">E-mail</label>
                    <input type="email" class="form-control">
                </div>
            </div>

            <div class="row  my-3">
                <div class="col">
                    <label for="exampleInputPassword1" class="form-label">Senha</label>
                    <input type="password" class="form-control" >
                </div>
            </div>

            <div class="row  my-3">
                <div class="col">
                    <label class="form-label">Telefone</label>
                    <input type="email" class="form-control">
                </div>
            </div>

            <div class="row my-3">
                <div class="col">
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input">
                        <label class="form-check-label" for="check">Administrador</label>
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
export default {

    methods: {
        doRegister() {



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