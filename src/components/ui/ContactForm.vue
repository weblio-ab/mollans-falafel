<template>
  <form
    class="contact-form"
    novalidate
    @submit.prevent="handleSubmit"
    aria-label="Kontaktformulär"
  >
    <!-- Success message -->
    <div v-if="isSent" class="alert alert-success rounded-xl d-flex align-items-center gap-3" role="alert">
      <span aria-hidden="true" style="font-size: 1.5rem;">✅</span>
      <div>
        <strong>Tack för ditt meddelande!</strong><br />
        Vi återkommer till dig så snart vi kan. Välkommen in!
      </div>
    </div>

    <!-- Error message -->
    <div v-if="hasError" class="alert alert-danger rounded-xl" role="alert">
      Något gick fel. Försök igen eller ring oss på
      <!-- [PLACEHOLDER] -->
      <a href="tel:040XXXXXX">040-XXX XX XX</a>.
    </div>

    <template v-if="!isSent">
      <!-- Name field -->
      <div class="mb-4">
        <label for="contact-name" class="form-label">Ditt namn <span class="text-danger" aria-hidden="true">*</span></label>
        <input
          id="contact-name"
          type="text"
          class="form-control"
          :class="{ 'is-invalid': errors.name }"
          placeholder="Anna Andersson"
          autocomplete="name"
          :value="form.name"
          @input="updateField('name', $event.target.value)"
          aria-required="true"
          aria-describedby="name-error"
        />
        <div v-if="errors.name" id="name-error" class="invalid-feedback" role="alert">
          {{ errors.name }}
        </div>
      </div>

      <!-- Email field -->
      <div class="mb-4">
        <label for="contact-email" class="form-label">E-postadress <span class="text-danger" aria-hidden="true">*</span></label>
        <input
          id="contact-email"
          type="email"
          class="form-control"
          :class="{ 'is-invalid': errors.email }"
          placeholder="anna@example.com"
          autocomplete="email"
          :value="form.email"
          @input="updateField('email', $event.target.value)"
          aria-required="true"
          aria-describedby="email-error"
        />
        <div v-if="errors.email" id="email-error" class="invalid-feedback" role="alert">
          {{ errors.email }}
        </div>
      </div>

      <!-- Phone field (optional) -->
      <div class="mb-4">
        <label for="contact-phone" class="form-label">
          Telefon <span class="text-muted fw-normal" style="font-size:0.85rem;">(valfritt)</span>
        </label>
        <input
          id="contact-phone"
          type="tel"
          class="form-control"
          placeholder="070-XXX XX XX"
          autocomplete="tel"
          :value="form.phone"
          @input="updateField('phone', $event.target.value)"
        />
      </div>

      <!-- Message field -->
      <div class="mb-4">
        <label for="contact-message" class="form-label">Meddelande <span class="text-danger" aria-hidden="true">*</span></label>
        <textarea
          id="contact-message"
          class="form-control"
          :class="{ 'is-invalid': errors.message }"
          rows="5"
          placeholder="Skriv ditt meddelande här..."
          :value="form.message"
          @input="updateField('message', $event.target.value)"
          aria-required="true"
          aria-describedby="message-error"
        ></textarea>
        <div v-if="errors.message" id="message-error" class="invalid-feedback" role="alert">
          {{ errors.message }}
        </div>
      </div>

      <!-- Submit button -->
      <button
        type="submit"
        class="btn btn-primary btn-lg w-100"
        :disabled="isSending"
        aria-live="polite"
      >
        <span v-if="isSending" class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
        {{ isSending ? 'Skickar...' : 'Skicka meddelande' }}
      </button>

      <p class="small text-muted mt-3 text-center">
        <span aria-hidden="true">🔒</span> Dina uppgifter behandlas konfidentiellt och delas aldrig med tredje part.
      </p>
    </template>
  </form>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const form = computed(() => store.getters['contact/form'])
const errors = computed(() => store.getters['contact/errors'])
const isSending = computed(() => store.getters['contact/isSending'])
const isSent = computed(() => store.getters['contact/isSent'])
const hasError = computed(() => store.getters['contact/hasError'])

function updateField(field, value) {
  store.dispatch('contact/updateField', { field, value })
}

function handleSubmit() {
  store.dispatch('contact/submitForm')
}
</script>
