import axios from 'axios'

export const login = {
    state: {
        token: ""
    },

    actions: {
        // eslint-disable-next-line no-empty-pattern
        postLogin({ }, payload: { username: string, password: string }) { //TODO 非同步
            axios.post("https://localhost:44350/api/Login", {},
                {
                    auth: {
                        username: payload.username,
                        password: payload.password
                    }
                })
                .then((response) => {
                    console.log(response.data)
                })
        }
    },

}