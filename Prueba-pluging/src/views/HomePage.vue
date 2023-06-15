<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Blank</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <img :src="imageURL"/>
      <button @click="makePhoto">Take Photo</button>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { Camera, CameraResultType } from '@capacitor/camera'
import { ref } from 'vue';

const imageURL = ref()

const makePhoto = async () => {
  const image = await Camera.getPhoto({
    quality: 80,
    allowEditing: true,
    resultType: CameraResultType.Uri
  })
  
  imageURL.value = image.webPath


}

</script>

<style scoped>

</style>
