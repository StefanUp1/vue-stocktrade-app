<template>
    <div>
        <h1>Trade or View your stocks</h1>
        <h6>You may Save & Load your Data</h6>
        <h6>Click on 'End Day' to start a new trading day</h6>
        <br><br>
        <p>Your Funds: <strong>{{ funds | currency }}</strong></p>
        <hr>
        <small>( This site is bulit with: Vue 2, Bootstrap 4, Vuex, vue-router, npm and Webpack )</small>
    </div>
</template>


<script>
    export default {
        computed: {
            funds() {
                return this.$store.getters.funds
            }
        }
    }
</script>