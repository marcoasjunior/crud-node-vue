import Vue from 'vue'
import Vuex from 'vuex'
import { AxiosConfig } from '../service/AxiosConfig';
import { FIND_USERS, LOGIN, REGISTER_USER, UPDATE_USER } from './constants';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {

        [REGISTER_USER]: async (context, data) => {

            const response = await AxiosConfig.post('/', data)

            return response.data

        },

        [LOGIN]: async (context, data) => {

            const response = await AxiosConfig.post('/login', data)

            localStorage.setItem('token', response.data.token)

            return response.data

        },

        [FIND_USERS]: async (context, data) => {

            const filter = data ? JSON.stringify(data) : JSON.stringify({})

            const response = await AxiosConfig.get(`/findAll?filter=${encodeURI(filter)}`)

            return response.data

        },

        [UPDATE_USER]: async (context, data) => {

            const response = await AxiosConfig.patch(`/${data.id}`, data.userData)

            return response.data

        },

    },
    modules: {

    }
})