<template>
  <article class="menu-card card">
    <!-- Optional image / placeholder -->
    <div v-if="image" class="menu-card-img">
      <!-- [PLACEHOLDER: Replace with actual dish image] -->
      <img :src="image" :alt="name" class="img-fluid w-100 h-100 object-fit-cover" loading="lazy" />
    </div>
    <div v-else class="menu-card-img" aria-hidden="true">
      {{ categoryIcon || '🧆' }}
    </div>

    <div class="menu-card-body">
      <h3 class="menu-card-title">{{ name }}</h3>
      <p class="menu-card-description">{{ description }}</p>
      <div class="menu-card-footer">
        <span class="menu-card-price" aria-label="`Pris: ${price}`">{{ price }}</span>
        <div class="menu-card-tags" v-if="tags && tags.length > 0">
          <span
            v-for="tag in tags"
            :key="tag"
            class="tag-badge"
            :class="tagClass(tag)"
            :aria-label="tagLabel(tag)"
          >
            {{ tagIcon(tag) }} {{ tagText(tag) }}
          </span>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  image: {
    type: String,
    default: null
  },
  tags: {
    type: Array,
    default: () => []
  },
  categoryIcon: {
    type: String,
    default: ''
  }
})

function tagClass(tag) {
  return {
    'tag-vegan': tag === 'vegan',
    'tag-vegetarian': tag === 'vegetarian',
    'tag-glutenfri': tag === 'glutenfri'
  }
}

function tagIcon(tag) {
  const icons = {
    vegan: '🌱',
    vegetarian: '🥚',
    glutenfri: '🌾'
  }
  return icons[tag] || ''
}

function tagText(tag) {
  const labels = {
    vegan: 'Vegansk',
    vegetarian: 'Vegetarisk',
    glutenfri: 'Glutenfri'
  }
  return labels[tag] || tag
}

function tagLabel(tag) {
  const labels = {
    vegan: 'Vegansk rätt',
    vegetarian: 'Vegetarisk rätt',
    glutenfri: 'Glutenfri rätt'
  }
  return labels[tag] || tag
}
</script>
