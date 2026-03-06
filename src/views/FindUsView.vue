<template>
  <main>
    <!-- Hero -->
    <AppHero
      label="Vi väntar på dig"
      title="Hitta hit"
      subtitle="Vi ligger mitt på Möllan, en av Malmös mest levande mötesplatser."
      short
      centered
    />

    <!-- Map + Address section -->
    <section class="section-py" aria-labelledby="location-heading">
      <div class="container">
        <div class="row g-5">
          <!-- Map embed -->
          <div class="col-12 col-lg-7">
            <SectionHeading
              label="Karta"
              title="Vår plats"
            />
            <!-- [PLACEHOLDER: Replace with actual Google Maps embed for the restaurant address] -->
            <div class="map-placeholder" role="region" aria-label="Karta över restaurangens plats">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2253.0!2d13.0!3d55.588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTXCsDM1JzE2LjgiTiAxM8KwMDAnMC4wIkU!5e0!3m2!1ssv!2sse!4v1000000000000!5m2!1ssv!2sse"
                width="600"
                height="380"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title="Karta till Möllans Falafel"
              ></iframe>
            </div>
          </div>

          <!-- Address info -->
          <div class="col-12 col-lg-5">
            <SectionHeading
              label="Kontaktuppgifter"
              title="Adress & info"
            />
            <address class="mb-4 not-italic">
              <div class="d-flex gap-3 align-items-start mb-3">
                <span aria-hidden="true" style="font-size: 1.5rem; flex-shrink: 0;">📍</span>
                <div>
                  <p class="fw-semibold mb-1">Adress</p>
                  <!-- [PLACEHOLDER] -->
                  <p class="mb-0">Bergsgatan XX<br />214 XX Malmö</p>
                </div>
              </div>
              <div class="d-flex gap-3 align-items-start mb-3">
                <span aria-hidden="true" style="font-size: 1.5rem; flex-shrink: 0;">📞</span>
                <div>
                  <p class="fw-semibold mb-1">Telefon</p>
                  <!-- [PLACEHOLDER] -->
                  <a href="tel:040XXXXXX" class="text-decoration-none" style="color:#5B7C3A;">040-XXX XX XX</a>
                </div>
              </div>
              <div class="d-flex gap-3 align-items-start mb-3">
                <span aria-hidden="true" style="font-size: 1.5rem; flex-shrink: 0;">✉️</span>
                <div>
                  <p class="fw-semibold mb-1">E-post</p>
                  <!-- [PLACEHOLDER] -->
                  <a href="mailto:info@mollansfalafel.se" class="text-decoration-none" style="color:#5B7C3A;">
                    info@mollansfalafel.se
                  </a>
                </div>
              </div>
            </address>

            <!-- Opening hours -->
            <div class="p-4 rounded-xl" style="background-color:#fff; box-shadow: 0 2px 16px rgba(44,24,16,0.07);">
              <h3 class="h5 mb-3" style="font-family: 'Playfair Display', serif; color: #2C1810;">
                🕐 Öppettider
              </h3>
              <OpeningHours />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Public transport section -->
    <section class="section-py bg-warm" aria-labelledby="transport-heading">
      <div class="container">
        <SectionHeading
          label="Kollektivtrafik"
          title="Hur du tar dig hit"
          centered
        />
        <div class="row g-4 justify-content-center">
          <div
            v-for="transport in transportOptions"
            :key="transport.type"
            class="col-12 col-sm-6 col-lg-4"
          >
            <div
              class="card border-0 h-100 p-4 text-center"
              style="border-radius: 1rem; box-shadow: 0 2px 16px rgba(44,24,16,0.07);"
            >
              <div class="mb-3" aria-hidden="true" style="font-size: 2.5rem;">
                {{ transport.icon }}
              </div>
              <h3 class="h6 fw-bold mb-2" style="color: #2C1810;">{{ transport.type }}</h3>
              <p class="small mb-0" style="color: #6b5a4e;">{{ transport.description }}</p>
            </div>
          </div>
        </div>
        <p class="text-center mt-4 small" style="color: #6b5a4e;">
          <!-- [PLACEHOLDER: Verify transport info for actual address] -->
          Exakt information om hållplatser uppdateras när den slutliga adressen är fastställd.
        </p>
      </div>
    </section>
  </main>
</template>

<script setup>
import AppHero from '@/components/layout/AppHero.vue'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import OpeningHours from '@/components/ui/OpeningHours.vue'

const transportOptions = [
  {
    icon: '🚌',
    type: 'Buss',
    description: 'Flera busslinjer stannar vid Möllevångstorget. Linje 2, 5 och 6 är närmast. Kolla Skånetrafikens app för aktuella tider.'
  },
  {
    icon: '🚲',
    type: 'Cykel',
    description: 'Malmö är en cykelvänlig stad. Det finns gott om cykelparkeringar runt Möllevångstorget.'
  },
  {
    icon: '🅿️',
    type: 'Bil',
    description: 'Parkeringsplatser finns längs Bergsgatan och på angränsande gator. Betalparkeringen på torget är närmast.'
  }
]
</script>
