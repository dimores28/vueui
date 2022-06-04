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
    async GET_DEPARTMENTS({commit}){
       await axios.get(API_URL+"departament")
      .then((response)=>{
          commit('SET_DEPARTMENTS',response.data);
      });
    },
    async CREATE_DEPARTMENT({commit}, name){
      let result;

      await axios.post(API_URL+"departament",{DepartamentName:name})
      .then((response)=>{
        result = response.data;
      });
      return result;
    },
    async REMOVE_DEPARTMENT_BY_ID({commit}, id){
      let res;
      await axios.delete(API_URL+"departament/"+id)
            .then((response)=>{
              res = response.data;
            });

            return res;
    },
    async UPDATE_DEPARTMENT({commit}, data){
      let result;
        await axios.put(API_URL+"departament",{DepartamentId: data.id, DepartamentName: data.name})
          .then((response)=>{
            result = response.data;
          });
          return result;
    },

  },
  modules: {
  }
})
