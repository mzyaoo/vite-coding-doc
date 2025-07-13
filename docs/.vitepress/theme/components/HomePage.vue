<!-- .vitepress/theme/HomePage.vue -->
<template>
  <section class="home-posts">
    <h2 class="section-title">最新文章</h2>
    <div class="post-grid">
      <div v-for="post in latestPosts" :key="post.link" class="post-card">
        <div class="date">{{ post.date }}</div>
        <h3 class="title">
          <a :href="post.link">{{ post.title }}</a>
        </h3>
        <p class="excerpt">{{ post.description }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const data = [
  {
    title: 'PS 快速替换证件照背景',
    link: '/ps-change-background',
    description: '本文介绍了一种使用 Photoshop 快速替换证件照背景的方法，且替换效果自然无杂色。',
    date: '2025-06-19'
  },
  {
    title: 'VitePress 优化代码块样式',
    link: '/vitepress/code-style',
    description: '本文介绍在 VitePress 中优化代码块样式的方法，包括使用 vitepress-plugin-group。',
    date: '2025-05-16'
  },  {
    title: 'VitePress 优化代码块样式',
    link: '/vitepress/code-style',
    description: '本文介绍在 VitePress 中优化代码块样式的方法，包括使用 vitepress-plugin-group。',
    date: '2025-05-16'
  }, {
    title: 'VitePress 优化代码块样式',
    link: '/vitepress/code-style',
    description: '本文介绍在 VitePress 中优化代码块样式的方法，包括使用 vitepress-plugin-group。',
    date: '2025-05-16'
  },
]

const latestPosts = data.slice(0, 6) // 显示前6篇
</script>

<style scoped>
.home-posts {
  padding: 2rem;
}

.section-title {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.post-grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
}

.post-card {
  background: #fff;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.date {
  font-size: 0.875rem;
  color: #888;
}

.title a {
  color: #333;
  font-weight: bold;
  text-decoration: none;
}

.excerpt {
  font-size: 0.9rem;
  color: #555;
  margin-top: 0.5rem;
}
</style>