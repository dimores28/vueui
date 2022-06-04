import axios from 'axios'

const API_URL = "http://localhost:34104/api/";
const PHOTO_URL = "http://localhost:34104/photos/";

export default {
   namespaced: true,
   state:{
      employee: [],
   },
   getters: {
      EMPLOYEES : state => state.employee,
   },
   mutations:{
      SET_EMPLOYEE(state, data){
         state.employee = data;
      }
   },
   actions: {
      async GET_EMPLOYEES({commit}){
         await axios.get(API_URL+"employee")
         .then((response)=>{
              commit('SET_EMPLOYEE',response.data);
         });
      },
      async CREATE_EMPLOYEE({commit}, emp){
         let res;
         await axios.post(API_URL+"employee", emp)
         .then(response =>{
            res = response.data;
         });

         return res;
      },
      async UPDATE_EMPLOYEE({commit}, employee){
         let res;
          await axios.put(API_URL+"employee",employee)
          .then(response =>{
            res = response.data;
          });

          return res;
      },
      async DELETE_EMPLOYEE_BY_ID({commit}, id){
         let res;
         await axios.delete(API_URL+"employee/"+id)
         .then(response =>{
            res = response.data;
          });

          return res;
      },
      async UPLOAD_IMAGE_EMPLOYEE({commit}, formData){
         let PhotoFileName;
          await axios.post(API_URL+"Employee/SaveFile", formData)
            .then((response)=>{
               PhotoFileName=response.data;
            });

            return PhotoFileName;
      }
   },
   
}