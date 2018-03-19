<template>
    <div class="col-sm-6 col-sm-4">
        <div class="card mb-4">
            <div class="card-header bg-info text-white">
                <h3 class="card-title">
                    {{ stock.name }}
                    <small>(Price: {{ stock.price }} | Quantity: {{ stock.quantity }})</small>
                </h3>
            </div>
            <div class="card-body">
                <div class="d-flex">
                    <input type="number" class="form-control mr-4" placeholder="Quantity" v-model="quantity" :class="{ danger: insufficientQuantity}">
                    <button class="btn btn-danger ml-4" @click="sellStock" :disabled="quantity <= 0 || insufficientQuantity">{{ insufficientQuantity ? 'Not enough Stocks' : 'Sell'}}</button>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    export default {
        props:['stock'],
        data() {
            return {
                quantity: 0
            }
        },
        computed: {
            stockQuantity() {
                return this.$store.getters.stockPortfolio
            },
            insufficientQuantity() {
                return this.quantity > this.stock.quantity
            }
        },
        methods: {
            sellStock() {
                const order = {
                    stockId: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: this.quantity
                }
                this.$store.dispatch('sellStock', order)
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