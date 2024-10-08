<script setup>
defineProps({
  access: Object
})

</script>

<template>
  <tr class="bg-slate-50 hover:bg-gray-100 text-slate-900 border-t border-slate-300">
    <td class="px-4 py-3 font-semibold break-all">{{ access.accessTime }}</td>
    <td class="px-4 py-3 break-all">{{ access.ipAddress }}</td>
    <td class="px-4 py-3 break-all">{{ access.userAgent }}</td>
  </tr>
</template>
