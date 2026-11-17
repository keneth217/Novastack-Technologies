<template>
  <div class="overflow-x-hidden">
    <!-- Hero Section -->
    <section class="relative min-h-[50vh] flex items-center justify-center text-center py-20 overflow-hidden">
      <div class="absolute inset-0 z-0">
        <div
          class="absolute w-[400px] h-[400px] rounded-full blur-[80px] opacity-20 bg-pink-500 -top-[200px] -left-[200px] animate-float"
        ></div>
        <div
          class="absolute w-[300px] h-[300px] rounded-full blur-[80px] opacity-20 bg-pink-400 -bottom-[150px] -right-[150px] animate-float"
          style="animation-delay: -5s"
        ></div>
      </div>
      <div class="max-w-7xl mx-auto px-8 relative z-10 fade-in">
        <div class="section-eyebrow">About us</div>
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-gray-900">
          About Novastack
          <span class="block bg-gradient-to-r from-pink-500 to-pink-400 bg-clip-text text-transparent">
            Technologies
          </span>
        </h1>
        <p class="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
          We are a forward-thinking technology company dedicated to transforming
          businesses through innovative digital solutions.
        </p>
      </div>
    </section>

    <!-- Company Story -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div class="order-2 lg:order-1">
            <div class="section-eyebrow">Our Story</div>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Building Digital Excellence Since Day One
            </h2>
            <div class="space-y-4 text-gray-600 leading-relaxed">
              <p class="text-lg">
                Novastack Technologies was founded with a vision to bridge the gap between 
                cutting-edge technology and business success. Since our inception, we have 
                been committed to delivering exceptional digital solutions that empower 
                organizations of all sizes.
              </p>
              <p class="text-lg">
                We started as a small team of passionate developers and technology enthusiasts 
                who believed in the power of well-crafted software. Today, we've grown into a 
                trusted partner for startups, SMEs, enterprises, and institutions worldwide, 
                helping them navigate their digital transformation journey.
              </p>
              <p class="text-lg">
                Our journey has been marked by continuous learning, innovation, and an 
                unwavering commitment to excellence. We've successfully completed hundreds of 
                projects, each one teaching us something new and helping us refine our approach 
                to technology consulting and development.
              </p>
            </div>
          </div>
          <div class="order-1 lg:order-2 relative">
            <div class="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <div class="absolute inset-0 bg-gradient-to-br from-pink-500 via-pink-400 to-pink-600 opacity-20"></div>
              <div class="absolute inset-0 bg-gradient-to-tr from-transparent via-pink-300/10 to-pink-500/20"></div>
              <div class="absolute inset-4 rounded-2xl border-2 border-pink-200/30 backdrop-blur-sm bg-white/5"></div>
              <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gradient-to-br from-pink-500 to-pink-600 opacity-30 blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission & Vision -->
    <section class="py-20 bg-gradient-to-br from-pink-50 to-pink-100/50">
      <div class="max-w-7xl mx-auto px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <!-- Mission -->
          <div class="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-pink-100 hover:shadow-xl transition-shadow duration-300">
            <div class="w-16 h-16 rounded-xl bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center mb-6">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                <path d="M2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
            </div>
            <h3 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p class="text-gray-600 leading-relaxed mb-4">
              To deliver high-quality digital solutions that enable businesses to thrive in 
              an increasingly digital world. We strive to combine technical excellence with 
              business acumen, creating solutions that are not only technically sound but 
              also strategically aligned with our clients' goals.
            </p>
            <p class="text-gray-600 leading-relaxed">
              We are committed to understanding our clients' unique challenges and 
              opportunities, ensuring that every solution we deliver drives real business 
              value. Through innovation, expertise, and dedication, we help organizations 
              leverage technology as a competitive advantage.
            </p>
          </div>

          <!-- Vision -->
          <div class="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-pink-100 hover:shadow-xl transition-shadow duration-300">
            <div class="w-16 h-16 rounded-xl bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center mb-6">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <h3 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p class="text-gray-600 leading-relaxed mb-4">
              To be the leading technology partner for businesses seeking to transform 
              their digital landscape. We envision a future where every organization, 
              regardless of size, has access to world-class digital solutions that drive 
              innovation and growth.
            </p>
            <p class="text-gray-600 leading-relaxed">
              We aim to build lasting relationships with our clients, becoming an integral 
              part of their success story. By staying at the forefront of technology trends 
              and continuously improving our capabilities, we ensure that our clients always 
              have access to the best tools and strategies for success.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Core Values -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-8">
        <div class="section-title">
          <h2>Core Values</h2>
          <p>The principles that guide everything we do</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div 
            class="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border-2 border-gray-100 transition-all duration-300 hover:border-pink-300 hover:shadow-xl hover:-translate-y-1" 
            v-for="(value, index) in coreValues" 
            :key="index"
          >
            <div class="w-16 h-16 rounded-xl bg-gradient-to-br from-pink-500 to-pink-600 text-white flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
              <component :is="value.icon" class="w-8 h-8" />
            </div>
            <h3 class="text-xl font-bold mb-4 text-gray-900">{{ value.title }}</h3>
            <p class="text-gray-600 leading-relaxed">{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Team / Leadership -->
    <section class="py-20 bg-gradient-to-br from-gray-50 to-pink-50/30">
      <div class="max-w-7xl mx-auto px-8">
        <div class="section-title">
          <h2>Our Leadership</h2>
          <p>Experienced professionals leading the way</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div 
            class="bg-white rounded-2xl p-8 text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            v-for="(member, index) in leadership" 
            :key="index"
          >
            <div class="mb-6 flex justify-center">
              <div class="w-24 h-24 rounded-full bg-gradient-to-br from-pink-500 to-pink-600 text-white flex items-center justify-center text-3xl font-bold shadow-lg">
                {{ member.initials }}
              </div>
            </div>
            <h3 class="text-xl font-bold mb-2 text-gray-900">{{ member.name }}</h3>
            <p class="text-pink-500 font-semibold mb-4">{{ member.role }}</p>
            <p class="text-gray-600 leading-relaxed text-sm">{{ member.bio }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div class="text-center py-8 px-4 bg-white rounded-2xl border border-gray-200">
            <h3 class="text-4xl font-extrabold mb-1 bg-gradient-to-r from-pink-500 to-pink-400 bg-clip-text text-transparent">
              200+
            </h3>
            <p class="text-sm text-gray-500 font-medium">Projects Completed</p>
          </div>
          <div class="text-center py-8 px-4 bg-white rounded-2xl border border-gray-200">
            <h3 class="text-4xl font-extrabold mb-1 bg-gradient-to-r from-pink-500 to-pink-400 bg-clip-text text-transparent">
              150+
            </h3>
            <p class="text-sm text-gray-500 font-medium">Happy Clients</p>
          </div>
          <div class="text-center py-8 px-4 bg-white rounded-2xl border border-gray-200">
            <h3 class="text-4xl font-extrabold mb-1 bg-gradient-to-r from-pink-500 to-pink-400 bg-clip-text text-transparent">
              10+
            </h3>
            <p class="text-sm text-gray-500 font-medium">Years Experience</p>
          </div>
          <div class="text-center py-8 px-4 bg-white rounded-2xl border border-gray-200">
            <h3 class="text-4xl font-extrabold mb-1 bg-gradient-to-r from-pink-500 to-pink-400 bg-clip-text text-transparent">
              24/7
            </h3>
            <p class="text-sm text-gray-500 font-medium">Support Available</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 px-8">
      <div class="max-w-4xl mx-auto bg-pink-50 border border-pink-200 rounded-3xl p-12 text-center">
        <h2 class="text-3xl font-bold text-gray-900 mb-3">Ready to work with us?</h2>
        <p class="text-gray-500 mb-8">
          Let's discuss how we can help transform your business with innovative digital solutions.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link to="/contact" class="btn-primary w-full sm:w-auto">Get in Touch</router-link>
          <router-link to="/company-profile" class="btn-secondary w-full sm:w-auto">View Our Services</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, h } from 'vue'

const InnovationIcon = defineComponent({
  render: () => h('svg', { width: '32', height: '32', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' }, [
    h('path', { d: 'M12 2L2 7l10 5 10-5-10-5z' }),
    h('path', { d: 'M2 17l10 5 10-5M2 12l10 5 10-5' })
  ])
})

const IntegrityIcon = defineComponent({
  render: () => h('svg', { width: '32', height: '32', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' }, [
    h('path', { d: 'M9 12l2 2 4-4' }),
    h('path', { d: 'M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3' }),
    h('path', { d: 'M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3' }),
    h('path', { d: 'M12 21c0-1-1-3-3-3s-3 2-3 3 2 3 3 3 3-2 3-3' }),
    h('path', { d: 'M12 3c0 1 1 3 3 3s3-2 3-3-2-3-3-3-3 2-3 3' })
  ])
})

const ExcellenceIcon = defineComponent({
  render: () => h('svg', { width: '32', height: '32', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' }, [
    h('path', { d: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z' })
  ])
})

const CustomerFocusIcon = defineComponent({
  render: () => h('svg', { width: '32', height: '32', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' }, [
    h('path', { d: 'M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2' }),
    h('circle', { cx: '12', cy: '7', r: '4' })
  ])
})

const coreValues = [
  {
    title: 'Innovation',
    description: 'We constantly explore new technologies and methodologies to deliver cutting-edge solutions that give our clients a competitive edge.',
    icon: InnovationIcon
  },
  {
    title: 'Integrity',
    description: 'We operate with honesty, transparency, and ethical practices in all our interactions, building trust through consistent actions.',
    icon: IntegrityIcon
  },
  {
    title: 'Excellence',
    description: 'We are committed to delivering superior quality in every project, paying attention to details and exceeding expectations.',
    icon: ExcellenceIcon
  },
  {
    title: 'Customer Focus',
    description: 'Our clients\' success is our success. We prioritize understanding their needs and delivering solutions that create real value.',
    icon: CustomerFocusIcon
  }
]

const leadership = [
  {
    name: 'John Anderson',
    role: 'Chief Executive Officer',
    initials: 'JA',
    bio: 'With over 15 years of experience in technology leadership, John drives strategic vision and growth.'
  },
  {
    name: 'Lisa Martinez',
    role: 'Chief Technology Officer',
    initials: 'LM',
    bio: 'A technology visionary with expertise in software architecture and digital transformation strategies.'
  },
  {
    name: 'David Kim',
    role: 'Head of Development',
    initials: 'DK',
    bio: 'Leading our development teams with a passion for clean code and innovative solutions.'
  }
]
</script>

<style scoped>
/* All styles are now using Tailwind CSS classes */
</style>
