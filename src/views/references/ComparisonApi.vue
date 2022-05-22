<template lang="">
    <div>
        <div>
            count: {{count}}
        </div>
         <div>
            plusOne: {{plusOne}}
        </div>
        <div>
            obj: {{obj}}
        </div>
        <button @click="changeObj">Change obj</button>
        <div>
            foo: {{foo}}
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref, Ref, reactive, computed, onMounted } from "vue";
import lib from "@/lib/comparison-api-lib"
export default defineComponent({
    setup() {
        // const constVar: string = "this is const";
        const foo = lib.foo;
        const obj = reactive({ value: "" })
        let refExample: Ref<string> = ref("this is ref");

        onMounted(() => {
            console.log("onBrforeUnmount")
        })

        const changeObj = () => {
            obj.value = "change"
        }
        const count: Ref<number> = ref(0)
        const plusOne = computed({
            get: () => count.value + 1,
            set: (newVal) => {
                count.value = newVal - 1;
            },
        });

        return { obj, plusOne, count, changeObj, foo }
    }
})
</script>
<style lang="">
    
</style>