<template>
 <main class ="flex flex-col items-center justify-center w-screen h-screen">
  <form class= "flex flex-col">
    <header> {{"Faça o seu registro" }}</header>
    <label class= "flex flex-col gap-2 max-w-100px" border p-8 @submit.prevent="register">
      name
      <InputText v-model="form.name"/>
      <Error :value="v$.form" field="name"/>
    </label>
    <label class= "flex flex-col gap-2">
      email
      <InputText v-model="form.email"/>
      <Error :value="v$.form" field="email"/>
    </label>
    <label class= "flex flex-col gap-2">
      password
      <Password v-model="form.password"/>
      <Error :value="v$.form" field="password" :feedback="false" toggleMask/>
    </label>
    <label class= "flex flex-col gap-2">
      ConfirmPass
      <Password v-model="form.ConfirmPass"/>
      <Error :value="v$.form" field="ConfirmPass" :feedback="false" toggleMask/>
    </label>
    <Button type="submit" :label="'Registrar'" :loading="loading"/>
  </form>
 </main>
</template>
<script lang="ts">
import {defineComponent} from 'vue'
import Error from '@/components/Error.vue'
export default defineComponent({
  components:{Error},
data(){
  return{
    form: new Registerform(),
    rest: new RegisterRest(),
    loading: false
  }
},
setup (){
  const authStore = useAuthStore()
  return{
  authStore,
    v$: useVuelidate()
  }
},
validations(){
  return{
    form:{
    name:{required, minLength:minLength(2), maxLength:maxLength(100)},
    email:{required, email},
    password:{required, minLength: minLength(8), maxLength:maxLength(72)},
    ConfirmPass:{required, sameAs:sameAs(this.form.password)},
   }
  }
},
methods:{
  register(){
    this.v$.$validate()
    if(this.v$.$invalid) return
    const body ={
      name: this.form.name,
      email: this.form.email,
      password: this.form.password,

    }
    this.loading =true
    this.rest
    .resgisterUser(body)
    .then((res)=>{
      this.authStore.setUser(res.data.user)
      this.authStore.setAccessToken(res.tokens.acessToken)
      this.authStore.setRefreshToken(res.tokens.refressToken)
      if (this.authStore.user.role === 'CUSTOMER'){
        this.$router.push({path:'history'})
      }
      if (this.authStore.user.role === 'ADMIN'){
        this.$router.push({path:'admin'})
      }
    })
    .catch(()=>{})
    .finally(()=>{
      this.loading =false
    })
  },
}

})

</script>
