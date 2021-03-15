<template>
  <div class="home">
    <v-row>
      <v-col md="12">hey
        <v-btn color="red">test</v-btn>
      </v-col>
    </v-row>
    <p class="css_style" >TEST From CSS</p>
    <p class="text_color">TEST From Scss</p>
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
      companies: [
        {
          id: 1,
          name: "E Corp",
        },
        {
          id: 2,
          name: "Allsafe",
        },
      ],
    };
  },
  mounted(){
    console.log(this.companies[0].name)
  }
};
</script>
<style lang="scss">
@import "./style/style.scss";

// $bg-background: #283593;
// $text-color: #ffffff;

.css_style {
  background-color: #26a69a;
  color: #ffffff;
}
.text_color {
  background: $bg-background;
  color: $text-color;
}
</style>
