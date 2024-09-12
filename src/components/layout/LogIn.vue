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
    <a href="#" v-if="!props.hidde" @click="modificarLogin" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
        Log in
    </a>
</template>