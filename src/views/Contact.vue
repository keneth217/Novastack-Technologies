<template>
  <div class="overflow-x-hidden">
    <section
      class="relative min-h-[50vh] flex items-center justify-center text-center py-20 overflow-hidden"
    >
      <div class="absolute inset-0 z-0">
        <div
          class="absolute w-[400px] h-[400px] rounded-full blur-[80px] opacity-20 bg-pink-500 -top-[200px] -left-[200px] animate-float"
        />
        <div
          class="absolute w-[300px] h-[300px] rounded-full blur-[80px] opacity-20 bg-pink-400 -bottom-[150px] -right-[150px] animate-float"
          style="animation-delay: -5s"
        />
      </div>

      <div class="max-w-7xl mx-auto px-8 relative z-10 fade-in">
        <div class="section-eyebrow">Contact</div>
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-gray-900">
          Get in
          <span class="block bg-gradient-to-r from-pink-500 to-pink-400 bg-clip-text text-transparent">
            touch
          </span>
        </h1>
        <p class="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Have a project in mind? Let's discuss how we can help transform your business.
        </p>
      </div>
    </section>

    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-8">
        <div class="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8">
          <div class="bg-white rounded-2xl p-8 border border-gray-200">
            <h2 class="text-2xl font-bold text-gray-900 mb-2">Send us a message</h2>
            <p class="text-sm text-gray-500 mb-8 leading-relaxed">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>

            <form class="space-y-5" @submit.prevent="handleSubmit">
              <div>
                <label for="name" class="block text-sm font-semibold text-gray-900 mb-2">
                  Full Name *
                </label>
                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  required
                  placeholder="John Doe"
                  class="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 text-base transition-colors focus:outline-none focus:border-pink-300 focus:ring-2 focus:ring-pink-100"
                />
              </div>

              <div>
                <label for="email" class="block text-sm font-semibold text-gray-900 mb-2">
                  Email Address *
                </label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  required
                  placeholder="john@example.com"
                  class="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 text-base transition-colors focus:outline-none focus:border-pink-300 focus:ring-2 focus:ring-pink-100"
                />
              </div>

              <div>
                <label for="phone" class="block text-sm font-semibold text-gray-900 mb-2">
                  Phone Number
                </label>
                <input
                  id="phone"
                  v-model="form.phone"
                  type="tel"
                  placeholder="+1 (234) 567-8900"
                  class="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 text-base transition-colors focus:outline-none focus:border-pink-300 focus:ring-2 focus:ring-pink-100"
                />
              </div>

              <div>
                <label for="subject" class="block text-sm font-semibold text-gray-900 mb-2">
                  Subject
                </label>
                <input
                  id="subject"
                  v-model="form.subject"
                  type="text"
                  placeholder="Project Inquiry"
                  class="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 text-base transition-colors focus:outline-none focus:border-pink-300 focus:ring-2 focus:ring-pink-100"
                />
              </div>

              <div>
                <label for="message" class="block text-sm font-semibold text-gray-900 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  v-model="form.message"
                  required
                  rows="6"
                  placeholder="Tell us about your project..."
                  class="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 text-base leading-relaxed resize-y min-h-[120px] transition-colors focus:outline-none focus:border-pink-300 focus:ring-2 focus:ring-pink-100"
                />
              </div>

              <button type="submit" class="btn-primary w-full" :disabled="isSubmitting">
                <span v-if="!isSubmitting">Send Message</span>
                <span v-else>Sending...</span>
              </button>

              <div
                v-if="submitStatus"
                class="rounded-xl px-4 py-3 text-sm font-medium text-center"
                :class="
                  submitStatus.type === 'success'
                    ? 'bg-green-50 text-green-800 border border-green-200'
                    : 'bg-red-50 text-red-800 border border-red-200'
                "
              >
                {{ submitStatus.message }}
              </div>
            </form>
          </div>

          <div class="bg-white rounded-2xl p-8 border border-gray-200">
            <h2 class="text-2xl font-bold text-gray-900 mb-2">Contact information</h2>
            <p class="text-sm text-gray-500 mb-8 leading-relaxed">
              Reach out to us through any of these channels.
            </p>

            <div class="space-y-6 mb-8">
              <div class="flex gap-4 items-start">
                <div
                  class="w-12 h-12 rounded-xl bg-pink-50 border border-pink-100 text-pink-500 flex items-center justify-center flex-shrink-0"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-base font-bold text-gray-900 mb-1">Location</h3>
                  <p class="text-sm text-gray-500 leading-relaxed">
                    Your Business Location<br />City, State, ZIP Code
                  </p>
                </div>
              </div>

              <div class="flex gap-4 items-start">
                <div
                  class="w-12 h-12 rounded-xl bg-pink-50 border border-pink-100 text-pink-500 flex items-center justify-center flex-shrink-0"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path
                      d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 class="text-base font-bold text-gray-900 mb-1">Phone</h3>
                  <p class="text-sm text-gray-500">
                    <a href="tel:+12345678900" class="text-pink-500 hover:text-pink-600 no-underline">
                      +1 (234) 567-8900
                    </a>
                  </p>
                </div>
              </div>

              <div class="flex gap-4 items-start">
                <div
                  class="w-12 h-12 rounded-xl bg-pink-50 border border-pink-100 text-pink-500 flex items-center justify-center flex-shrink-0"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-base font-bold text-gray-900 mb-1">Email</h3>
                  <p class="text-sm text-gray-500">
                    <a
                      href="mailto:info@novastacktech.com"
                      class="text-pink-500 hover:text-pink-600 no-underline"
                    >
                      info@novastacktech.com
                    </a>
                  </p>
                </div>
              </div>

              <div class="flex gap-4 items-start">
                <div
                  class="w-12 h-12 rounded-xl bg-pink-50 border border-pink-100 text-pink-500 flex items-center justify-center flex-shrink-0"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-base font-bold text-gray-900 mb-1">Business Hours</h3>
                  <p class="text-sm text-gray-500 leading-relaxed">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 10:00 AM - 4:00 PM
                  </p>
                </div>
              </div>
            </div>

            <div class="pt-6 border-t border-gray-200">
              <h3 class="text-base font-bold text-gray-900 mb-4">Follow us</h3>
              <div class="flex gap-3">
                <a
                  href="#"
                  aria-label="LinkedIn"
                  class="w-11 h-11 rounded-full bg-gray-50 border border-gray-200 text-gray-500 flex items-center justify-center transition-all duration-300 hover:bg-pink-50 hover:text-pink-500 hover:border-pink-200"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path
                      d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="Twitter"
                  class="w-11 h-11 rounded-full bg-gray-50 border border-gray-200 text-gray-500 flex items-center justify-center transition-all duration-300 hover:bg-pink-50 hover:text-pink-500 hover:border-pink-200"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path
                      d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="Facebook"
                  class="w-11 h-11 rounded-full bg-gray-50 border border-gray-200 text-gray-500 flex items-center justify-center transition-all duration-300 hover:bg-pink-50 hover:text-pink-500 hover:border-pink-200"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path
                      d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="GitHub"
                  class="w-11 h-11 rounded-full bg-gray-50 border border-gray-200 text-gray-500 flex items-center justify-center transition-all duration-300 hover:bg-pink-50 hover:text-pink-500 hover:border-pink-200"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path
                      d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface FormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

const form = ref<FormData>({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
})

const isSubmitting = ref(false)
const submitStatus = ref<{ type: 'success' | 'error'; message: string } | null>(null)

const handleSubmit = async () => {
  isSubmitting.value = true
  submitStatus.value = null

  setTimeout(() => {
    isSubmitting.value = false
    submitStatus.value = {
      type: 'success',
      message: "Thank you for your message! We'll get back to you soon.",
    }

    form.value = {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    }

    setTimeout(() => {
      submitStatus.value = null
    }, 5000)
  }, 1500)
}
</script>
