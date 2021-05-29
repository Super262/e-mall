<template>
  <div>
    <router-view></router-view>
    <home-service-bar></home-service-bar>
    <index-nav-footer/>
  </div>
</template>

<script>
import IndexNavFooter from "../../components/IndexNavFooter";
import HomeServiceBar from "@/components/HomeServiceBar";

export default {
  name: "order",
  components: {HomeServiceBar, IndexNavFooter}
}
</script>

<style scoped>

</style>