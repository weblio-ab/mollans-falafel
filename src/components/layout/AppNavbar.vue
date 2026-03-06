<template>
  <nav
    class="navbar navbar-expand-lg sticky-top app-navbar"
    :class="isTransparent ? 'navbar-transparent' : 'navbar-solid'"
    aria-label="Huvudnavigation"
  >
    <div class="container">
      <!-- Brand logo -->
      <RouterLink class="navbar-brand d-flex align-items-center gap-2" to="/" aria-label="Möllans Falafel – startsida">
        <!-- [PLACEHOLDER: Replace with final logo] -->
        <img
          src="@/assets/images/logo.svg"
          alt="Möllans Falafel"
          height="44"
          width="auto"
          loading="lazy"
        />
      </RouterLink>

      <!-- Mobile hamburger -->
      <button
        class="navbar-toggler border-0"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#mainNav"
        aria-controls="mainNav"
        aria-expanded="false"
        aria-label="Öppna meny"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Navigation links -->
      <div class="collapse navbar-collapse" id="mainNav">
        <ul class="navbar-nav ms-auto gap-1">
          <li class="nav-item">
            <RouterLink class="nav-link px-3" to="/" exact-active-class="fw-semibold">Hem</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link px-3" to="/meny" active-class="fw-semibold">Meny</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link px-3" to="/om-oss" active-class="fw-semibold">Om oss</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link px-3" to="/hitta-hit" active-class="fw-semibold">Hitta hit</RouterLink>
          </li>
          <li class="nav-item ms-lg-2">
            <RouterLink
              class="btn btn-secondary btn-sm px-4"
              to="/kontakt"
            >Kontakta oss</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'

const isTransparent = ref(false)

function handleScroll() {
  // Only show transparent navbar on home page (hero)
  const heroEl = document.querySelector('.hero-section')
  if (!heroEl) {
    isTransparent.value = false
    return
  }
  const heroBottom = heroEl.getBoundingClientRect().bottom
  isTransparent.value = heroBottom > 60
}

onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
