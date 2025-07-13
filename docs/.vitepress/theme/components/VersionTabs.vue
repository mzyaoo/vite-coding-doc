<!-- docs/.vitepress/components/VersionTabs.vue -->
<template>
  <div class="version-tabs">
    <div class="tab-header">
      <button
          v-for="(tab, index) in tabs"
          :key="index"
          :class="{ active: index === activeTab }"
          @click="activeTab = index"
      >
        {{ tab.label }}
      </button>
    </div>
    <div class="tab-content">
      <slot :name="tabs[activeTab].slot"/>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'

const props = defineProps({
  tabs: {
    type: Array,
    required: true // 如：[{ label: '2021.0.x', slot: 'v2021' }, ...]
  }
})

const activeTab = ref(0)
</script>

<style scoped>
.version-tabs {
  margin: 1.5rem 0;
}

.tab-header {
  display: flex;
  border-bottom: 1px solid #e2e2e2;
}

.tab-header button {
  padding: 8px 16px;
  border: none;
  background: none;
  cursor: pointer;
  font-weight: 500;
  font-size: 14px;
  color: #666;
  border-bottom: 2px solid transparent;
}

.tab-header button.active {
  color: #2c7be5;
  border-bottom: 2px solid #2c7be5;
  font-weight: 600;
}

.tab-content {
  padding-top: 1rem;
}

.tab-content img {
  width: 60%;
  margin-bottom: 1rem;
  border-radius: 6px;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
}
</style>