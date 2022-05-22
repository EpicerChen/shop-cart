<template>
  <div>This is bill</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import billApi from "@/store/composition-api/billApi";

export default defineComponent({
  name: "BillView",
  setup() {
    const action = billApi.action
    const state = billApi.state
    return {
      action,
      state
    }
  }
})
</script>