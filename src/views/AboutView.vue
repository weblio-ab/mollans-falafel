<template>
  <main>
    <!-- Hero -->
    <AppHero
      label="Vår berättelse"
      title="Passion för äkta smaker"
      subtitle="Bakom varje falafel finns en historia om tradition, kärlek och riktigt god mat."
      short
      centered
    />

    <!-- Story section -->
    <section class="section-py bg-warm" aria-labelledby="story-heading">
      <div class="container">
        <div class="row align-items-center g-5">
          <div class="col-12 col-lg-6">
            <!-- [PLACEHOLDER: Replace with restaurant/team photo] -->
            <div
              class="gallery-placeholder"
              style="height: 380px; font-size: 4rem; border-radius: 1.5rem;"
              role="img"
              aria-label="Bild på teamet – ersätt med riktigt foto"
            >
              👨‍🍳
            </div>
          </div>
          <div class="col-12 col-lg-6">
            <SectionHeading
              label="Historien"
              title="Hur det började"
            />
            <!-- [PLACEHOLDER] -->
            <p class="lead mb-4">
              Vi startade Möllans Falafel med en enkel dröm — att servera Malmös bästa falafel.
            </p>
            <p class="mb-4">
              Med recept som gått i arv och en passion för riktigt god mat välkomnar vi dig till vår lilla
              hörna av Möllevången. Här rullar vi varje falafel för hand, varje dag.
              Inga genvägar, bara äkta smaker.
            </p>
            <p>
              Möllevångstorget är mer än ett torg för oss — det är vår hemstad, vår gemenskap.
              Vi är stolta över att vara en del av det pulserande livet på Möllan och hoppas
              att vår mat bidrar till minnen du bär med dig länge.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Values section -->
    <section class="section-py" aria-labelledby="values-heading">
      <div class="container">
        <SectionHeading
          label="Våra löften"
          title="Det vi står för"
          centered
        />
        <div class="row g-4">
          <div
            v-for="value in values"
            :key="value.title"
            class="col-12 col-sm-6 col-lg-4"
          >
            <div class="card border-0 h-100 p-4 text-center" style="border-radius: 1rem; box-shadow: 0 2px 16px rgba(44,24,16,0.07);">
              <div class="mb-3" aria-hidden="true" style="font-size: 2.5rem;">{{ value.icon }}</div>
              <h3 class="h5 mb-3" style="font-family: 'Playfair Display', serif; color: #2C1810;">
                {{ value.title }}
              </h3>
              <p class="small mb-0" style="color: #6b5a4e; line-height: 1.7;">
                {{ value.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Photo gallery -->
    <section class="section-py bg-warm" aria-labelledby="gallery-heading">
      <div class="container">
        <SectionHeading
          label="Galleri"
          title="Bilder från restaurangen"
          centered
        />
        <!-- [PLACEHOLDER: Replace placeholders with actual photos] -->
        <div class="row g-3">
          <div v-for="i in 6" :key="i" class="col-6 col-md-4">
            <div
              class="gallery-placeholder"
              :style="{ height: '180px', fontSize: '2rem' }"
              role="img"
              :aria-label="`Restaurangbild ${i} – ersätt med riktigt foto`"
            >
              {{ galleryIcons[i - 1] }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section-py" aria-label="Uppmaning">
      <div class="container text-center">
        <h2 class="h3 mb-4" style="font-family: 'Playfair Display', serif;">Kom och hälsa på oss!</h2>
        <p class="mb-4" style="color: #6b5a4e;">
          Vi ser fram emot att välkomna dig. Ta en kopp te och njut av äkta falafel.
        </p>
        <div class="d-flex gap-3 justify-content-center flex-wrap">
          <RouterLink to="/hitta-hit" class="btn btn-primary btn-lg">Hitta hit</RouterLink>
          <RouterLink to="/meny" class="btn btn-outline-secondary btn-lg">Se menyn</RouterLink>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import AppHero from '@/components/layout/AppHero.vue'
import SectionHeading from '@/components/ui/SectionHeading.vue'

const values = [
  {
    icon: '🌿',
    title: 'Färska råvaror',
    description: 'Vi handlar lokalt och väljer alltid de bästa ingredienserna. Smaker som är rena, naturliga och fulla av liv.'
  },
  {
    icon: '🤲',
    title: 'Handgjort varje dag',
    description: 'Inget är förtillverkat. Varje falafel rullas för hand på morgonen, så att du alltid får det bästa.'
  },
  {
    icon: '🏺',
    title: 'Äkta tradition',
    description: 'Våra recept bygger på generationers kunskap. Vi är stolta att bära vidare smaker som hållit länge.'
  },
  {
    icon: '🌱',
    title: 'Växtbaserat i hjärtat',
    description: 'Falafel är till sin natur veganskt. Vi firar det och erbjuder rätter som smakar fantastiskt för alla.'
  },
  {
    icon: '🏘️',
    title: 'Del av Möllan',
    description: 'Vi älskar vår stadsdel och vill bidra till gemenskapen. Välkommen till vår lilla hörna av Möllevången.'
  },
  {
    icon: '❤️',
    title: 'Med kärlek',
    description: 'Det är känslan vi vill att du ska ha när du lämnar oss — mätt, nöjd och lite lyckligare.'
  }
]

const galleryIcons = ['🧆', '🥙', '🌿', '🫙', '☕', '🏪']
</script>
