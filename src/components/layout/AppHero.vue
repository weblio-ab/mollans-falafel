<template>
  <section
    class="hero-section"
    :class="{ 'hero-short': short }"
    role="banner"
  >
    <!-- Background color/gradient (placeholder for image) -->
    <!-- [PLACEHOLDER: Replace hero-bg-color with an actual background image] -->
    <div class="hero-bg" aria-hidden="true" />
    <div class="hero-bg-color" aria-hidden="true" />

    <div class="container hero-content py-5">
      <div class="row">
        <div :class="centered ? 'col-12 text-center' : 'col-12 col-lg-8'">
          <p v-if="label" class="text-accent fw-semibold small text-uppercase letter-spacing mb-3" style="letter-spacing: 0.1em;">
            {{ label }}
          </p>
          <h1 class="display-4 fw-bold text-white mb-4" style="text-shadow: 0 2px 16px rgba(0,0,0,0.3);">
            <slot name="title">{{ title }}</slot>
          </h1>
          <p v-if="subtitle" class="lead text-white mb-5" style="opacity: 0.9; max-width: 560px;" :class="{ 'mx-auto': centered }">
            {{ subtitle }}
          </p>
          <slot name="cta" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: ''
  },
  subtitle: {
    type: String,
    default: ''
  },
  label: {
    type: String,
    default: ''
  },
  centered: {
    type: Boolean,
    default: false
  },
  short: {
    type: Boolean,
    default: false
  }
})
</script>
