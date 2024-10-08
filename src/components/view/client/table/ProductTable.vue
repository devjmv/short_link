<script setup>
import BaseTable from './BaseTable.vue';
import ProductTableRow from './ProductTableRow.vue'

defineProps({
    accessLogs: Array,
})

</script>

<template>
  <div>
    <BaseTable :headers="['Access Time', 'IP','userAgent']">
      <ProductTableRow 
        v-for="access in accessLogs" 
        :key="access.id" 
        :access="access"
      />
    </BaseTable>
  </div>
</template>
