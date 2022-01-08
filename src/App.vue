<script setup lang="ts">
import { ref } from 'vue';
const transitionName = ref('slide-left');

</script>

<template>
  <router-view class="router-view" v-slot="{ Component, route }">
    <transition :name="transitionName">
      <keep-alive>
        <component :is="Component" :key="route.path" />
      </keep-alive>
    </transition>
  </router-view>
</template>

<style>
html,
body {
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
}

#app {
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
