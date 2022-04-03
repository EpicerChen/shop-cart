import { createStore } from 'vuex'
import { loginApi, LoginState } from './loginApi'
import { commodityApi, CommodityState } from './commodityApi';


export interface RootState extends LoginState, CommodityState {

}

export default createStore({
  modules: {
    login: loginApi,
    commodity: commodityApi
  }
})

