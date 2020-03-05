import Vue from 'vue'
import Vuex from 'vuex'
import { getters } from './getters.js'
import * as mutations  from './mutations.js'
import {actions} from './actions.js'

Vue.use(Vuex)

export const store =  new Vuex.Store({
    state:{
        count:0,
        Name:"shiva",
        todos:[
            { id: 1, text: '...', done: true },
            { id: 2, text: '...', done: false }
        ],
        Increment:0
    },
    getters,
    mutations,
    actions

})