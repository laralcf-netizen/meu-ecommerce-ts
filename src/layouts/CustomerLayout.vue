<template>
  <div class="flex flex-col min-h-screen">
    <menu class="p-4 flex flex-row items-center gap-4">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/products">Produtos</RouterLink>
    </menu>
     <div class="flex-1">
      <RouterView />
     </div>

  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  data(){
    return{
      items:[
        {
          label:'Home',
        }
      ]
    }
  }
})

</script>
