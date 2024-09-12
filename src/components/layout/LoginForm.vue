<script setup>
import { ref } from 'vue'

const textAlert = ref('')

async function login() {
}

</script>
<template>
    <div class="w-full max-w-sm p-8 px-12 bg-light rounded-md shadow-md">
        <div class="flex items-center justify-center">
            <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
            <span class="font-gloria text-2xl ml-3">LogIn to Short Link</span>
        </div>

        <form class="mt-4" @submit.prevent="login">
            <div class="flex items-center justify-center mt-4">
                <p class="block text-sm text-verdigris fontme" href="#">Log in with your favorite social provider to get started:</p>
            </div>
            <div v-if="textAlert != ''"
                class="mt-4 font-regular relative block w-full rounded-lg bg-pink-500 p-4 text-base leading-5 text-white opacity-100"
                data-dismissible="alert">
                <div class="mr-12">{{ textAlert }}</div>
            </div>

            <div class="mt-6">
                <button type="submit"
                    class="w-full px-4 py-2 text-sm text-center text-white bg-primary rounded-md focus:outline-none hover:bg-secondary hover:text-dark">
                    Google
                </button>
            </div>
            <div class="mt-2">
                <button type="submit"
                    class="w-full px-4 py-2 text-sm text-center text-white bg-primary rounded-md focus:outline-none hover:bg-secondary hover:text-dark">
                    GitHub
                </button>
            </div>
        </form>
    </div>
</template>