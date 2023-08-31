import { defineStore } from "pinia";
import api from "../api";

export default useAppStore = defineStore('app', {
  state: () => ({
    user: null
  }),
  actions: {
    async login(user){
      try{
        let response = await api.put('login', user)
        this.user = response.data
      } catch(error){
        console.log(error)
      }
    },
    async signup(user){
      try{
        let response = await api.post('signup', user)
        this.user = response.data
      } catch(error){
        console.log(error)
      }
    }
  }
})