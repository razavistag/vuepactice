<template>
  <div class="home">
    <!-- <Dashboard/> -->
    Home View
    <v-container>
      <v-row>
        <v-col cols="12" sm="6" md="3">
          <v-text-field label="Name" v-model="t1" outlined></v-text-field>
        </v-col>

        <v-col cols="12" sm="6" md="3">
          <v-text-field label="Name" v-model="t2" outlined></v-text-field>
        </v-col>

        <v-col cols="12" sm="6" md="3">
          <v-text-field label="Name" v-model="t3" outlined></v-text-field>
        </v-col>

        <v-col cols="12" sm="6" md="3">
          <v-btn color="primary" @click="submit">Submit</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  data() {
    return {
      mini: true,
    };
  },
  methods:{
    submit(){
      if (!this.isOnline) {
         this.$toast.error("your connection is Lost");
      }
      else{
         this.$toast.success("post");
        
      }
    }
  }
};
</script>
