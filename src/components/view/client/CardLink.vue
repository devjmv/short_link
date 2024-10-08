<script setup>
import ClicksIcon from '@/components/icons/ClicksIcon.vue';
import LinkIcon from '@/components/icons/LinkIcon.vue';
import TotalIcon from '@/components/icons/TotalIcon.vue';
import { useAuthStore } from '@/stores/auth/auth';
import ModalAccess from './ModalAccess.vue';
import EditList from './EditList.vue';
import { ref } from 'vue';

const baseUrl = import.meta.env.VITE_API_URL

const auth = useAuthStore()

const props = defineProps({
    links: Object,
})

const shortLink = ref(baseUrl + props.links.shortUrl)



const emit = defineEmits(['changeState'])
</script>

<template>
    <div class="rounded-lg flex flex-col justify-between bg-bglight dark:bg-dark p-6 overflow-hidden"
        :class="links.status.status == 'INACTIVE' ? 'opacity-50 hover:opacity-100' : 'border border-green-900 dark:border-green'">
        <div class="flex items-center justify-between">
            <div class="flex items-center">
                <div class="max-w-full">
                    <a :href="shortLink" target="_blank" rel="noopener noreferrer"
                        class="font-semibold text-gray-900 dark:text-light hover:text-primary block max-w-[400px] word-break break-all">
                        {{ shortLink }}
                    </a>
                    <a :href="links.originUrl" target="_blank" rel="noopener noreferrer"
                        class="w-full text-xs font-normal text-gray-600 dark:text-gray-500 hover:text-primary block max-w-[300px] word-break break-all">
                        {{ links.originUrl }}
                    </a>
                </div>
            </div>
        </div>
        <div class="mt-6 flex items-center justify-between text-sm font-semibold text-gray-900 dark:text-light">
            <button v-if="links.status.status == 'ACTIVE' && auth.user.isAuthenticated"
                @click="emit('changeState', links.status.id)"
                class="mt-2 p-2 rounded-md ring-1 ring-inset ring-red-900 flex items-center text-sm text-dark dark:text-gray-500 hover:text-bglight hover:bg-red-900 dark:hover:bg-red-500">
                <TotalIcon class="mr-1.5 h-5 w-5 flex-shrink" aria-hidden="true" />
                {{ links.status.status == 'ACTIVE' ? 'Disable' : '' }}
            </button>
            <button v-if="links.status.status == 'INACTIVE' && auth.user.isAuthenticated"
                @click="emit('changeState', links.status.id)"
                class="mt-2 p-2 rounded-md ring-1 ring-inset ring-green-900 flex items-center text-sm text-green-500 dark:text-green-200 hover:text-green-200 hover:bg-green-900 dark:hover:bg-green-900">
                <LinkIcon class="mr-1.5 h-5 w-5 flex-shrink" aria-hidden="true" />
                {{ links.status.status == 'INACTIVE' ? 'Enable' : '' }}
            </button>
            <span v-if="auth.user.isAuthenticated" class="flex flex-row items-center">
                <EditList :link="links" @changeState="emit('changeState')"/>
                <ModalAccess :accessLogs="links.accessLogs" />
                <span
                    class="mt-2 p-2 rounded-md ring-1 ring-inset ring-gray-500/10 flex items-center text-sm text-dark dark:text-gray-500 hover:text-bglight hover:bg-dark dark:hover:bg-dark">
                    <ClicksIcon class="h-5 w-5 flex-shrink" aria-hidden="true" /> {{ links.accessLogs.length }}
                </span>
            </span>
        </div>
        <div class="mt-0 flex items-center justify-between text-sm font-semibold text-gray-900 dark:text-light">
            <button
                class="mt-2 p-2 rounded-md ring-1 ring-inset ring-gray-500/10 flex items-center text-sm text-dark dark:text-gray-500 hover:text-bglight hover:bg-dark dark:hover:bg-dark"
                @click="window.open('https://www.facebook.com/sharer/sharer.php?u=' + shortLink.value, 'facebook', 'width=800, height=600, resizable, scrollbars=yes, status=1')">Facebook</button>
            <button
                class="mt-2 p-2 rounded-md ring-1 ring-inset ring-gray-500/10 flex items-center text-sm text-dark dark:text-gray-500 hover:text-bglight hover:bg-dark dark:hover:bg-dark"
                @click="window.open('https://twitter.com/share?url=' + shortLink.value, 'twitter', 'width=800, height=600, resizable, scrollbars=yes, status=1')">X</button>
            <button
                class="mt-2 p-2 rounded-md ring-1 ring-inset ring-gray-500/10 flex items-center text-sm text-dark dark:text-gray-500 hover:text-bglight hover:bg-dark dark:hover:bg-dark"
                @click="window.open('https://pinterest.com/pin/create/link/?url=' + shortLink.value, 'pinterest', 'width=800, height=600, resizable, scrollbars=yes, status=1')">Pinterest</button>
            <button
                class="mt-2 p-2 rounded-md ring-1 ring-inset ring-gray-500/10 flex items-center text-sm text-dark dark:text-gray-500 hover:text-bglight hover:bg-dark dark:hover:bg-dark"
                @click="window.open('whatsapp://send?text=' + shortLink.value)">WhatsApp</button>
        </div>
        <div class="mt-0 flex items-center justify-between text-sm font-semibold text-gray-900 dark:text-light">
            <button
                class="mt-2 p-2 rounded-md ring-1 ring-inset ring-gray-500/10 flex items-center text-sm text-dark dark:text-gray-500 hover:text-bglight hover:bg-dark dark:hover:bg-dark"
                @click="window.open('https://telegram.me/share/url?url=' + shortLink.value, 'telegram', 'width=800, height=600, resizable, scrollbars=yes, status=1')">Telegram</button>
            <button
                class="mt-2 p-2 rounded-md ring-1 ring-inset ring-gray-500/10 flex items-center text-sm text-dark dark:text-gray-500 hover:text-bglight hover:bg-dark dark:hover:bg-dark"
                @click="window.open('https://www.reddit.com/submit?url=' + shortLink.value, 'reddit', 'width=800, height=600, resizable, scrollbars=yes, status=1')">Reddit</button>
            <button
                class="mt-2 p-2 rounded-md ring-1 ring-inset ring-gray-500/10 flex items-center text-sm text-dark dark:text-gray-500 hover:text-bglight hover:bg-dark dark:hover:bg-dark"
                @click="window.open('https://www.tumblr.com/share/link?url=' + shortLink.value, 'tumblr', 'width=800, height=600, resizable, scrollbars=yes, status=1')">Tumblr</button>
            <button
                class="mt-2 p-2 rounded-md ring-1 ring-inset ring-gray-500/10 flex items-center text-sm text-dark dark:text-gray-500 hover:text-bglight hover:bg-dark dark:hover:bg-dark"
                @click="window.open('http://www.linkedin.com/shareArticle?mini=true&amp;url=' + shortLink.value, 'linkedin', 'width=800, height=600, resizable, scrollbars=yes, status=1')">LinkedIn</button>
        </div>
    </div>
</template>
