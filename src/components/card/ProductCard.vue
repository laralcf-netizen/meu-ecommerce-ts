<template>
  <Card>
    <template #header>
      <img :src="'https://picsum.photos/200'" class="w-full object-cover">

    </template>
    <template #title>{{ product.title }}</template>
    <template #content>
      <p>{{ product.description }}</p>
      <p>{{ product.getPrice() }}</p>
    </template>
    <template #footer>
      <Button @click="$emit('onAddItem', product)">Adicionar</Button>
    </template>
  </Card>
</template>

<script lang="ts">
import { Product } from '../../model/product.model';
import Card from 'primevue/card';
import Button from 'primevue/button';

export default {
  components: { Card, Button},
  props: {
    product: {
      type: Object as () => Product,
      required: true,
    },
  },
  emits: ['onAddItem'],
};
</script>