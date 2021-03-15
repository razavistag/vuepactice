<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-btn @click.stop="drawer = !drawer" text
          ><v-icon>mdi-menu</v-icon></v-btn
        >
        Demo Frontend
      </div>

      <v-spacer></v-spacer>

      <v-btn href="/" text>
        <span class="mr-2">Home</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
// import offline from "v-offline";

export default {
  name: "App",

  components: {
    HelloWorld,
    // offline,
  },

  data: () => ({
    drawer: true,
    group: null,
  }),
  computed: {
    networkStatus() {
      return this.isOnline ? "My network is fine" : "I am offline";
    },
  },
  mounted() {
    // console.log()
    // setInterval(function() {
    //  console.log('test')
    // }, 2000);
    if (this.isOnline) {
      // this.$toast.success("connected");
    } else {
      // this.$toast.error("your connection is Lost");
    }
  },
};
</script>
