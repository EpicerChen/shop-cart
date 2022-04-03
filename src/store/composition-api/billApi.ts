import { reactive, readonly } from 'vue';
import { AxiosResponse } from 'axios';
import axios from 'axios';

//TODO 這裡用 Composition API 寫

const Bill = reactive({ total: 0 })

const getBill = async () => {
    await axios.get("http://")
        .then((response: AxiosResponse) => {
            Bill.total = response.data
        })
}

export default {
    state: readonly(Bill),
    getBill
}