<template>
  <footer class="app-footer pt-5 pb-3 mt-auto">
    <div class="container">
      <div class="row g-4 pb-4">
        <!-- Column 1: Logo & description -->
        <div class="col-12 col-md-4">
          <img
            src="@/assets/images/logo.svg"
            alt="Möllans Falafel"
            height="48"
            class="mb-3"
            loading="lazy"
          />
          <p class="small mb-3" style="max-width: 280px;">
            Äkta falafel handgjord med kärlek mitt på Möllan. Vi välkomnar dig varmt till vår lilla hörna av Malmö.
          </p>
          <SocialIcons />
        </div>

        <!-- Column 2: Quick links -->
        <div class="col-6 col-md-4">
          <h3 class="footer-heading h6">Snabblänkar</h3>
          <ul class="list-unstyled small">
            <li class="mb-2"><RouterLink to="/">Hem</RouterLink></li>
            <li class="mb-2"><RouterLink to="/meny">Meny</RouterLink></li>
            <li class="mb-2"><RouterLink to="/om-oss">Om oss</RouterLink></li>
            <li class="mb-2"><RouterLink to="/hitta-hit">Hitta hit</RouterLink></li>
            <li class="mb-2"><RouterLink to="/kontakt">Kontakt</RouterLink></li>
          </ul>
        </div>

        <!-- Column 3: Contact info -->
        <div class="col-6 col-md-4">
          <h3 class="footer-heading h6">Kontakt</h3>
          <address class="small not-italic">
            <p class="mb-1">
              <!-- [PLACEHOLDER] -->
              <span aria-label="Adress">📍</span>
              Bergsgatan XX, 214 XX Malmö
            </p>
            <p class="mb-1">
              <!-- [PLACEHOLDER] -->
              <a href="tel:040XXXXXX" aria-label="Ring oss">📞 040-XXX XX XX</a>
            </p>
            <p class="mb-3">
              <!-- [PLACEHOLDER] -->
              <a href="mailto:info@mollansfalafel.se" aria-label="Skicka e-post">✉️ info@mollansfalafel.se</a>
            </p>
          </address>
          <div>
            <p class="footer-heading h6 mb-2">Öppettider</p>
            <p class="small mb-0">Mån–Tor: 11:00–21:00</p>
            <p class="small mb-0">Fre–Lör: 11:00–23:00</p>
            <p class="small">Sön: 12:00–20:00</p>
          </div>
        </div>
      </div>

      <hr class="footer-divider" />

      <div class="d-flex flex-column flex-sm-row justify-content-between align-items-center footer-bottom">
        <p class="mb-1 mb-sm-0">© 2026 Möllans Falafel. Alla rättigheter förbehållna.</p>
        <p class="mb-0">Skapad med ❤️ i Malmö</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import SocialIcons from '@/components/icons/SocialIcons.vue'
</script>
