<template>
  <ion-app>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Login Now!</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-grid>
        <ion-row justify-content-center>
          <ion-col align-self-center size-md="6" size-lg="5" size-xs="12">{{token}}</ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-app>
</template>

<script>
export default {
  data() {
    return {
      token: null
    };
  },
  created() {
    this.token = this.$store.getters.GET_TOKEN;
  }
};
</script>

<style>
</style>
