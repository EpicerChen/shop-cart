<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div v-for="item in getCommodities" :key="item.name">
      <img style="width: 40%;" :src="`data:image/png;base64,${item.images[0]}`" />
      <div>{{ item.name }}</div>
      <div>{{ item.price }}</div>
      <div>{{ item.comment }}</div>
    </div>
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
      this.store.dispatch("getCommodities")
    }
  },
  computed: {
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