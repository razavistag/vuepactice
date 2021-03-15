<template>
  <div class="home">
    <!-- <Dashboard/> -->
    <v-alert
      border="right"
      colored-border
      type="error"
      dismissible
      elevation="2"
      style="z-index:10; top:-50px"
      v-if="browserSupportAlert"
    >
      We Support to Chrome & Firefox browsers. Please download supported browser
      from {{ browser }}
    </v-alert>

    <v-alert
      dense
      type="error"
      style="z-index:10; top:-50px"
      dismissible
      v-if="browserSupportVersionAlert"
    >
      Browser <strong>update</strong> required.
    </v-alert>

    <v-container>
      <v-row>
        <v-col cols="12" sm="6" md="3">
          <v-text-field
            label="Name"
            v-model="price"
            outlined
            @input="txtChange"
          ></v-text-field>
          <h4>{{ strPrice }}</h4>
        </v-col>

        <v-col cols="12" sm="6" md="3">
          <v-text-field label="Name" outlined></v-text-field>
        </v-col>

        <v-col cols="12" sm="6" md="3">
          <v-text-field label="Name" outlined></v-text-field>
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
      browser: null,
      browser_version: null,
      browserSupportAlert: null,
      browserSupportVersionAlert: null,
      latest_Firefox_v: 86, //86 latest
      latest_Chrome_m_v: 89, //89 latest
      latest_Chrome_d_v: 89,
      price: 0,
      strPrice: 0,
    };
  },

  mounted() {
    var result = detect.parse(navigator.userAgent);
    console.log(result.browser);

    this.browser = result.browser.family;
    this.browser_version = result.browser.version;

    if (
      this.browser != "Chrome Mobile" &&
      this.browser != "Chrome Desktop" &&
      this.browser != "Firefox"
    ) {
      // console.log("not supported");
      this.browserSupportAlert = true;
    } else {
      // console.log("supported");
      this.browserSupportAlert = false;
    }

    if (this.browser == "Chrome Mobile") {
      if (this.browser_version > this.latest_Chrome_m_v) {
        this.browserSupportVersionAlert = true;
        console.log("indicate update " + this.browser_version);
      } else {
        console.log("version satisfied " + this.browser_version);
      }
    }

    if (this.browser == "Chrome Desktop") {
      if (this.browser_version > this.latest_Chrome_d_v) {
        this.browserSupportVersionAlert = true;
        console.log("indicate update " + this.browser_version);
      } else {
        console.log("version satisfied " + this.browser_version);
      }
    }

    if (this.browser == "Firefox") {
      if (this.browser_version > this.latest_Firefox_v) {
        this.browserSupportVersionAlert = true;
        console.log("indicate update " + this.browser_version);
      } else {
        console.log("version satisfied " + this.browser_version);
      }
    }

    // console.log("Browser Detected :- " + result.browser.family);
    // console.log("Browser version :- " + result.browser.version);
  },
  methods: {
    submit() {
      if (!this.isOnline) {
        this.$toast.error("your connection is Lost");
      } else {
        this.$toast.success("post");
      }
    },
    txtChange($e) {
      var numeral = require("numeral");
      let pr = $e;
      var number = numeral(pr);
      this.price = number.format();
      this.strPrice = number.value();
    },
  },
};
</script>
