<template lang="">
    <div>
        
    </div>
</template>
<script lang="ts">
import { defineComponent, ref, Ref,reactive } from "vue";

export default defineComponent({
    setup() {
        const constVar :string ="this is const";
        let refEXample:Ref<string> = ref("this is ref");
        const obj = reactive({})
        //TODO computed
        
    }
})
</script>
<style lang="">
    
</style>