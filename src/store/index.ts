import axios from 'axios'
import { createStore } from 'vuex'
import { login } from './login'

export default createStore({
  state: {
    commodities: []
  },
  getters: {
    getCommodities: ({ commodities }) => commodities
  },
  mutations: {
    UPDATE_COMMODITIES(state, payload) {
      state.commodities = payload
    }
  },
  actions: {
    getCommodities({ commit }) {
      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjMiLCJqdGkiOiI4MTJlMmEyZi1jNmUyLTQyOGEtYThkOS03YjEwMTkyZWJiN2IiLCJyb2xlcyI6WyJBZG1pbiIsIlVzZXJzIl0sIm5iZiI6MTY0ODg4Mzk2NiwiZXhwIjoxNjQ4OTcwMzY2LCJpYXQiOjE2NDg4ODM5NjYsImlzcyI6Ikp3dEF1dGhEZW1vIn0.F-WOFA2Al4AWHpmejLf2mfME0e2Em7tnlPlmybIX3xg"
      axios.get("https://localhost:44350/api/Commodity/Commodities",
        {
          headers: {
            Authorization: `Bearer ${token}` // Bearer 跟 token 中間有一個空格
          }
        })
        .then((response) => {
          commit("UPDATE_COMMODITIES", response.data)
        })
    }
  },
  modules: {
    login:login
  }
})
