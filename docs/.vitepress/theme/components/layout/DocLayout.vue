<script lang="ts" setup>
import DefaultTheme from 'vitepress/theme'
import MouseFollower from "../MouseFollower.vue";
import {nextTick, provide} from 'vue'
import {useData} from 'vitepress'

const enableTransitions = () => {
  return 'startViewTransition' in document && window.matchMedia('(prefers-reduced-motion: no-preference)').matches
}

const toggleDark = (isDark) => {
  provide('toggle-appearance', async ({clientX: x, clientY: y}: MouseEvent) => {
    //如果不支持动效直接切换
    if (!enableTransitions()) {
      isDark.value = !isDark.value
      return
    }
    document.documentElement.style.setProperty('--darkX', x + 'px')
    document.documentElement.style.setProperty('--darkY', y + 'px')
    // 原生的视图转换动画 https://developer.mozilla.org/zh-CN/docs/Web/API/Document/startViewTransition
    // pnpm add -D @types/dom-view-transitions 解决 document.startViewTransition 类型错误的问题
    await document.startViewTransition(async () => {
      isDark.value = !isDark.value
      await nextTick()
    }).ready
  })
}

const {isDark} = useData()
// 实现切换主题过渡动画
toggleDark(isDark)

</script>
<template>
  <DefaultTheme.Layout>

    <template #layout-top>
      <MouseFollower/>
    </template>

  </DefaultTheme.Layout>
</template>