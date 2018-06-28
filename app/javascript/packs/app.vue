<template>
    <div>
        <ul>
            <li>
                <router-link to="/">Home</router-link>
            </li>
            <li>
                <router-link to="/counter">Counter</router-link>
            </li>
        </ul>
        <hr>
        <router-view></router-view>
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
