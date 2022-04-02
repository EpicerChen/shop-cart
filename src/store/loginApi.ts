import { loginToken } from '@/common/key';
import axios from 'axios'
import { Module } from "vuex";
import { RootState } from '.';

export interface LoginState {
    token: string
}

export const loginApi: Module<LoginState, RootState> = {
    state: {
        token: ""
    },
    mutations: {
        UPDATE_TOKEN(state, payload: string) {
            state.token = payload
            localStorage.setItem(loginToken, state.token)
        }
    },
    actions: {
        // eslint-disable-next-line no-empty-pattern
        async postLogin({ commit }, payload: { username: string, password: string }) { //TODO 非同步
            await axios.post("https://localhost:44350/api/Login", {},
                {
                    auth: {
                        username: payload.username,
                        password: payload.password
                    }
                })
                .then((response) => {
                    commit("UPDATE_TOKEN", response.data.token)
                })
        }
    },

}