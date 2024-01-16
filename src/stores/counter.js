import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  persist: true,
  state: () => {
    return {
      user: null,
      loggedIn: false,
      token: null
    }
  },
  actions: {
    login({ user, token }) {
      if (token) {
      this.loggedIn = true
      this.token = token
     /* this.user = {
          email: user.email
      }*/
        return true;
      }

      return false;
    },

    logout() {
      this.loggedIn = false
      this.user = null;
      this.token = null
    }

  }
})
