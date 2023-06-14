<template>
  <ion-page>

    <ion-header class="ion-padding ion-no-border">
      <ion-button 
      class="ion-margin-top ion-margin-botton" 
      v-on:click="up()" 
      expand="block"
      >
      <i class="fa-solid fa-sort-up"></i>
      </ion-button>
    </ion-header>

    <ion-content class="ion-text-center">

      <ion-text>{{ showNumber }}</ion-text>

    </ion-content>

    <ion-footer class="ion-padding ion-no-border">
      <ion-button class="ion-margin-top 
      ion-margin-botton" 
      v-on:click="down()" 
      expand="block"
      >

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
    IonFooter
  } from '@ionic/vue';
  
  import { ref } from 'vue'

  /* 
  console.log(ref(showN.number()).value) */
  
  let n = ref<number>(0)
  let showNumber = ref<string>("00")
  
  function up(){
    console.log("up")
  }
  function down (){
    console.log("down")
  }

  </script>

<style scoped>
#container {
  text-align: center;

  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;

  color: #8c8c8c;

  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
