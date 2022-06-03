import { createStore } from 'vuex'
import axios from 'axios'

const API_URL = "http://localhost:34104/api/";
const PHOTO_URL = "http://localhost:34104/photos/";

export default createStore({
  state: {
    departments:[],
  },
  getters: {
    DEPARTMENTS: state => state.departments,
  },
  mutations: {
    SET_DEPARTMENTS(state, data){
      state.departments = data;
    }
  },
  actions: {
    GET_DEPARTMENTS({commit}){
      axios.get(API_URL+"departament")
      .then((response)=>{
          commit('SET_DEPARTMENTS',response.data);
      });
    },
    async CREATE_DEPARTMENT({commit}, name){
        await axios.post(API_URL+"departament",{
         DepartamentName:name
      })
      .then((response)=>{
        console.log(response.data);
            return response.data;
      });
    }
  },
  modules: {
  }
})
