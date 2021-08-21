<template>
    <div class='container'>
        <div class="list-group">

            <button v-for="(user, index) in users" :key="index" type="button" class="list-group-item list-group-item-action" aria-current="true">
               {{user.name}}
            </button>

        </div>
    </div>
</template>

<script>
export default {

    props: ['users']

}
</script>

<style scoped>

.container {

    width: 500px

}

</style>