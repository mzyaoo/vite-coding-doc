<template>
  <div>
    <a @click="open = true" style="cursor: pointer;">{{ aInfo }}</a>

    <div v-if="open" class="overlay" @click.self="close">
      <div class="modal">
        <div class="modal-header">
          <strong>{{ fileName }}</strong>
        </div>
        <pre class="modal-body">{{ content }}</pre>
        <div class="modal-footer">
          <a :href="file" :download="fileName" class="download">下载</a>
          <button @click="close">关闭</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref, computed, watch} from 'vue'

const props = defineProps<{
  file: string,
  aInfo: string,
}>()

const open = ref(false)
const content = ref('')

const fileName = computed(() => props.file.split('/').pop() || 'config.yaml')

function close() {
  open.value = false
}

watch(open, (val) => {
  if (val && !content.value) {
    fetch(props.file)
        .then(res => res.text())
        .then(text => content.value = text)
        .catch(() => content.value = '⚠️ 加载失败，请检查文件路径。')
  }

  // 锁定或恢复 body 滚动
  document.body.style.overflow = val ? 'hidden' : ''
})
</script>

<style scoped>
/* 通用样式 */
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background-color: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  width: 90%;
  max-width: 700px;
  max-height: 80vh;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
}

.modal-header {
  padding: 0.75rem 1rem;
  font-weight: bold;
  background-color: var(--vp-c-bg-soft);
  border-bottom: 1px solid var(--vp-c-divider);
}

.modal-body {
  padding: 1rem;
  overflow-y: auto;
  background-color: var(--vp-c-bg);
  font-family: monospace;
  font-size: 14px;
  white-space: pre-wrap;
  flex: 1;
}

.modal-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1rem;
  background-color: var(--vp-c-bg-soft);
  border-top: 1px solid var(--vp-c-divider);
}

.download {
  background: var(--vp-button-brand-bg);
  color: white;
  padding: 0.4rem 1rem;
  text-decoration: none;
  border-radius: 4px;
}

button {
  background: transparent;
  border: 1px solid var(--vp-c-border);
  color: var(--vp-c-text-1);
  padding: 0.4rem 1rem;
  border-radius: 4px;
  cursor: pointer;
}
</style>