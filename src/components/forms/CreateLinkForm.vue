<script setup>
import { useAuthStore } from '@/stores/auth/auth';
import { ClientStore } from '@/stores/client/ClientStore';
import { ModalStore } from '@/stores/modals/ModalStore';
import { ref } from 'vue';

const store = ClientStore()
const auth = useAuthStore()
const modal = ModalStore()

const originUrl = ref('')
const shortUrl = ref('')
const textAlert = ref('')

async function createLink() {
    if (store.value != '')
        try {
            const response = await store.createLink(auth.user.access_token, originUrl.value, shortUrl.value == "" ? null : shortUrl.value);
            console.log(response);
            if (response.status === 400)
                textAlert.value = "Url Origin or Short Url already in use";
            else
                modal.close()
        } catch (error) {
            textAlert.value = "Error trying to create link, please try again.";
        }
    else
        textAlert.value = "The Url Origin can't be empty!";
}

</script>
<template>
    <div class="w-full max-w-sm p-8 px-12 bg-light rounded-md shadow-md">
        <div class="flex items-center justify-center">
            <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
            <span class="font-gloria text-2xl">Shorten Your Link</span>
        </div>
        <form class="space-y-6" @submit.prevent="createLink">

            <div v-if="textAlert != ''"
                class="mt-4 font-regular relative block w-full rounded-lg bg-red-500 p-4 text-base leading-5 text-white opacity-100"
                data-dismissible="alert">
                <div class="mr-12">{{ textAlert }}</div>
            </div>

            <div>
                <div class="mt-2">
                    <input v-model="originUrl" id="originUrl" name="originUrl" type="text" autocomplete="originUrl"
                        placeholder="Url Origin (Required)" required
                        class="block w-full rounded-md border-0 py-2 px-2 text-gray-900 shadow-sm placeholder:text-red-200 focus:outline-primary sm:text-sm sm:leading-6" />
                </div>
            </div>

            <div>
                <div class="mt-2">
                    <input v-model="shortUrl" id="shortUrl" name="shortUrl" type="text" autocomplete="shortUrl"
                        placeholder="Short Url"
                        class="block w-full rounded-md border-0 py-2 px-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:outline-primary sm:text-sm sm:leading-6" />
                </div>
            </div>

            <div>
                <button type="submit"
                    class="w-full px-4 py-2 text-sm text-center text-white bg-primary rounded-md focus:outline-none hover:bg-secondary hover:text-dark">
                    Create
                </button>
            </div>

        </form>
    </div>
</template>