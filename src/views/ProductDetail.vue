<template>
<div v-if="product?.id">
<ProductCard :product="product"/>
</div>
<div v-else>
  Não existe esse produto!
</div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import Product from './Product.vue';
import ProductCard from '@/components/card/ProductCard.vue';
export default defineComponent ({
  data () {
  return{
    productId:this.$route.params.id,
    product: {} as Product | undefined,
  }
  },
  components:{ProductCard},
  methods:{
    getProduct(){
      const product= [new Product ('1', 'Guitarra', 'descrição', 200, 0.2)].find((p) => p.id === this.productId,)
      this.product = product
      console.log(product)
    },
  },
  mounted(){
    this.getProduct()
  }
})
</script>
