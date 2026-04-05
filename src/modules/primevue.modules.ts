import type { App } from "vue";
import PrimeVue from 'primevue/config';
import Button from "primevue/button";
import Card from 'primevue/card'
import Aura from '@primeuix/themes/aura';

export function setPrimeVue(app: App):void{
  app.use (PrimeVue, {
  theme: {
    preset: Aura,
    },
})
app.component('Button', Button)
app.component('Card', Card)

}