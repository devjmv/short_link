<script setup>
import LinkIcon from '@/components/icons/LinkIcon.vue';
import TotalIcon from '@/components/icons/TotalIcon.vue';

const props = defineProps({
    short: String,
    destination: String,
    description: String,
    tag: String
})
</script>

<template>
    <div class="mb-6 rounded-lg bg-white p-6">
        <div class="flex items-center justify-between">
            <div class="flex items-center">
                <div>
                    <a :href="props.short" class="font-semibold text-gray-900 hover:text-primary">{{ props.short }}</a>
                    <a :href="props.destination" class="block text-xs font-normal text-gray-500 hover:text-dark">{{ props.destination }}</a>
                </div>
            </div>
            <p class="text-sm font-medium text-red-600">{{ props.tag }}</p>
        </div>
        <p class="my-6 text-sm font-normal text-gray-500">{{ props.description }}</p>
        <div class="mt-6 flex items-center justify-between text-sm font-semibold text-gray-900">
            <div class="flex">
                <TotalIcon class="size-4 mr-2"/>
                <span class="mr-1">40</span> Task
            </div>
            <div class="flex items-center">
                <LinkIcon class="size-4 mr-2"/> 750
            </div>
        </div>
    </div>
</template>