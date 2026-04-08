<template>
  <div class="flex flex-row min-h-screen">
    <aside class="w-40 bg-amber-500 p-2">
      <ul class="flex flex-col gap-2">
        <li>
          {{ item.label }}
        </li>
      </ul>
    </aside>
    <div class="flex-1 min-h-screen">
      <RouterView />
    </div>
  </div>
</template>

<script lang="ts">
import { item } from '@primeuix/themes/aura/breadcrumb';
import { defineComponent } from 'vue';
export default defineComponent

</script>
