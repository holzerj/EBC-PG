<template>
  <div class="flex flex-col h-screen bg-cover bg-no-repeat bg-center overflow-hidden overflow-y-auto" style="background-image:url('./bg.jpg');">
    <div class="bg-black py-4 pl-12">
      <logo class="h-8" />
    </div>
    <page />
  </div>
</template>

<script>
  import Logo from '@svg/Logo.vue'
  import { provide } from "vue"
  import store from '@/store'
  import Page from '@/components/Page.vue'

  export default {
    setup() {
      provide('store',store);
    },
    components:{
      Page,Logo
    }
  }

</script>

