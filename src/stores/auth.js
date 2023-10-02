import { defineStore, acceptHMRUpdate } from 'pinia'
import { useLocalStorage } from '@vueuse/core'
import { ref,computed } from 'vue'

export const useAuthStore = defineStore('auth', () => {
 const user = useLocalStorage('USER',{})
 return {}
})

if (import.meta.hot) {
 import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot))
}
