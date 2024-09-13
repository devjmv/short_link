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
    <div class="mb-6 rounded-lg bg-bglight dark:bg-dark p-6">
        <div class="flex items-center justify-between">
            <div class="flex items-center">
                <div>
                    <a :href="props.short" class="font-semibold text-gray-900 dark:text-light hover:text-primary">{{ props.short }}</a>
                    <a :href="props.destination" class="w-1/2 text-clip overflow-hidden block text-xs font-normal text-gray-600 dark:text-gray-500 hover:text-primary">{{ props.destination }}</a>
                </div>
            </div>
        </div>
        <p class="my-6 text-sm font-normal text-dark dark:text-gray-500">{{ props.description }}</p>
        <div class="mt-6 flex items-center justify-between text-sm font-semibold text-gray-900 dark:text-light">
            <div class="flex">
                <TotalIcon class="size-4 mr-2"/>
                <span class="mr-1">{{ props.tag }}</span> Tag
            </div>
            <div class="flex items-center">
                <LinkIcon class="size-4 mr-2"/> 750
            </div>
        </div>
    </div>
</template>