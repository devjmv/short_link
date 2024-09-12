<script setup>
import IconConf from '../icons/IconConf.vue';
import IconLink from '../icons/IconLink.vue';

</script>

<template>
    <div class='flex items-start justify-center min-h-screen dark:bg-bgdark'>
        <div class="flex rounded-full bg-bglight dark:bg-dark px-2 w-full max-w-[600px]">
            <button class="self-center flex p-1 cursor-pointer bg-bglight dark:bg-dark"> 
                <IconConf color="#828282" />
            </button>
            <input type="text" class="w-full flex bg-transparent pl-2 text-dark dark:text-light outline-0"
                placeholder="Search name movie or select options" />
            <button type="submit" class="relative p-2 bg-bglight dark:bg-dark rounded-full">
                <IconLink :color="'#828282'" />
            </button>
        </div>
    </div>
</template>