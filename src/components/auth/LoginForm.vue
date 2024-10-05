<script setup>
import { useAuthStore } from '@/stores/auth/auth';
import { ref } from 'vue'
import { useRouter } from 'vue-router';

const store = useAuthStore()
const router = useRouter();

const username = ref('')
const password = ref('')
const textAlert = ref('')

async function login() {
    if (username.value != '' && password.value != '')
        try {
            const response = await store.login(username.value, password.value)

            if (response.id) {
                store.user.role = response['role']
                store.user.isAuthenticated = true
                store.user.access_token = response['access_token']
                store.user.refresh_token = response['refresh_token']

                localStorage.setItem('role', response['role'])
                localStorage.setItem('isAuthenticated', "true")
                localStorage.setItem('access_token', response['access_token'])
                localStorage.setItem('refresh_token', response['refresh_token'])

                username.value = '';
                password.value = '';
                textAlert.value = '';

                if (response['role'] == "ADMIN") {
                    router.push('/admin/products');
                }
            }
            else
                textAlert.value = "Incorrect username or password!";
        } catch (error) {
            textAlert.value = "Error trying to login, please try again.";
        }
    else
        textAlert.value = "The email and password can't be empty!";
}

</script>
<template>
    <div class="w-full max-w-sm p-8 px-12 bg-light rounded-md shadow-md">
        <div class="flex items-center justify-center">
            <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
            <span class="font-gloria text-2xl ml-3">LogIn to Short Link</span>
        </div>
        <form class="space-y-6" @submit.prevent="login">
            <div>
                <div class="mt-2">
                    <input v-model="username" id="email" name="email" type="email" autocomplete="email"
                        placeholder="Email"
                        class="block w-full rounded-md border-0 py-2 px-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:outline-primary sm:text-sm sm:leading-6" />
                </div>
            </div>

            <div>
                <div class="mt-2">
                    <input v-model="password" id="password" name="password" type="password"
                        autocomplete="current-password"
                        class="block w-full rounded-md border-0 py-2 px-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:outline-primary sm:text-sm sm:leading-6" />
                </div>
            </div>

            <div>
                <button type="submit"
                    class="w-full px-4 py-2 text-sm text-center text-white bg-primary rounded-md focus:outline-none hover:bg-secondary hover:text-dark">
                    Sign in
                </button>
            </div>

            <div v-if="textAlert != ''"
                class="mt-4 font-regular relative block w-full rounded-lg bg-red-500 p-4 text-base leading-5 text-white opacity-100"
                data-dismissible="alert">
                <div class="mr-12">{{ textAlert }}</div>
            </div>
        </form>
        <form class="mt-4">
            <div class="flex items-center justify-center mt-4">
                <p class="block text-sm text-verdigris fontme" href="#">Or log in with your favorite social provider to get
                    started:</p>
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