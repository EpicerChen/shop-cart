<template lang="">
    <div>
        {{count}}
    </div>
</template>
<script lang="ts">
import { defineComponent, ref, Ref, reactive, onBeforeUnmount, computed } from "vue";

export default defineComponent({
    setup() {
        const constVar: string = "this is const";
        const obj = reactive({})
        let refExample: Ref<string> = ref("this is ref");

        onBeforeUnmount(() => {

        })

        const count:Ref<number> = ref(0)

        
        const plusOne = computed({
            get: () => count.value + 1,
            set: (newVal) => {
                count.value = newVal - 1;
            },
        });

        //TODO computed

        return { obj, constVar,count }
    }
})
</script>
<style lang="">
    
</style>