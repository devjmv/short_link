<script setup>
import LinkIcon from '@/components/icons/LinkIcon.vue';
import TotalIcon from '@/components/icons/TotalIcon.vue';

const baseUrl = import.meta.env.VITE_API_URL

defineProps({
    links: Object,
})
</script>

<template>
    <div class="rounded-lg bg-bglight dark:bg-dark p-6 overflow-hidden">
        <div class="flex items-center justify-between">
            <div class="flex items-center">
                <div class="max-w-full">
                    <!-- Limitar el ancho con max-w y usar word-break para cortar el texto -->
                    <a :href="baseUrl + links.shortUrl" target="_blank" rel="noopener noreferrer"
                        class="font-semibold text-gray-900 dark:text-light hover:text-primary block max-w-[400px] word-break break-all">
                        {{ baseUrl + links.shortUrl }}
                    </a>
                    <a :href="links.originUrl" target="_blank" rel="noopener noreferrer"
                        class="w-full text-xs font-normal text-gray-600 dark:text-gray-500 hover:text-primary block max-w-[300px] word-break break-all">
                        {{ links.originUrl }}
                    </a>
                </div>
            </div>
        </div>
        <p class="my-6 text-sm font-normal text-dark dark:text-gray-500">
            State: {{ links.status.status }} Reason: {{ links.status.reason }}
        </p>
        <div class="mt-6 flex items-center justify-between text-sm font-semibold text-gray-900 dark:text-light">
            <div class="flex">
                <TotalIcon class="size-4 mr-2" />
                <span class="mr-1 max-w-[150px] break-all">{{ links.tag }}</span> Tag
            </div>
            <div class="flex items-center">
                <LinkIcon class="size-4 mr-2" />
                <span class="max-w-[150px] break-all">{{ links.tag }}</span>
            </div>
        </div>
    </div>
</template>