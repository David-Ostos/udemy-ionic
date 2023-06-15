<template>
  <ion-page>

    <ion-header class="ion-padding ion-no-border">
      <ion-button 
      class="ion-margin-top ion-margin-botton" 
      v-on:click="up()" 
      expand="block"
      :disabled="n===99"
      >
      <ion-icon :icon="caretUpOutline"></ion-icon>
      </ion-button>
    </ion-header>

    <ion-content class="ion-text-center scroll-null">

      <ion-text>{{ showNumber }}</ion-text>

    </ion-content>

    <ion-footer class="ion-padding ion-no-border">
      <ion-button class="ion-margin-top 
      ion-margin-botton" 
      v-on:click="down()" 
      expand="block"
      :disabled="n===0"
      >
      <ion-icon :icon="caretDownOutline"></ion-icon>
    </ion-button>
    </ion-footer>

  </ion-page>
</template>

<script setup lang="ts">
import {
    IonContent,
    IonHeader,
    IonPage,
    IonText,
    IonButton,
    IonFooter,
    IonIcon
  } from '@ionic/vue';

  import { caretDownOutline, caretUpOutline } from 'ionicons/icons';

  import { ref } from 'vue';
  console.log(caretDownOutline)

  /* 
  console.log(ref(showN.number()).value) */
  
  let n = ref(0)
  let showNumber = ref<string | number>("00")
  
  function up(){
    n.value++
    if(n.value < 10)
      showNumber.value = "0" + n.value
    else
      showNumber.value = "" + n.value
  }
  function down (){
    n.value--
    if(n.value < 10)
      showNumber.value = "0" + n.value
    else
      showNumber.value = "" + n.value
  }
  </script>
<style scoped>
 .scroll-null{
  --overflow: hidden
 }
</style>
