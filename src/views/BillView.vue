<template>
  <div>This is bill</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import billApi from "@/store/composition-api/billApi";

export default defineComponent({
  name: "BillView",
  setup() {
    const getBill = billApi.getBill
    const state = billApi.state
    return {
      getBill,
      state
    }
  }
})
</script>