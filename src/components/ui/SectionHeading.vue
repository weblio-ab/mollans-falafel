<template>
  <div class="section-heading-wrapper" :class="{ 'text-center': centered }">
    <p v-if="label" class="section-label">{{ label }}</p>
    <h2 class="section-title h2">{{ title }}</h2>
    <div class="section-divider mb-3" :class="{ 'mx-auto': centered }" />
    <p v-if="subtitle" class="section-subtitle" :class="{ 'mx-auto': centered }">
      {{ subtitle }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  label: {
    type: String,
    default: ''
  },
  subtitle: {
    type: String,
    default: ''
  },
  centered: {
    type: Boolean,
    default: false
  }
})
</script>
