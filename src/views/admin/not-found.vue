<template>
  <main class = "flex flex-col items-center justify-center min-h-screen">
    <h1>{{'Não encontrado 404'}}</h1>
    <Button : label = "'Voltar'" @click = "goBack"/>
  </main>
</template>
<script lang= "ts">
import {defineComponent} from 'vue'
export default defineComponent ({
  methods:{
    goBack(){
      this.$router.push('/')
    },
  },

})
</script>
