<template>
<span v-if="value?.$errors.length>0">
        <p v-if="error in value?.[`${field}`].$errors">
          {{error.$message}}
        </p>
      </span>
</template>
<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({
  props:{
    value:{
      type:Object,
    },
      field {
      type:String,
    },
  },
})
</script>
