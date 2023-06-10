<template>
  <ion-page>
    <ion-header>
      <ion-button expand="block">Boton</ion-button>
    </ion-header>

    <ion-content class="ion-text-center">

      <ion-text color="primary">
        <h1>Awesome text</h1>
      </ion-text>

    </ion-content>

    <ion-footer>
      <ion-button expand="block">Boton</ion-button>
    </ion-footer>

  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonText, IonButton, IonFooter } from '@ionic/vue';
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
