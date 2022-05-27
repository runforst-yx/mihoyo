<template>
  <div id="app">
    <HeaderView> </HeaderView>
    <router-view />
    <AsideView />
  </div>
</template>
<script>
import HeaderView from "./components/common/HeaderView.vue";
import AsideView from "./components/common/AsideView.vue";
export default {
  components: { HeaderView, AsideView },
};
</script>
<style></style>
