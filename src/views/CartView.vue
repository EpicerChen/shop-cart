<template>
  <div class="about">
    <h1>This is an about page</h1>
    <CommodityItemVue v-for="item in getCommodities" :key="item.name" :commodity="item"/>   
    <button @click="updateCommodities">test</button>
  </div>
</template>
<script lang="ts">
import CommodityItemVue from "@/components/CommodityItem.vue";
import { defineComponent } from "vue";
import { mapGetters, useStore } from "vuex";
export default defineComponent({
  name: 'CartView',
  components: {
     CommodityItemVue
  },
  setup() {
    const store = useStore()  //TODO 去看一下書是怎麼解決這個問題
    return { store }
  },
  methods: {
    updateCommodities() {
      // this.$store.dispatch("getCommodities") 
      //TODO 書中是使用 $store ，是因為它是 js 語言，ts 在官方中有說明，只能透過 setup 中 的 const store = useStore() 中去使用
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