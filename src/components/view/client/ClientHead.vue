<script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import SearchIcon from '@/components/icons/SearchIcon.vue';
import ArrownDownIcon from '@/components/icons/ArrownDownIcon.vue';
import TotalIcon from '@/components/icons/TotalIcon.vue';
</script>

<template>
  <div class='flex items-start justify-center dark:bg-bgdark'>
    <div class="lg:flex lg:items-center lg:justify-between">
      <div class="min-w-0 flex-1">
        <div class="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
          <div
            class="mt-2 p-2 rounded-md ring-1 ring-inset ring-gray-500/10 flex items-center text-sm text-dark dark:text-gray-500 hover:text-bglight hover:bg-gray-400 dark:hover:bg-dark">
            <TotalIcon class="mr-1.5 h-5 w-5 flex-shrink-0 text-dark dark:text-gray-400" aria-hidden="true" />
            Full-time
          </div>
          <div
            class="mt-2 p-2 rounded-md ring-1 ring-inset ring-gray-500/10 flex items-center text-sm text-dark dark:text-gray-500 hover:text-bglight hover:bg-gray-400 dark:hover:bg-dark">
            <TotalIcon class="mr-1.5 h-5 w-5 flex-shrink-0 text-dark dark:text-gray-400" aria-hidden="true" />
            Remote
          </div>
        </div>
      </div>
      <div class="mt-5 flex lg:ml-4 lg:mt-0">
        <!-- Dropdown -->
        <Menu as="div" class="relative">
          <MenuButton
            class="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:ring-gray-400">
            More
            <ArrownDownIcon class="size-4" />
          </MenuButton>

          <transition enter-active-class="transition ease-out duration-200"
            enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
            leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100"
            leave-to-class="transform opacity-0 scale-95">
            <MenuItems
              class="absolute right-0 z-10 -mr-1 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <MenuItem v-slot="{ active }">
              <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Edit</a>
              </MenuItem>
              <MenuItem v-slot="{ active }">
              <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">View</a>
              </MenuItem>
            </MenuItems>
          </transition>
        </Menu>
      </div>
      <div class="mt-5 flex lg:ml-4 lg:mt-0">
        <div class="flex rounded-full bg-bglight dark:bg-dark px-2 w-full max-w-[600px]">
          <input type="text" class="w-full flex bg-transparent pl-2 text-dark dark:text-light outline-0"
            placeholder="Find a link..." />
          <button type="submit" class="relative p-2 bg-bglight dark:bg-dark rounded-full text-dark dark:text-light">
            <SearchIcon />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>