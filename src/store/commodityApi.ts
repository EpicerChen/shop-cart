import { loginToken } from '@/common/key';
import axios from 'axios'
import { Module } from "vuex";
import { RootState } from '.';


//TODO TS 寫 store 的方法
export type Commodity = {
    name: string,
    price: number,
    images: string[],
    comment: string
}

export interface CommodityState {
    commodities: Commodity[]
}

export const commodityApi: Module<CommodityState, RootState> = {
    state: {
        commodities: []
    },
    getters: {
        getCommodities: ({ commodities }) => commodities
    },
    mutations: {
        UPDATE_COMMODITIES(state, payload: Commodity[]) {
            state.commodities = payload
        }
    },
    actions: {
        async getCommodities({ commit }) {
            const token = localStorage.getItem(loginToken)
            await axios.get("https://localhost:44350/api/Commodity/Commodities",
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

}
