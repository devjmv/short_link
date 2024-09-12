<script setup>
import { LinkIcon, } from '@heroicons/vue/24/solid';

</script>

<template>
    <div class="flex rounded-full bg-bglight dark:bg-dark px-2 w-full max-w-[600px]">
        <input type="text" class="w-full flex bg-transparent pl-2 text-dark dark:text-light outline-0"
            placeholder="Enter the link to be shortened" />
        <button type="submit" class="relative p-2 bg-bglight dark:bg-dark rounded-full">
            <LinkIcon class="-ml-0.5 mr-1.5 h-5 w-5 text-dark dark:text-gray-400" aria-hidden="true" />
        </button>
    </div>
</template>