<script setup>
import CardLink from '@/components/view/client/CardLink.vue';
import ClientHead from '@/components/view/client/ClientHead.vue';

const links = [
  { short: 'https://shotlink.com/u3h4b5', destination: 'https://www.youtube.com/watch?v=rwIFN450NUQ&list=PLb9gJ6hvvBcdon6FkVS5oavn6vQy134zv&index=6', description: 'Spring Authorization Server es un framework que implementa las especificaciones OAuth 2.1 y OpenID Connect 1.0 y otras especificaciones relacionadas. Está construido sobre Spring Security para.', tag: '45' },
  { short: 'https://shotlink.com/u3h4b5', destination: 'https://www.youtube.com/watch?v=rwIFN450NUQ&list=PLb9gJ6hvvBcdon6FkVS5oavn6vQy134zv&index=6', description: 'Spring Authorization Server es un framework que implementa las especificaciones OAuth 2.1 y OpenID Connect 1.0 y otras especificaciones relacionadas. Está construido sobre Spring Security para.', tag: '45' },
  { short: 'https://shotlink.com/u3h4b5', destination: 'https://www.youtube.com/watch?v=rwIFN450NUQ&list=PLb9gJ6hvvBcdon6FkVS5oavn6vQy134zv&index=6', description: 'Spring Authorization Server es un framework que implementa las especificaciones OAuth 2.1 y OpenID Connect 1.0 y otras especificaciones relacionadas. Está construido sobre Spring Security para.', tag: '45' },
  { short: 'https://shotlink.com/u3h4b5', destination: 'https://www.youtube.com/watch?v=rwIFN450NUQ&list=PLb9gJ6hvvBcdon6FkVS5oavn6vQy134zv&index=6', description: 'Spring Authorization Server es un framework que implementa las especificaciones OAuth 2.1 y OpenID Connect 1.0 y otras especificaciones relacionadas. Está construido sobre Spring Security para.', tag: '45' },
  { short: 'https://shotlink.com/u3h4b5', destination: 'https://www.youtube.com/watch?v=rwIFN450NUQ&list=PLb9gJ6hvvBcdon6FkVS5oavn6vQy134zv&index=6', description: 'Spring Authorization Server es un framework que implementa las especificaciones OAuth 2.1 y OpenID Connect 1.0 y otras especificaciones relacionadas. Está construido sobre Spring Security para.', tag: '45' },
  { short: 'https://shotlink.com/u3h4b5', destination: 'https://www.youtube.com/watch?v=rwIFN450NUQ&list=PLb9gJ6hvvBcdon6FkVS5oavn6vQy134zv&index=6', description: 'Spring Authorization Server es un framework que implementa las especificaciones OAuth 2.1 y OpenID Connect 1.0 y otras especificaciones relacionadas. Está construido sobre Spring Security para.', tag: '45' },
  { short: 'https://shotlink.com/u3h4b5', destination: 'https://www.youtube.com/watch?v=rwIFN450NUQ&list=PLb9gJ6hvvBcdon6FkVS5oavn6vQy134zv&index=6', description: 'Spring Authorization Server es un framework que implementa las especificaciones OAuth 2.1 y OpenID Connect 1.0 y otras especificaciones relacionadas. Está construido sobre Spring Security para.', tag: '45' },
]
</script>

<template>
  <ClientHead class="pt-20" />
  <div class="min-h-screen pt-10 pb-10">
    <div class="mx-auto">
      <main class="">
        <div class="px-4">
          <div class="grid sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3">
            <CardLink v-for="(item, index) in links" :key="index" :short="item.short" :destination="item.destination" :description="item.description" :tag="item.tag"/>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
