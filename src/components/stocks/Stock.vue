<template>
    <div class="col-sm-6 col-sm-4">
        <div class="card mb-4">
            <div class="card-header bg-success text-white">
                <h3 class="card-title">
                    {{ stock.name }}
                    <small>(Price:{{ stock.price }})</small>
                </h3>
            </div>
            <div class="card-body">
                <div class="d-flex">
                    <input type="number" class="form-control mr-4" placeholder="Quantity" v-model="quantity" :class="{ danger: insufficientFunds}">
                    <button class="btn btn-success ml-4" @click="buyStock" :disabled="quantity <= 0 || insufficientFunds">{{ insufficientFunds ? 'Insufficient Funds' : 'Buy' }}</button>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    export default {
        props: ['stock'],
        data() {
            return {
                quantity: 0
            }
        },
        computed: {
            funds() {
                return this.$store.getters.funds
            },
            insufficientFunds() {
                return this.quantity * this.stock.price > this.funds
            }  
        },
        methods: {
            buyStock() {
                const order = {
                    stockId: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: parseInt(this.quantity)
                }
                this.$store.dispatch('buyStock', order)
                this.quantity = 0
            }
        }
    }
</script>


<style scoped>
    .danger {
        border: 1px solid red
    }
</style>