<template>
    <div>
        <counter />
    </div>
</template>

<script>
    import Counter from './components/counter.vue';

    export default {
        data: function () {
            return {
                message: "Hello Vue!"
            }
        },
        components: {
            Counter,
        }
    }
</script>

<style scoped>
</style>
