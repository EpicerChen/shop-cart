<template>
    <div>
        <div>{{ message }}</div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name:"globalComponentsTest",
    props: ['message'],
}) 
</script>
<style lang="">
    
</style>