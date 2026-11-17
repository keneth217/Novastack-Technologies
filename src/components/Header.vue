<template>
  <header 
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md"
    :class="isScrolled ? 'bg-white/98 shadow-lg' : 'bg-white/95 shadow-sm'"
  >
    <nav class="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
      <div class="logo">
        <router-link to="/" class="flex items-center text-2xl font-bold text-gray-900 transition-transform duration-300 hover:scale-105">
          <span class="text-pink-500">Novastack</span>
          <span class="ml-1 text-gray-900">Technologies</span>
        </router-link>
      </div>

      <button 
        class="md:hidden bg-transparent border-none cursor-pointer p-2" 
        @click="toggleMobileMenu" 
        aria-label="Toggle menu"
      >
        <span class="flex flex-col gap-1 w-6" :class="{ 'active': isMobileMenuOpen }">
          <span 
            class="block w-full h-0.5 bg-gray-900 transition-all duration-300 rounded-sm"
            :class="{ 'rotate-45 translate-y-1.5': isMobileMenuOpen, '': !isMobileMenuOpen }"
          ></span>
          <span 
            class="block w-full h-0.5 bg-gray-900 transition-all duration-300 rounded-sm"
            :class="{ 'opacity-0': isMobileMenuOpen, '': !isMobileMenuOpen }"
          ></span>
          <span 
            class="block w-full h-0.5 bg-gray-900 transition-all duration-300 rounded-sm"
            :class="{ '-rotate-45 -translate-y-1.5': isMobileMenuOpen, '': !isMobileMenuOpen }"
          ></span>
        </span>
      </button>

      <ul 
        class="hidden md:flex list-none gap-8 m-0 p-0"
        :class="{ 
          'flex flex-col absolute top-full left-0 right-0 bg-white p-8 shadow-xl max-h-0 overflow-hidden transition-all duration-300 gap-4': isMobileMenuOpen,
          'md:max-h-none': !isMobileMenuOpen
        }"
        :style="isMobileMenuOpen ? { maxHeight: '300px' } : {}"
      >
        <li>
          <router-link 
            to="/" 
            @click="closeMobileMenu"
            class="relative text-gray-900 font-medium transition-colors duration-300 py-2 no-underline hover:text-pink-500"
            active-class="text-pink-500"
          >
            Home
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-500 transition-all duration-300"></span>
          </router-link>
        </li>
        <li>
          <router-link 
            to="/about" 
            @click="closeMobileMenu"
            class="relative text-gray-900 font-medium transition-colors duration-300 py-2 no-underline hover:text-pink-500"
            active-class="text-pink-500"
          >
            About Us
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-500 transition-all duration-300"></span>
          </router-link>
        </li>
        <li>
          <router-link 
            to="/company-profile" 
            @click="closeMobileMenu"
            class="relative text-gray-900 font-medium transition-colors duration-300 py-2 no-underline hover:text-pink-500"
            active-class="text-pink-500"
          >
            Company Profile
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-500 transition-all duration-300"></span>
          </router-link>
        </li>
        <li>
          <router-link 
            to="/solutions" 
            @click="closeMobileMenu"
            class="relative text-gray-900 font-medium transition-colors duration-300 py-2 no-underline hover:text-pink-500"
            active-class="text-pink-500"
          >
            Solutions
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-500 transition-all duration-300"></span>
          </router-link>
        </li>
        <li>
          <router-link 
            to="/contact" 
            @click="closeMobileMenu"
            class="relative text-gray-900 font-medium transition-colors duration-300 py-2 no-underline hover:text-pink-500"
            active-class="text-pink-500"
          >
            Contact
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-500 transition-all duration-300"></span>
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.router-link-active span {
  width: 100%;
}

a:hover span {
  width: 100%;
}

@media (min-width: 768px) {
  .md\\:flex {
    display: flex;
  }
}
</style>
