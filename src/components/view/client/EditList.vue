<script setup>
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { ref } from 'vue';
import EditLinkForm from '@/components/forms/EditLinkForm.vue';
import EditIcon from '@/components/icons/EditIcon.vue';

defineProps({
    link: Object,
})

const openProperties = ref(false)

const open = () => {
    openProperties.value = !openProperties.value
}

</script>

<template>
    <button @click="open()"
        class="mt-2 p-2 mr-2 rounded-md ring-1 ring-inset ring-gray-500/10 flex items-center text-sm text-dark dark:text-gray-500 hover:text-bglight hover:bg-dark dark:hover:bg-dark">
        <EditIcon class="mr-1.5 h-5 w-5 flex-shrink" aria-hidden="true" />
    </button>
    <TransitionRoot as="edit" :show="openProperties">
        <Dialog class="relative z-10" @close="open()">
            <TransitionChild as="edit" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100"
                leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-bgdark bg-opacity-75 transition-opacity" />
            </TransitionChild>

            <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center">
                    <TransitionChild as="edit" enter="ease-out duration-300"
                        enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200"
                        leave-from="opacity-100 translate-y-0 sm:scale-100"
                        leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                        <DialogPanel class="relative transform overflow-hidden rounded-lg shadow-xl transition-all ">
                            <EditLinkForm :link="link" @open="open" />
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>