<template>
  <div class="flex flex-row min-h-screen">
    <aside class="w-40 bg-amber-500 p-2">
      <ul class="flex flex-col gap-2">
        <li v-for="item in menuItems" :key="item.path">
          <RouterLink :to="item.path">
            {{ item.label }}
          </RouterLink>
        </li>
      </ul>
    </aside>

    <div class="flex-1 min-h-screen">
      <RouterView />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AdminLayout',
  setup() {
    const menuItems = [
      { label: 'Dashboard', path: '/admin/dashboard' },
      { label: 'Produtos',  path: '/admin/products'  },
    ]

    return { menuItems }
  },
})
</script>

