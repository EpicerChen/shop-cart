<template>
    <div class="about">
        <h1>This is an about page</h1>
        <button @click="login">login test</button>
    </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
export default defineComponent({
    name: 'HomeView',
    components: {

    },
    setup() {
        const store = useStore()  //TODO 去看一下書是怎麼解決這個問題
        return { store }
    },
    methods: {
        login() {
            console.log(321)
            this.store.dispatch("postLogin", { username: "string", password: "string" })
        }
    },
    computed: {

    },
    data() {
        return {
        }
    },
});
</script>