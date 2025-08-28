<script setup>
import { Button } from 'primevue';
const props = defineProps({
    handleClick: {
        type: Function
    }
})
</script>

<template>
    <Button @click="props.handleClick">
        hello world
    </Button>
</template>