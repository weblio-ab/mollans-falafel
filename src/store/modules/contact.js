// Contact form Vuex module

const state = () => ({
  form: {
    name: '',
    email: '',
    phone: '',
    message: ''
  },
  status: 'idle', // 'idle' | 'sending' | 'sent' | 'error'
  errors: {}
})

const getters = {
  form: (state) => state.form,
  status: (state) => state.status,
  errors: (state) => state.errors,
  isSending: (state) => state.status === 'sending',
  isSent: (state) => state.status === 'sent',
  hasError: (state) => state.status === 'error'
}

const mutations = {
  SET_FIELD(state, { field, value }) {
    state.form[field] = value
  },
  SET_STATUS(state, status) {
    state.status = status
  },
  SET_ERRORS(state, errors) {
    state.errors = errors
  },
  RESET_FORM(state) {
    state.form = { name: '', email: '', phone: '', message: '' }
    state.status = 'idle'
    state.errors = {}
  }
}

const actions = {
  updateField({ commit }, payload) {
    commit('SET_FIELD', payload)
  },

  async submitForm({ commit, state }) {
    // Client-side validation
    const errors = {}
    const { name, email, message } = state.form

    if (!name.trim()) {
      errors.name = 'Vänligen ange ditt namn.'
    }

    if (!email.trim()) {
      errors.email = 'Vänligen ange din e-postadress.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = 'Vänligen ange en giltig e-postadress.'
    }

    if (!message.trim()) {
      errors.message = 'Vänligen skriv ett meddelande.'
    } else if (message.trim().length < 10) {
      errors.message = 'Meddelandet är för kort (minst 10 tecken).'
    }

    if (Object.keys(errors).length > 0) {
      commit('SET_ERRORS', errors)
      return
    }

    commit('SET_ERRORS', {})
    commit('SET_STATUS', 'sending')

    // Simulate API call with timeout
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      commit('SET_STATUS', 'sent')
      commit('RESET_FORM')
      commit('SET_STATUS', 'sent')
    } catch {
      commit('SET_STATUS', 'error')
    }
  },

  resetForm({ commit }) {
    commit('RESET_FORM')
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
