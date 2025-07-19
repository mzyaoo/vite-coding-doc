<script setup lang="ts">
interface Props {
  url: string
  title: string
  description: string
  logo: string
}

const props = withDefaults(defineProps<Props>(), {
  url: '',
  title: '',
  description: '',
  logo: '',
})
</script>

<template>
  <div class="linkcard">
    <a :href="props.url" target="_blank" rel="noopener noreferrer">
      <div class="logo" v-if="props.logo">
        <img :src="props.logo" alt="logo"/>
      </div>
      <p class="description">
        {{ props.title }}
        <span>{{ props.description }}</span>
      </p>
    </a>
  </div>
</template>

<style scoped>
.linkcard {
  background-color: var(--vp-c-bg-soft);
  border-radius: 12px;
  padding: 12px 16px;
  margin-top: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

.linkcard:hover {
  background-color: var(--vp-c-yellow-soft);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.linkcard a {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  color: inherit;
}

.linkcard .logo img {
  width: 60px;
  height: 60px;
  object-fit: contain;
  border-radius: 8px;
}

.linkcard .description {
  flex: 1;
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

@media (max-width: 600px) {
  .linkcard a {
    flex-direction: column;
    align-items: flex-start;
  }

  .linkcard .logo img {
    width: 48px;
    height: 48px;
    margin-top: 8px;
  }
}
</style>