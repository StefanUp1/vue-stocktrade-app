import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import stocks from './modules/stocks.js'
import portfolio from './modules/portfolio.js'

import * as actions from './actions.js'

export default new Vuex.Store({
    actions,
    modules: {
        stocks,
        portfolio
    }
})