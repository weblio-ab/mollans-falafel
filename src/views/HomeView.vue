<template>
  <main>
    <!-- Hero Section -->
    <AppHero
      label="Möllevångstorget, Malmö"
      title="Äkta falafel på Möllan"
      subtitle="Handgjord med kärlek sedan [PLACEHOLDER: årtal]. Fräscha råvaror, hemliga kryddor och den där perfekta knaprigheten."
    >
      <template #cta>
        <div class="d-flex flex-wrap gap-3">
          <RouterLink to="/meny" class="btn btn-secondary btn-lg">
            Se vår meny
          </RouterLink>
          <RouterLink to="/hitta-hit" class="btn btn-outline-light btn-lg">
            Hitta hit
          </RouterLink>
        </div>
      </template>
    </AppHero>

    <!-- Intro section -->
    <section class="section-py bg-warm" aria-labelledby="intro-heading">
      <div class="container">
        <div class="row align-items-center g-5">
          <div class="col-12 col-lg-6">
            <SectionHeading
              label="Välkommen"
              title="Mer än bara mat"
              subtitle="På Möllans Falafel tror vi att god mat börjar med ärlighet. Varje falafel rullas för hand, varje morgon. Vi välkomnar dig att ta en paus från vardagen och njuta av smaker som värmer."
            />
            <RouterLink to="/om-oss" class="btn btn-outline-primary">
              Läs vår historia
            </RouterLink>
          </div>
          <div class="col-12 col-lg-6">
            <!-- [PLACEHOLDER: Replace with restaurant photo] -->
            <div
              class="gallery-placeholder rounded-xl"
              style="height: 320px; font-size: 4rem;"
              role="img"
              aria-label="Bild på restaurangen – ersätt med riktigt foto"
            >
              🧆
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Popular dishes -->
    <section class="section-py" aria-labelledby="popular-heading">
      <div class="container">
        <SectionHeading
          label="Populärast"
          title="Gästernas favoriter"
          subtitle="Tre rätter som alltid finns på beställning. Enkla, äkta och fulla av smak."
          centered
        />
        <div class="row g-4">
          <div
            v-for="item in popularItems"
            :key="item.name"
            class="col-12 col-sm-6 col-lg-4"
          >
            <MenuCard
              :name="item.name"
              :description="item.description"
              :price="item.price"
              :tags="item.tags"
            />
          </div>
        </div>
        <div class="text-center mt-5">
          <RouterLink to="/meny" class="btn btn-primary btn-lg">
            Visa hela menyn
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Opening hours section -->
    <section class="section-py bg-warm" aria-labelledby="hours-heading">
      <div class="container">
        <div class="row g-5 align-items-center">
          <div class="col-12 col-lg-5">
            <SectionHeading
              label="Välkommen in"
              title="Öppettider"
              subtitle="Vi håller öppet sju dagar i veckan. Kom och hälsa på!"
            />
            <OpeningHours />
          </div>
          <div class="col-12 col-lg-6 offset-lg-1">
            <!-- CTA box -->
            <div class="cta-section p-5 text-center">
              <p class="text-accent fw-semibold small text-uppercase mb-3" style="letter-spacing:0.1em;">Besök oss</p>
              <h2 class="h3 text-white mb-3" style="font-family: 'Playfair Display', serif;">Besök oss idag</h2>
              <p class="mb-4" style="opacity: 0.9;">
                <!-- [PLACEHOLDER] -->
                Bergsgatan XX, 214 XX Malmö<br />
                Precis vid Möllevångstorget
              </p>
              <RouterLink to="/hitta-hit" class="btn btn-cta btn-lg">
                Hitta hit
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import AppHero from '@/components/layout/AppHero.vue'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import MenuCard from '@/components/ui/MenuCard.vue'
import OpeningHours from '@/components/ui/OpeningHours.vue'
import menuData from '@/data/menu.json'

// Pick 3 popular items from the menu data
const popularItems = menuData.categories[0].items.slice(0, 3)
</script>
