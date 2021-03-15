<template>
  <div id="Dashboard">
    
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  watch: {
    group() {
      this.drawer = false;
    },
  },
  data() {
    return {
      drawer: true,
      group: null,
    };
  },
};
</script>

<style></style>
