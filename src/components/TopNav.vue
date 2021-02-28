<template>
  <section class="topnav">
    <div class="logo" @click="toggleAside">logo</div>
    <div class="menu">
      <router-link to="/">首页</router-link>
      <router-link to="/doc">文档</router-link>
    </div>
  </section>
</template>
<script lang="ts">
import { inject, Ref } from 'vue';
export default {
  setup() {
    let asideVisible = inject<Ref<boolean>>('asideVisible');
    const toggleAside = () => {
      asideVisible.value = !asideVisible.value;
    };
    return {
      toggleAside,
    };
  },
};
</script>

<style lang="scss" scoped>
.topnav {
  background: pink;
  display: flex;
  padding: 16px;
  position: relative;
  z-index: 10;
  > .logo {
    max-width: 6em;
    margin-right: auto;
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
  }
}
</style>
