<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
    <div class="flex flex-row flex-wrap text-6xl gap-8 text-green-500">
        <button @click="count--">-</button>
        <span>{{ count }}</span>
        <button @click="count++">+</button>
    </div>
</template>