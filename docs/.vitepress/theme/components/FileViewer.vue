<template>
  <div>
    <a @click="open = true" style="cursor: pointer;">{{ aInfo }}</a>

    <div v-if="open" class="overlay" @click.self="close">
      <div class="modal">
        <div class="modal-header">
          <strong>{{ fileName }}</strong>
        </div>
        <div
            class="modal-body"
            @mouseenter="hover = true"
            @mouseleave="hover = false"
        >
          <button
              v-if="hover"
              class="copy-btn"
              @click="copyContent"
              title="复制内容"
          >
            一键复制
          </button>
          <pre>{{ content }}</pre>
          <span v-if="copied" class="copy-tip">已复制</span>
        </div>
        <div class="modal-footer">
          <a :href="file" :download="fileName" class="download">下载</a>
          <button @click="close">关闭</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'

const props = defineProps<{
  file: string
  aInfo: string
}>()

const open = ref(false)
const hover = ref(false)
const copied = ref(false)
const content = ref('')

const fileName = computed(() => props.file.split('/').pop() || 'config.yaml')

function close() {
  open.value = false
}

async function copyContent() {
  try {
    await navigator.clipboard.writeText(content.value)
    copied.value = true
    setTimeout(() => (copied.value = false), 1500)
  } catch {
    copied.value = false
  }
}

watch(open, (val) => {
  if (val && !content.value) {
    fetch(props.file)
        .then((res) => res.text())
        .then((text) => (content.value = text))
        .catch(() => (content.value = '⚠️ 加载失败，请检查文件路径。'))
  }

  document.body.style.overflow = val ? 'hidden' : ''
})
</script>

<style scoped>
/* 遮罩 */
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* 弹窗 */
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

/* 头部 */
.modal-header {
  padding: 0.75rem 1rem;
  font-weight: bold;
  background-color: var(--vp-c-bg-soft);
  border-bottom: 1px solid var(--vp-c-divider);
}

/* 内容 */
.modal-body {
  position: relative;
  padding: 1rem;
  overflow-y: auto;
  background-color: var(--vp-c-bg);
  font-family: monospace;
  font-size: 14px;
  white-space: pre-wrap;
  flex: 1;
}

.modal-body pre {
  margin: 0;
}

/* 复制按钮 */
.copy-btn {
  position: sticky;
  top: 0;
  float: right;
  z-index: 2;
  border: none;
  font-size: 13px;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  cursor: pointer;
  color: var(--vp-c-text-1);
  margin-bottom: 0.5rem;
}

/* 复制提示 */
.copy-tip {
  position: absolute;
  top: 1rem;
  right: 6rem;
  font-size: 12px;
  color: var(--vp-c-text-2);
  background: var(--vp-c-bg-soft);
  padding: 2px 8px;
  border-radius: 4px;
}

/* 底部 */
.modal-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1rem;
  background-color: var(--vp-c-bg-soft);
  border-top: 1px solid var(--vp-c-divider);
}

/* 下载按钮 */
.download {
  background: var(--vp-button-brand-bg);
  color: white;
  padding: 0.4rem 1rem;
  text-decoration: none;
  border-radius: 4px;
  cursor: pointer;
}

/* 通用按钮 */
button {
  background: transparent;
  border: 1px solid var(--vp-c-border);
  color: var(--vp-c-text-1);
  padding: 0.4rem 1rem;
  border-radius: 4px;
  cursor: pointer;
}
</style>