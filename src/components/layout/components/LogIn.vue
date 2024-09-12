<script setup>
const props = defineProps({
    hidde: String
})
</script>
<template>
    <div v-if="props.hidde" class="hidden lg:flex lg:flex-1 lg:justify-end">
        <a href="#" class="text-sm font-semibold leading-6 text-dark dark:text-light">Log in <span
                aria-hidden="true">&rarr;</span></a>
    </div>
    <a href="#" v-if="!props.hidde" @click="modificarLogin" class="text-sm font-semibold leading-6 text-gray-900">
        Log in
    </a>
</template>