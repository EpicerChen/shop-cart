import { reactive, readonly } from 'vue';
import { AxiosResponse } from 'axios';
import axios from 'axios';

//TODO 這裡用 Composition API 寫

const state = reactive({ total: 0 })
const mutations = {
    updateTotal: (payload: number) => {
        state.total = payload
    }
}
const action = {
    getBill: async () => {
        await axios.get("http://")
            .then((response: AxiosResponse) => {
                state.total = response.data
            })
    },
    addTotal: () => {
        mutations.updateTotal(state.total + 1);
    }
}

export default {
    state: readonly(state),
    action
}