<script setup>
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { ref } from 'vue';
import LoginForm from './LoginForm.vue';

const props = defineProps({
    hidde: String
})

const loginChange = ref(false)

const modificarLogin = () => {
    loginChange.value = !loginChange.value
}

</script>
<template>
    <div v-if="props.hidde" class="hidden lg:flex lg:flex-1 lg:justify-end">
        <a @click="modificarLogin" href="#" class="text-sm font-semibold leading-6 text-dark dark:text-light">Log in <span
                aria-hidden="true">&rarr;</span></a>
    </div>
    <a href="#" v-if="!props.hidde" @click="modificarLogin" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
        Log in
    </a>
    <TransitionRoot as="login" :show="loginChange">
        <Dialog class="relative z-10" @close="modificarLogin">
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
                        <DialogPanel
                            class="relative transform overflow-hidden rounded-lg shadow-xl transition-all ">
                            <LoginForm />
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>