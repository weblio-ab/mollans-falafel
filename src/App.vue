<template>
  <div class="d-flex flex-column min-vh-100">
    <AppNavbar />
    <RouterView />
    <AppFooter />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import AppNavbar from '@/components/layout/AppNavbar.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
</script>
