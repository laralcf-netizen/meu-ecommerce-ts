<template>
  <Card>
    <template #header>
      <img :src="mainImage" class="w-full object-cover">

    </template>
    <template #title>{{ product.name }}</template>
    <template #content>
      <p>{{ product.description }}</p>
      <p>{{ product.getPrice() }}</p>
    </template>
    <template #footer>
      <PrimeButton @click="$emit('onAddItem', product)">Adicionar</PrimeButton>
    </template>
  </Card>
</template>

<script lang="ts">
import { Product } from '../../model/product.model';
import Card from 'primevue/card';
import Button from 'primevue/button';

export default {
  components: { Card, PrimeButton: Button},
  props: {
    product: {
      type: Object as () => Product,
      required: true,
    },
  },
  emits: ['onAddItem'],
  computed:{
    mainImage(): string{
    return this.product.images.find((i)=> i.isMain)?.url ?? 'https://picsum.photos/200'
    }
  }
};
</script>
