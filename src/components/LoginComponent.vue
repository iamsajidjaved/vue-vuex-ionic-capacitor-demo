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
          <ion-col align-self-center size-md="6" size-lg="5" size-xs="12">
            <div text-center>
              <h4>Login Now!</h4>
            </div>
            <div padding>
              <ion-item>
                <ion-input
                  type="text"
                  placeholder="Username"
                  name="email"
                  v-model="email"
                  v-bind:value="email"
                  v-on:ionInput="email=$event.target.value"
                ></ion-input>
              </ion-item>

              <ion-item>
                <ion-input
                  type="password"
                  placeholder="Password"
                  name="password"
                  v-model="password"
                  v-bind:value="password"
                  v-on:ionInput="password=$event.target.value"
                ></ion-input>
              </ion-item>
            </div>

            <div padding>
              <ion-button color="primary" @click="login">Let me In</ion-button>
            </div>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-app>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      email: null,
      password: null
    };
  },
  methods: {
    login() {
      this.$store.dispatch("Login", {
        name: this.email,
        password: this.password
      });
    }
  }
};
</script>

<style>
</style>
