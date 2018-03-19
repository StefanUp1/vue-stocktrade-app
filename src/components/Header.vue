<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light mb-4">
        <router-link to="/" class="navbar-brand">Stock Trader</router-link>
        <div class="collapse navbar-collapse">
            <ul class="navbar-nav mr-auto">
                <router-link to="/portfolio" activeClass="active" tag="li"><a class="nav-link">Portfolio</a></router-link>
                <router-link to="/stocks" tag="li" activeClass="active"><a class="nav-link">Stocks</a></router-link>
            </ul>
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a class="nav-link" style="cursor:pointer" @click="endDay">End Day</a>
                </li>
                <li class="nav-item">
                    <div class="nav-link">
                        <div class="dropdown">
                            <span class="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button" style="cursor:pointer" @click="isOpen = !isOpen">Save & Load</span>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" :class="{show: isOpen}">
                                <a href="#" class="dropdown-item" @click="saveData">Save</a>
                                <a href="#" class="dropdown-item" @click="loadData">Load</a>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="navbar-text ml-4">
                    <strong>Funds: {{ funds | currency }}</strong>
                </li>
            </ul>
        </div>
    </nav>
</template>


<script>
    import {mapActions} from 'vuex'
    
    export default {
        data() {
            return {
                isOpen: false
            }
        },
        computed: {
            funds() {
                return this.$store.getters.funds
            }
        },
        methods: {
            ...mapActions({
                randomizeStocks: 'randomizeStocks',
                fetchData: 'loadData'
            }),
            endDay() {
                  this.randomizeStocks()
            },
            saveData(){
                const data = {
                    funds: this.$store.getters.funds,
                    stockPortfolio: this.$store.getters.stockPortfolio,
                    stocks: this.$store.getters.stocks
                }
                this.$http.put('data.json', data)
            },
            loadData() {
                this.fetchData()
            }
        }
    }
</script>