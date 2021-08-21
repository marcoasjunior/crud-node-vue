import Vue from 'vue'
import Vuex from 'vuex'
import { AxiosConfig } from '../service/AxiosConfig';
import { REGISTER_USER } from './constants';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {


    [REGISTER_USER]: async (context, data) => {
        
        console.log(data)

        const response = await AxiosConfig.post('/', data)

        console.log(response)

        return response
       
    },
  },
  modules: {

  }
})
