<template>
    <div>
        <h1>{{ count }}</h1>
        <button @click="increment">increment</button>
    </div>
</template>

<script>
    import { mapState, mapMutations } from 'vuex';

    export default {
        computed: {
            ...mapState(['count'])
        },
        methods: {
            ...mapMutations(['increment'])
        }
    }
</script>

<style scoped>
</style>