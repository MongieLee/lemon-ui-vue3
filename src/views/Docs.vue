<template>
  <main>
    <Topnav />
    <section v-if="asideVisible" class="content">
      <aside>
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs组件</router-link>
          </li>
        </ol>
      </aside>
      <main>main</main>
    </section>
  </main>
</template>

<script lang="ts">
import Topnav from '../components/TopNav.vue';
import { inject, Ref } from 'vue';
export default {
  components: { Topnav },
  setup() {
    const asideVisible = inject<Ref<boolean>>('asideVisible');
    return {
      asideVisible,
    };
  },
};
</script>

<style lang="scss" scoped>
aside {
  background: lightblue;
  width: 150px;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 60px;
  > h2 {
    margin-bottom: 4px;
  }
  ol {
    li {
      padding: 4px 0;
    }
  }
}
</style>
