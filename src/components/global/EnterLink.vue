<script setup>
import LinkIcon from '@/components/icons/LinkIcon.vue';
import { ClientStore } from '@/stores/client/ClientStore';
import { ref } from 'vue';
import CardLink from '../view/client/CardLink.vue';

const store = ClientStore()

const originUrl = ref('')
const textAlert = ref('')
const showResponse = ref(true)

async function createLink() {
    if (store.value != '')
        try {
            const response = await store.createLinkFree(originUrl.value);
            console.log(response);
            if (response.status === 400)
                textAlert.value = "Url Origin already in use";
            else
                showResponse.value = !showResponse.value
        } catch (error) {
            textAlert.value = "Error trying to create link, please try again.";
        }
    else
        textAlert.value = "The Url Origin can't be empty!";
}

const item = ref({
    "id": 1,
    "originUrl": "https://github.com/FactoriaF5-Asturias/P3-Digital-Academy-Project-FunkoShop-Frontend",
    "shortUrl": "qTRyV",
    "expirationDate": null,
    "userId": 1,
    "status": {
        "id": 1,
        "status": "ACTIVE",
        "reason": "Create Link",
        "statusUpdatedAt": "2024-10-05T20:17:01.210+00:00"
    }
})
</script>

<template>
    <div class="grid min-h-full place-items-center w-full max-w-[600px] px-4">
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
        <div v-if="showResponse" class="pt-5 w-full max-w-[450px]">
            <CardLink :links="item" />
        </div>
    </div>
</template>