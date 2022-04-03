<template>
  <div>
      <img style="width: 40%;" :src="`data:image/png;base64,${commodity.images[0]}`" />
      <div>{{ commodity.name }}</div>
      <div>{{ commodity.price }}</div>
      <div>{{ commodity.comment }}</div>
  </div>
</template>

<script lang="ts">
import { Commodity } from '@/store/commodityApi';
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'CommodityItem',
  props: {
    commodity: {
			type: Object as PropType<Commodity>,  //TODO Prop 如果要用 ts 去包，那要寫成 PropType<>
			required: true
		}
  },

});
</script>