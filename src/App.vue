<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div>
    <router-link to="/">首页</router-link>
    <router-link to="/doc">doc</router-link>
  </div>
  <router-view />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>
