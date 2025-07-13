<script lang="ts" setup>
import DefaultTheme from 'vitepress/theme'
import MouseFollower from "../MouseFollower.vue";
</script>
<template>
  <DefaultTheme.Layout>

    <template #layout-top>
      <MouseFollower/>
    </template>

  </DefaultTheme.Layout>
</template>