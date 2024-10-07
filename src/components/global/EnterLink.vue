<script setup>
import LinkIcon from '@/components/icons/LinkIcon.vue';
import { ClientStore } from '@/stores/client/ClientStore';
import { computed, ref } from 'vue';
import CardLink from '../view/client/CardLink.vue';

const store = ClientStore()
const listLinks = computed(() => {
    return store.listLinksGest
})

const originUrl = ref('')
const textAlert = ref('')
const showResponse = ref(false)
const item = ref({})

const createLink = async () => {
    if (originUrl.value != '')
        try {
            const response = await store.createLinkFree(originUrl.value)
            if (response.status === 400)
                textAlert.value = "Url Origin already in use"
            else {
                showResponse.value = !showResponse.value

                item.value = response
                store.addLinkGest(response)
                originUrl.value = ''
            }
        } catch (error) {
            textAlert.value = "Error trying to create link, please try again."
        }
    else
        textAlert.value = "The Url Origin can't be empty!"
}

</script>

<template>
    <div class="grid min-h-full place-items-center w-full gap-4 px-4">
        <div class="grid min-h-full place-items-center w-full max-w-[600px]">
            <div v-if="textAlert != ''"
                class="mt-2 mb-4 font-regular relative block w-full rounded-lg bg-red-500 p-4 text-base leading-5 text-white opacity-100"
                data-dismissible="alert">
                <div class="mr-12">{{ textAlert }}</div>
            </div>
            <div class="flex rounded-full bg-bglight dark:bg-dark px-2 w-full">
                <input v-model="originUrl" type="text"
                    class="w-full flex bg-transparent pl-2 text-dark dark:text-light outline-0"
                    placeholder="Enter the link to be shortened" />
                <button @click="createLink()"
                    class="relative p-2 bg-bglight dark:bg-dark rounded-full text-dark dark:text-light">
                    <LinkIcon />
                </button>
            </div>
        </div>
        <div class="grid min-h-full place-items-center w-full">
            <div class="grid place-content-center sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 2xl:grid-cols-4">
                <CardLink v-for="(item, index) in listLinks" :key="index" :links="item" class="mb-6" />
            </div>
        </div>
    </div>
</template>