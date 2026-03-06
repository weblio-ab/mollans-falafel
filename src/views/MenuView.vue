<template>
  <main>
    <!-- Page hero -->
    <AppHero
      label="Mat med kärlek"
      title="Vår meny"
      subtitle="Allt vi serverar lagas med omsorg och färska råvaror. Välkommen att utforska vårt utbud."
      short
      centered
    />

    <!-- Menu categories -->
    <section class="section-py" aria-label="Meny">
      <div class="container">
        <!-- Dietary legend -->
        <div class="d-flex flex-wrap gap-3 mb-5 justify-content-center" aria-label="Märkningsförklaring">
          <span class="tag-badge tag-vegan">🌱 Vegansk</span>
          <span class="tag-badge tag-vegetarian">🥚 Vegetarisk</span>
          <span class="tag-badge tag-glutenfri">🌾 Glutenfri</span>
        </div>

        <!-- Category sections -->
        <div
          v-for="category in menuData.categories"
          :key="category.name"
          class="mb-5"
        >
          <SectionHeading
            :title="category.icon + ' ' + category.name"
            label=""
          />
          <div class="row g-4">
            <div
              v-for="item in category.items"
              :key="item.name"
              class="col-12 col-sm-6 col-xl-4"
            >
              <MenuCard
                :name="item.name"
                :description="item.description"
                :price="item.price"
                :tags="item.tags"
                :category-icon="category.icon"
              />
            </div>
          </div>
        </div>

        <!-- Allergy note -->
        <div class="alert mt-4" style="background-color: #fff3cd; border-color: #E8B630; border-radius: 1rem;" role="note">
          <p class="mb-0 small">
            <strong>Allergier eller önskemål?</strong>
            Informera vår personal vid beställning. Vi hjälper dig gärna hitta rätt alternativ.
            <!-- [PLACEHOLDER] -->
            Ring oss på <a href="tel:040XXXXXX">040-XXX XX XX</a> eller
            <RouterLink to="/kontakt">kontakta oss</RouterLink>.
          </p>
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
import menuData from '@/data/menu.json'
</script>
