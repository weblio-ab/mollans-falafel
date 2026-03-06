<template>
  <main>
    <!-- Hero -->
    <AppHero
      label="Vi lyssnar"
      title="Kontakta oss"
      subtitle="Frågor, beröm, förslag eller bara en hälsning — vi svarar gärna!"
      short
      centered
    />

    <!-- Contact content -->
    <section class="section-py" aria-label="Kontaktsektion">
      <div class="container">
        <div class="row g-5">
          <!-- Contact form -->
          <div class="col-12 col-lg-7">
            <SectionHeading
              label="Skriv till oss"
              title="Skicka ett meddelande"
              subtitle="Fyll i formuläret nedan så återkommer vi till dig inom kort."
            />
            <div class="p-4 p-md-5 bg-white rounded-xl" style="box-shadow: 0 2px 24px rgba(44,24,16,0.08);">
              <ContactForm />
            </div>
          </div>

          <!-- Contact info sidebar -->
          <div class="col-12 col-lg-5">
            <SectionHeading
              label="Direkt kontakt"
              title="Kontaktuppgifter"
            />

            <div class="mb-4">
              <div class="d-flex gap-3 align-items-start mb-4">
                <span aria-hidden="true" style="font-size: 1.75rem; flex-shrink:0;">📍</span>
                <div>
                  <p class="fw-semibold mb-1">Adress</p>
                  <!-- [PLACEHOLDER] -->
                  <p class="mb-0 small">Bergsgatan XX, 214 XX Malmö</p>
                </div>
              </div>

              <div class="d-flex gap-3 align-items-start mb-4">
                <span aria-hidden="true" style="font-size: 1.75rem; flex-shrink:0;">📞</span>
                <div>
                  <p class="fw-semibold mb-1">Telefon</p>
                  <!-- [PLACEHOLDER] -->
                  <a
                    href="tel:040XXXXXX"
                    class="small text-decoration-none"
                    style="color: #5B7C3A; font-weight: 600;"
                  >
                    040-XXX XX XX
                  </a>
                </div>
              </div>

              <div class="d-flex gap-3 align-items-start mb-4">
                <span aria-hidden="true" style="font-size: 1.75rem; flex-shrink:0;">✉️</span>
                <div>
                  <p class="fw-semibold mb-1">E-post</p>
                  <!-- [PLACEHOLDER] -->
                  <a
                    href="mailto:info@mollansfalafel.se"
                    class="small text-decoration-none"
                    style="color: #5B7C3A; font-weight: 600;"
                  >
                    info@mollansfalafel.se
                  </a>
                </div>
              </div>

              <div class="d-flex gap-3 align-items-start mb-4">
                <span aria-hidden="true" style="font-size: 1.75rem; flex-shrink:0;">🕐</span>
                <div>
                  <p class="fw-semibold mb-2">Öppettider</p>
                  <p class="small mb-0">Mån–Tor: 11:00–21:00</p>
                  <p class="small mb-0">Fre–Lör: 11:00–23:00</p>
                  <p class="small">Sön: 12:00–20:00</p>
                </div>
              </div>
            </div>

            <!-- Social media -->
            <div class="p-4 rounded-xl" style="background-color: #2C1810;">
              <p class="text-white fw-semibold mb-3">Följ oss</p>
              <p class="small mb-3" style="color: rgba(255,255,255,0.7);">
                Se bakom kulisserna, dagliga specialer och mer på sociala medier.
              </p>
              <div class="d-flex gap-3 align-items-center">
                <SocialIcons />
                <div class="small" style="color: rgba(255,255,255,0.6);">
                  <!-- [PLACEHOLDER] -->
                  @mollansfalafel
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import AppHero from '@/components/layout/AppHero.vue'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import ContactForm from '@/components/ui/ContactForm.vue'
import SocialIcons from '@/components/icons/SocialIcons.vue'
</script>
