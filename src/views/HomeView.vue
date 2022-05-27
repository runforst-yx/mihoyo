<template>
  <div class="home">
    <MainView></MainView>
    <MapView />
  </div>
</template>

<script>
import MainView from "../components/home/MainView.vue";
import MapView from "../components/home/MapView.vue";
export default {
  name: "HomeView",
  components: {
    MainView,
    MapView,
  },
};
</script>
<style lang="scss" scoped>
.home {
  position: relative;
}
</style>
