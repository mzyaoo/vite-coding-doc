<script setup lang="ts">
import {computed} from 'vue'

interface Props {
  url: string
  title: string
  description: string
}

const props = withDefaults(defineProps<Props>(), {
  url: '',
  title: '',
  description: '',
})

// 根据 url 自动生成 favicon 地址
const favicon = computed(() => {
  try {
    const domain = new URL(props.url).hostname
    // Google 的 favicon API
    return `https://www.google.com/s2/favicons?sz=64&domain=${domain}`
    // 你也可以换成 DuckDuckGo：
    // return `https://icons.duckduckgo.com/ip3/${domain}.ico`
  } catch {
    return ''
  }
})
</script>

<template>
  <div class="linkcard">
    <a :href="props.url" target="_blank" rel="noopener noreferrer" class="linkcard-link">
      <div class="logo" v-if="favicon">
        <img :src="favicon" alt="logo"/>
      </div>
      <div class="content">
        <p class="description">
          {{ props.title }}
          <span>{{ props.description }}</span>
        </p>
        <div class="link-indicator">
          <svg class="external-link-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
               stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15,3 21,3 21,9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
          <span class="link-text">访问链接</span>
        </div>
      </div>
    </a>
  </div>
</template>

<style scoped>
.linkcard {
  background-color: var(--vp-c-bg-soft);
  border: 2px solid transparent;
  border-radius: 12px;
  padding: 16px;
  margin-top: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.linkcard::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--vp-c-brand), var(--vp-c-brand-light));
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.linkcard:hover {
  background-color: var(--vp-c-yellow-soft);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  border-color: var(--vp-c-brand);
  transform: translateY(-2px);
}

.linkcard:hover::before {
  transform: scaleX(1);
}

.linkcard-link {
  display: flex;
  align-items: center;
  gap: 16px;
  text-decoration: none;
  color: inherit;
  position: relative;
}

.linkcard .logo img {
  width: 60px;
  height: 60px;
  object-fit: contain;
  border-radius: 8px;
  transition: transform 0.3s ease;
}

.linkcard:hover .logo img {
  transform: scale(1.05);
}

.linkcard .content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.linkcard .description {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  line-height: 1.5;
}

.linkcard .description span {
  display: block;
  margin-top: 4px;
  font-size: 14px;
  color: var(--vp-c-text-2);
  font-weight: 400;
}

.link-indicator {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: var(--vp-c-brand);
  font-weight: 500;
  opacity: 0.8;
  transition: all 0.3s ease;
}

.linkcard:hover .link-indicator {
  opacity: 1;
  transform: translateX(4px);
}

.external-link-icon {
  transition: transform 0.3s ease;
}

.linkcard:hover .external-link-icon {
  transform: translate(2px, -2px);
}

.link-text {
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

@media (max-width: 600px) {
  .linkcard-link {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }

  .linkcard .logo img {
    width: 48px;
    height: 48px;
  }

  .linkcard .content {
    width: 100%;
  }

  .link-indicator {
    align-self: flex-end;
  }
}
</style>