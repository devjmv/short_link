<script setup>
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue'
import LoginForm from './LoginForm.vue'
import { ModalStore } from '@/stores/modals/ModalStore'
import { useAuthStore } from '@/stores/auth/auth'
import { logoutStore } from '@/stores/auth/logout';
import RegisterForm from './RegisterForm.vue';

const modal = ModalStore()
const auth = useAuthStore()
const logout = logoutStore()


</script>
<template>
    <div v-if="!auth.user.isAuthenticated" class="hidden lg:flex lg:flex-1 lg:justify-end">
        <button @click="modal.open('login')"
            class="mt-2 p-2 rounded-md ring-1 ring-inset ring-gray-500/10 flex items-center text-sm text-dark dark:text-gray-50 dark:hover:text-dark hover:text-white hover:bg-dark dark:hover:bg-gray-50">
            Log in <span aria-hidden="true">&rarr;</span>
        </button>
        <button @click="modal.open('register')"
            class="mt-2 p-2 ml-2 rounded-md ring-1 ring-inset ring-gray-500/10 flex items-center text-sm text-dark dark:text-gray-50 dark:hover:text-dark hover:text-white hover:bg-dark dark:hover:bg-gray-50">
            Register
        </button>
    </div>

    <div v-if="auth.user.isAuthenticated" class="hidden lg:flex lg:flex-1 lg:justify-end">
        <button @click="logout.logout()"
            class="mt-2 p-2 rounded-md ring-1 ring-inset ring-gray-500/10 flex items-center text-sm text-dark dark:text-gray-500 dark:hover:text-dark hover:text-white hover:bg-dark dark:hover:bg-gray-50">
            Logout
        </button>
    </div>
    <TransitionRoot as="login" :show="modal.openLogin">
        <Dialog class="relative z-10" @close="modal.close()">
            <TransitionChild as="login" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100"
                leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-bgdark bg-opacity-75 transition-opacity" />
            </TransitionChild>

            <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center">
                    <TransitionChild as="login" enter="ease-out duration-300"
                        enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200"
                        leave-from="opacity-100 translate-y-0 sm:scale-100"
                        leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                        <DialogPanel class="relative transform overflow-hidden rounded-lg shadow-xl transition-all ">
                            <LoginForm />
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
    <TransitionRoot as="login" :show="modal.openRegister">
        <Dialog class="relative z-10" @close="modal.close()">
            <TransitionChild as="login" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100"
                leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-bgdark bg-opacity-75 transition-opacity" />
            </TransitionChild>

            <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center">
                    <TransitionChild as="login" enter="ease-out duration-300"
                        enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200"
                        leave-from="opacity-100 translate-y-0 sm:scale-100"
                        leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                        <DialogPanel class="relative transform overflow-hidden rounded-lg shadow-xl transition-all ">
                            <RegisterForm />
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>