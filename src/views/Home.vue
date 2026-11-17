<template>
  <div class="overflow-x-hidden">
    <!-- Hero Section -->
    <section
      class="relative min-h-[90vh] flex items-center justify-center text-center py-16 overflow-hidden"
    >
      <div class="absolute inset-0 z-0">
        <div
          class="absolute w-[400px] h-[400px] rounded-full blur-[80px] opacity-20 bg-pink-500 -top-[200px] -left-[200px] animate-float"
        ></div>
        <div
          class="absolute w-[300px] h-[300px] rounded-full blur-[80px] opacity-20 bg-pink-400 -bottom-[150px] -right-[150px] animate-float"
          style="animation-delay: -5s"
        ></div>
        <div
          class="absolute w-[250px] h-[250px] rounded-full blur-[80px] opacity-20 bg-pink-300 top-1/2 right-[10%] animate-float"
          style="animation-delay: -10s"
        ></div>
      </div>

      <div class="max-w-7xl mx-auto px-8 relative z-10">
        <!-- Status tag -->
        <div
          class="inline-flex items-center gap-2 text-xs font-semibold text-pink-700 bg-pink-50 border border-pink-200 rounded-full px-4 py-1.5 mb-6 uppercase tracking-widest"
        >
          <span class="w-1.5 h-1.5 rounded-full bg-pink-500 animate-pulse"></span>
          Digital solutions studio
        </div>

        <div class="max-w-4xl mx-auto fade-in">
          <h1
            class="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-gray-900"
          >
            Building digital products
            <span
              class="block bg-gradient-to-r from-pink-500 to-pink-400 bg-clip-text text-transparent"
            >
              that actually work
            </span>
          </h1>
          <p class="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
            From web apps to mobile platforms — we turn complex ideas into clean, scalable
            technology that grows with your business.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <router-link to="/contact" class="btn-primary w-full sm:w-auto"
              >Get Started</router-link
            >
            <router-link to="/about" class="btn-secondary w-full sm:w-auto">Learn More</router-link>
          </div>
        </div>
      </div>

      <div
        class="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-pink-400 animate-bounce"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
    </section>

    <!-- Services Section -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-8">
        <div class="section-eyebrow">
          What we do
        </div>
        <div class="section-title">
          <h2>Our Services</h2>
          <p>Comprehensive digital solutions tailored to your business needs</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          <div
            v-for="(service, index) in services"
            :key="index"
            class="bg-white rounded-2xl p-8 border border-gray-200 transition-all duration-300 hover:-translate-y-1 hover:border-pink-200 hover:shadow-lg text-center"
          >
            <div
              class="w-12 h-12 rounded-xl bg-pink-50 border border-pink-100 text-pink-500 flex items-center justify-center mb-4 mx-auto"
            >
              <component :is="service.icon" />
            </div>
            <h3 class="text-base font-bold mb-2 text-gray-900">{{ service.title }}</h3>
            <p class="text-sm text-gray-500 leading-relaxed">{{ service.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-8">
        <div class="section-eyebrow">Why us</div>
        <div class="section-title">
          <h2>Built on four pillars</h2>
          <p class="text-gray-500">
            We combine craft, experience, and accountability to deliver work you can rely on
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          <div
            v-for="(reason, index) in whyChooseUs"
            :key="index"
            class="flex gap-5 p-7 rounded-2xl bg-gray-50 border border-gray-200 hover:border-pink-200 transition-all duration-300"
          >
            <div
              class="w-10 h-10 rounded-xl bg-pink-50 border border-pink-100 text-pink-500 flex items-center justify-center flex-shrink-0"
            >
              <component :is="reason.icon" class="w-5 h-5" />
            </div>
            <div>
              <h3 class="text-base font-bold mb-1.5 text-gray-900">{{ reason.title }}</h3>
              <p class="text-sm text-gray-500 leading-relaxed">{{ reason.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-8">
        <div class="section-eyebrow">
          Social proof
        </div>
        <div class="section-title">
          <h2>Trusted by leading organizations</h2>
          <p>Join hundreds of satisfied clients who trust us with their digital transformation</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          <div
            v-for="(testimonial, index) in testimonials"
            :key="index"
            class="bg-white p-7 rounded-2xl border border-gray-200"
          >
            <div class="text-3xl text-pink-300 font-serif leading-none mb-3">"</div>
            <p class="text-sm text-gray-500 leading-relaxed mb-5">{{ testimonial.text }}</p>
            <div class="flex items-center gap-3">
              <div
                class="w-9 h-9 rounded-full bg-pink-50 border border-pink-100 flex items-center justify-center text-xs font-semibold text-pink-700 flex-shrink-0"
              >
                {{
                  testimonial.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')
                }}
              </div>
              <div>
                <p class="text-sm font-semibold text-gray-900">{{ testimonial.name }}</p>
                <p class="text-xs text-gray-400">
                  {{ testimonial.role }}, {{ testimonial.company }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Stats -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
          <div
            v-for="(stat, index) in stats"
            :key="index"
            class="text-center py-8 px-4 bg-white rounded-2xl border border-gray-200"
          >
            <h3
              class="text-4xl font-extrabold mb-1 bg-gradient-to-r from-pink-500 to-pink-400 bg-clip-text text-transparent"
            >
              {{ stat.number }}
            </h3>
            <p class="text-sm text-gray-500 font-medium">{{ stat.label }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Bar -->
    <section class="py-16 px-8">
      <div class="max-w-4xl mx-auto bg-pink-50 border border-pink-200 rounded-3xl p-12 text-center">
        <h2 class="text-3xl font-bold text-gray-900 mb-3">Ready to start your project?</h2>
        <p class="text-gray-500 mb-8">Let's talk about how we can bring your idea to life.</p>
        <router-link to="/contact" class="btn-primary">Get in touch</router-link>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, h } from 'vue'

const WebIcon = defineComponent({
  render: () =>
    h(
      'svg',
      {
        width: '20',
        height: '20',
        viewBox: '0 0 24 24',
        fill: 'none',
        stroke: 'currentColor',
        'stroke-width': '2',
      },
      [
        h('rect', { x: '2', y: '3', width: '20', height: '14', rx: '2' }),
        h('path', { d: 'M8 21h8M12 17v4' }),
      ],
    ),
})

const MobileIcon = defineComponent({
  render: () =>
    h(
      'svg',
      {
        width: '20',
        height: '20',
        viewBox: '0 0 24 24',
        fill: 'none',
        stroke: 'currentColor',
        'stroke-width': '2',
      },
      [
        h('rect', { x: '5', y: '2', width: '14', height: '20', rx: '2', ry: '2' }),
        h('line', { x1: '12', y1: '18', x2: '12.01', y2: '18' }),
      ],
    ),
})

const ConsultIcon = defineComponent({
  render: () =>
    h(
      'svg',
      {
        width: '20',
        height: '20',
        viewBox: '0 0 24 24',
        fill: 'none',
        stroke: 'currentColor',
        'stroke-width': '2',
      },
      [
        h('path', { d: 'M3 3h18v12H3z' }),
        h('path', { d: 'M12 17v4M8 21h8' }),
        h('circle', { cx: '12', cy: '9', r: '2' }),
      ],
    ),
})

const DesignIcon = defineComponent({
  render: () =>
    h(
      'svg',
      {
        width: '20',
        height: '20',
        viewBox: '0 0 24 24',
        fill: 'none',
        stroke: 'currentColor',
        'stroke-width': '2',
      },
      [
        h('circle', { cx: '12', cy: '12', r: '3' }),
        h('path', {
          d: 'M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12',
        }),
      ],
    ),
})

const DatabaseIcon = defineComponent({
  render: () =>
    h(
      'svg',
      {
        width: '20',
        height: '20',
        viewBox: '0 0 24 24',
        fill: 'none',
        stroke: 'currentColor',
        'stroke-width': '2',
      },
      [
        h('ellipse', { cx: '12', cy: '5', rx: '9', ry: '3' }),
        h('path', { d: 'M21 12c0 1.66-4 3-9 3s-9-1.34-9-3' }),
        h('path', { d: 'M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5' }),
      ],
    ),
})

const InnovationIcon = defineComponent({
  render: () =>
    h(
      'svg',
      {
        width: '20',
        height: '20',
        viewBox: '0 0 24 24',
        fill: 'none',
        stroke: 'currentColor',
        'stroke-width': '2',
      },
      [
        h('path', {
          d: 'M9 18h6M10 22h4M12 2a7 7 0 0 1 7 7c0 2.38-1.19 4.47-3 5.74V17H8v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 0 1 7-7z',
        }),
      ],
    ),
})

const ReliabilityIcon = defineComponent({
  render: () =>
    h(
      'svg',
      {
        width: '20',
        height: '20',
        viewBox: '0 0 24 24',
        fill: 'none',
        stroke: 'currentColor',
        'stroke-width': '2',
      },
      [
        h('path', { d: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' }),
        h('path', { d: 'M9 12l2 2 4-4' }),
      ],
    ),
})

const ExpertiseIcon = defineComponent({
  render: () =>
    h(
      'svg',
      {
        width: '20',
        height: '20',
        viewBox: '0 0 24 24',
        fill: 'none',
        stroke: 'currentColor',
        'stroke-width': '2',
      },
      [
        h('circle', { cx: '12', cy: '8', r: '6' }),
        h('path', {
          d: 'M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32',
        }),
      ],
    ),
})

const SupportIcon = defineComponent({
  render: () =>
    h(
      'svg',
      {
        width: '20',
        height: '20',
        viewBox: '0 0 24 24',
        fill: 'none',
        stroke: 'currentColor',
        'stroke-width': '2',
      },
      [h('path', { d: 'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z' })],
    ),
})

const services = [
  {
    title: 'Web Development',
    description: 'Custom web applications and responsive websites built with modern technologies.',
    icon: WebIcon,
  },
  {
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile apps for iOS and Android devices.',
    icon: MobileIcon,
  },
  {
    title: 'IT Consultancy',
    description: 'Strategic IT consulting to help your business leverage technology effectively.',
    icon: ConsultIcon,
  },
  {
    title: 'Graphics Design',
    description: 'Creative and professional designs that enhance your brand identity.',
    icon: DesignIcon,
  },
  {
    title: 'Database Management',
    description: 'Robust database design, optimization, and management solutions.',
    icon: DatabaseIcon,
  },
]

const whyChooseUs = [
  {
    title: 'Innovation',
    description:
      'We stay at the forefront of technology, using cutting-edge tools and methodologies to deliver innovative solutions that give you a competitive edge.',
    icon: InnovationIcon,
  },
  {
    title: 'Reliability',
    description:
      'Count on us for consistent, high-quality deliverables. We build systems that are stable, secure, and scalable for long-term success.',
    icon: ReliabilityIcon,
  },
  {
    title: 'Expertise',
    description:
      'Our team brings years of combined experience across various industries and technologies, ensuring expert guidance at every step.',
    icon: ExpertiseIcon,
  },
  {
    title: 'Support',
    description:
      'Beyond delivery, we provide ongoing support and maintenance to ensure your systems continue to perform optimally.',
    icon: SupportIcon,
  },
]

const testimonials = [
  {
    text: 'Novastack transformed our digital presence. Their expertise and professionalism are unmatched.',
    name: 'Sarah Johnson',
    role: 'CEO',
    company: 'TechCorp Inc.',
  },
  {
    text: 'Working with Novastack was a game-changer. They delivered exactly what we needed, on time and within budget.',
    name: 'Michael Chen',
    role: 'CTO',
    company: 'InnovateLabs',
  },
  {
    text: "The team's attention to detail and commitment to excellence is remarkable. Highly recommended!",
    name: 'Emily Rodriguez',
    role: 'Director',
    company: 'Digital Solutions Group',
  },
]

const stats = [
  { number: '200+', label: 'Projects Completed' },
  { number: '150+', label: 'Happy Clients' },
  { number: '10+', label: 'Years Experience' },
  { number: '24/7', label: 'Support Available' },
]
</script>

