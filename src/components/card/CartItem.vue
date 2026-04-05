<template>
  <div>
    <Card :style="{ width: '100%', minWidth: '200px', maxWidth: '420px' }">
      <template #content>
        <div class="flex flex-row gap-2">
          <img :src="'https://picsum.photos/200'" class="w-20" />
          <h3 class="flex-1 px-4">{{ item.product.title }}</h3>
           <p>{{ item.product.getPrice() }}</p>
        </div>
      </template>
      <template #footer>
        <div class="flex flex-row-reverse">
          <span>
            {{ item.quantity }}
            <button @click="$emit('onDecrementItem', item.product)">
              {{ ' - ' }}
            </button>
          </span>
          <Button @click="$emit('onRemoveItem', item.product)">
            Deletar
          </Button>
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup lang="ts">
import type {CartItem }from '../../model/cart.model';
import Card from 'primevue/card';
import Button from 'primevue/button';
import type { Product } from '@/model/product.model';
defineProps<{
  item: CartItem;
}>();

defineEmits<{
  (e: 'onRemoveItem', product: Product): void;
  (e: 'onDecrementItem', product: Product): void;
}>();
</script>