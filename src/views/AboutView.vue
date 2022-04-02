<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>{{getCommodities}}</div>
    <button @click="updateCommodities">test</button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters, useStore } from "vuex";
export default defineComponent({
  name: 'HomeView',
  components: {
    
  },
  setup() {
    const store = useStore()  //TODO 去看一下書是怎麼解決這個問題
    return { store }
  },
  methods: {
    updateCommodities() {
      console.log(321)
      this.store.dispatch("getCommodities")
    }
  },
  computed:{
     ...mapGetters([
      'getCommodities',
    ])
  },
  data() {
    return {
    }
  },
});
</script>