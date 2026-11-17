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
        <div class="section-eyebrow">Company profile</div>
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-gray-900">
          Company
          <span class="block bg-gradient-to-r from-pink-500 to-pink-400 bg-clip-text text-transparent">
            Profile
          </span>
        </h1>
        <p class="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Comprehensive digital solutions tailored to your business needs
        </p>
      </div>
    </section>

    <!-- Services Overview -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-8">
        <div class="section-title">
          <h2>Our Services</h2>
          <p>End-to-end digital solutions for modern businesses</p>
        </div>
        
        <!-- Web Development -->
        <div class="mb-16" id="web-dev">
          <div class="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-8 lg:gap-12 items-start">
            <div class="w-32 h-32 rounded-2xl bg-gradient-to-br from-pink-500 to-pink-600 text-white flex items-center justify-center shadow-xl flex-shrink-0 mx-auto lg:mx-0">
              <WebIcon />
            </div>
            <div>
              <h3 class="text-3xl font-bold text-gray-900 mb-4">Web Development</h3>
              <p class="text-lg text-gray-600 leading-relaxed mb-6">
                We build modern, responsive web applications and websites that deliver 
                exceptional user experiences. Our expertise spans from simple landing pages 
                to complex enterprise applications.
              </p>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div class="flex items-center gap-3 text-gray-700">
                  <div class="w-6 h-6 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ec4899" stroke-width="3">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Custom web applications</span>
                </div>
                <div class="flex items-center gap-3 text-gray-700">
                  <div class="w-6 h-6 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ec4899" stroke-width="3">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>E-commerce solutions</span>
                </div>
                <div class="flex items-center gap-3 text-gray-700">
                  <div class="w-6 h-6 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ec4899" stroke-width="3">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Content management systems</span>
                </div>
                <div class="flex items-center gap-3 text-gray-700">
                  <div class="w-6 h-6 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ec4899" stroke-width="3">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Progressive web apps (PWA)</span>
                </div>
                <div class="flex items-center gap-3 text-gray-700">
                  <div class="w-6 h-6 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ec4899" stroke-width="3">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>API development and integration</span>
                </div>
                <div class="flex items-center gap-3 text-gray-700">
                  <div class="w-6 h-6 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ec4899" stroke-width="3">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Performance optimization</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Mobile Development -->
        <div class="mb-16 bg-gradient-to-br from-pink-50 to-pink-100/50 rounded-3xl p-8 md:p-12" id="mobile-dev">
          <div class="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:gap-12 items-start">
            <div class="order-2 lg:order-1">
              <h3 class="text-3xl font-bold text-gray-900 mb-4">Mobile Application Development</h3>
              <p class="text-lg text-gray-600 leading-relaxed mb-6">
                We create powerful mobile applications for iOS and Android that engage users 
                and drive business growth. From native apps to cross-platform solutions.
              </p>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div class="flex items-center gap-3 text-gray-700">
                  <div class="w-6 h-6 rounded-full bg-pink-200 flex items-center justify-center flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#db2777" stroke-width="3">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Native iOS and Android apps</span>
                </div>
                <div class="flex items-center gap-3 text-gray-700">
                  <div class="w-6 h-6 rounded-full bg-pink-200 flex items-center justify-center flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#db2777" stroke-width="3">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Cross-platform development</span>
                </div>
                <div class="flex items-center gap-3 text-gray-700">
                  <div class="w-6 h-6 rounded-full bg-pink-200 flex items-center justify-center flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#db2777" stroke-width="3">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Mobile UI/UX design</span>
                </div>
                <div class="flex items-center gap-3 text-gray-700">
                  <div class="w-6 h-6 rounded-full bg-pink-200 flex items-center justify-center flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#db2777" stroke-width="3">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>App store optimization</span>
                </div>
                <div class="flex items-center gap-3 text-gray-700">
                  <div class="w-6 h-6 rounded-full bg-pink-200 flex items-center justify-center flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#db2777" stroke-width="3">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Mobile analytics integration</span>
                </div>
                <div class="flex items-center gap-3 text-gray-700">
                  <div class="w-6 h-6 rounded-full bg-pink-200 flex items-center justify-center flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#db2777" stroke-width="3">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Maintenance and updates</span>
                </div>
              </div>
            </div>
            <div class="w-32 h-32 rounded-2xl bg-gradient-to-br from-pink-500 to-pink-600 text-white flex items-center justify-center shadow-xl flex-shrink-0 mx-auto lg:mx-0 order-1 lg:order-2">
              <MobileIcon />
            </div>
          </div>
        </div>

        <!-- IT Consultancy -->
        <div class="mb-16" id="it-consultancy">
          <div class="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-8 lg:gap-12 items-start">
            <div class="w-32 h-32 rounded-2xl bg-gradient-to-br from-pink-500 to-pink-600 text-white flex items-center justify-center shadow-xl flex-shrink-0 mx-auto lg:mx-0">
              <ConsultIcon />
            </div>
            <div>
              <h3 class="text-3xl font-bold text-gray-900 mb-4">IT Consultancy</h3>
              <p class="text-lg text-gray-600 leading-relaxed mb-6">
                Strategic IT consulting to help your business leverage technology effectively. 
                We analyze your current systems and recommend solutions that align with your goals.
              </p>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div class="flex items-center gap-3 text-gray-700">
                  <div class="w-6 h-6 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ec4899" stroke-width="3">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Technology strategy and planning</span>
                </div>
                <div class="flex items-center gap-3 text-gray-700">
                  <div class="w-6 h-6 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ec4899" stroke-width="3">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Digital transformation consulting</span>
                </div>
                <div class="flex items-center gap-3 text-gray-700">
                  <div class="w-6 h-6 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ec4899" stroke-width="3">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>System architecture design</span>
                </div>
                <div class="flex items-center gap-3 text-gray-700">
                  <div class="w-6 h-6 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ec4899" stroke-width="3">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Cloud migration services</span>
                </div>
                <div class="flex items-center gap-3 text-gray-700">
                  <div class="w-6 h-6 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ec4899" stroke-width="3">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Security audits and recommendations</span>
                </div>
                <div class="flex items-center gap-3 text-gray-700">
                  <div class="w-6 h-6 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ec4899" stroke-width="3">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Process optimization</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Graphics Design -->
        <div class="mb-16 bg-gradient-to-br from-pink-50 to-pink-100/50 rounded-3xl p-8 md:p-12" id="graphics">
          <div class="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:gap-12 items-start">
            <div class="order-2 lg:order-1">
              <h3 class="text-3xl font-bold text-gray-900 mb-4">Graphics Design</h3>
              <p class="text-lg text-gray-600 leading-relaxed mb-6">
                Creative and professional designs that enhance your brand identity and 
                communicate your message effectively across all platforms.
              </p>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div class="flex items-center gap-3 text-gray-700">
                  <div class="w-6 h-6 rounded-full bg-pink-200 flex items-center justify-center flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#db2777" stroke-width="3">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Brand identity design</span>
                </div>
                <div class="flex items-center gap-3 text-gray-700">
                  <div class="w-6 h-6 rounded-full bg-pink-200 flex items-center justify-center flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#db2777" stroke-width="3">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Logo design and branding</span>
                </div>
                <div class="flex items-center gap-3 text-gray-700">
                  <div class="w-6 h-6 rounded-full bg-pink-200 flex items-center justify-center flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#db2777" stroke-width="3">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>UI/UX design</span>
                </div>
                <div class="flex items-center gap-3 text-gray-700">
                  <div class="w-6 h-6 rounded-full bg-pink-200 flex items-center justify-center flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#db2777" stroke-width="3">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Marketing materials</span>
                </div>
                <div class="flex items-center gap-3 text-gray-700">
                  <div class="w-6 h-6 rounded-full bg-pink-200 flex items-center justify-center flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#db2777" stroke-width="3">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Social media graphics</span>
                </div>
                <div class="flex items-center gap-3 text-gray-700">
                  <div class="w-6 h-6 rounded-full bg-pink-200 flex items-center justify-center flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#db2777" stroke-width="3">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Infographics and presentations</span>
                </div>
              </div>
            </div>
            <div class="w-32 h-32 rounded-2xl bg-gradient-to-br from-pink-500 to-pink-600 text-white flex items-center justify-center shadow-xl flex-shrink-0 mx-auto lg:mx-0 order-1 lg:order-2">
              <DesignIcon />
            </div>
          </div>
        </div>

        <!-- Database Management -->
        <div class="mb-16" id="database">
          <div class="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-8 lg:gap-12 items-start">
            <div class="w-32 h-32 rounded-2xl bg-gradient-to-br from-pink-500 to-pink-600 text-white flex items-center justify-center shadow-xl flex-shrink-0 mx-auto lg:mx-0">
              <DatabaseIcon />
            </div>
            <div>
              <h3 class="text-3xl font-bold text-gray-900 mb-4">Database Design & Management</h3>
              <p class="text-lg text-gray-600 leading-relaxed mb-6">
                Robust database solutions that ensure data integrity, performance, and 
                scalability for your applications.
              </p>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div class="flex items-center gap-3 text-gray-700">
                  <div class="w-6 h-6 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ec4899" stroke-width="3">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Database design and modeling</span>
                </div>
                <div class="flex items-center gap-3 text-gray-700">
                  <div class="w-6 h-6 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ec4899" stroke-width="3">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Database optimization</span>
                </div>
                <div class="flex items-center gap-3 text-gray-700">
                  <div class="w-6 h-6 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ec4899" stroke-width="3">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Data migration services</span>
                </div>
                <div class="flex items-center gap-3 text-gray-700">
                  <div class="w-6 h-6 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ec4899" stroke-width="3">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Backup and recovery solutions</span>
                </div>
                <div class="flex items-center gap-3 text-gray-700">
                  <div class="w-6 h-6 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ec4899" stroke-width="3">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Database administration</span>
                </div>
                <div class="flex items-center gap-3 text-gray-700">
                  <div class="w-6 h-6 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ec4899" stroke-width="3">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Performance monitoring</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Industries Served -->
    <section class="py-20 bg-gradient-to-br from-gray-50 to-pink-50/30">
      <div class="max-w-7xl mx-auto px-8">
        <div class="section-title">
          <h2>Industries We Serve</h2>
          <p>Experience across diverse sectors</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <div 
            class="bg-white rounded-2xl p-8 text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            v-for="(industry, index) in industries" 
            :key="index"
          >
            <div class="w-16 h-16 rounded-xl bg-gradient-to-br from-pink-500 to-pink-600 text-white flex items-center justify-center mx-auto mb-6 shadow-lg">
              <component :is="industry.icon" class="w-8 h-8" />
            </div>
            <h3 class="text-xl font-bold mb-3 text-gray-900">{{ industry.name }}</h3>
            <p class="text-gray-600 leading-relaxed">{{ industry.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Development Process -->
    <section class="py-20 bg-white">
      <div class="max-w-4xl mx-auto px-8">
        <div class="section-title">
          <h2>Our Development Process</h2>
          <p>A structured approach to delivering exceptional results</p>
        </div>
        <div class="relative mt-12">
          <div class="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pink-500 via-pink-400 to-pink-500 hidden md:block"></div>
          <div class="space-y-12">
            <div 
              class="relative flex items-start gap-8" 
              v-for="(step, index) in processSteps" 
              :key="index"
            >
              <div class="w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-pink-600 text-white flex items-center justify-center font-bold text-xl shadow-lg flex-shrink-0 border-4 border-white relative z-10">
                {{ index + 1 }}
              </div>
              <div class="flex-1 pt-2">
                <h3 class="text-2xl font-bold text-gray-900 mb-3">{{ step.title }}</h3>
                <p class="text-gray-600 leading-relaxed">{{ step.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Technologies -->
    <section class="py-20 bg-gradient-to-br from-pink-50 to-gray-50">
      <div class="max-w-7xl mx-auto px-8">
        <div class="section-title">
          <h2>Technologies We Use</h2>
          <p>Cutting-edge tools and frameworks for modern development</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          <div 
            class="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            v-for="(category, index) in technologies" 
            :key="index"
          >
            <h3 class="text-xl font-bold text-gray-900 mb-4">{{ category.name }}</h3>
            <div class="flex flex-wrap gap-2">
              <span 
                class="px-4 py-2 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-lg text-sm font-medium shadow-sm hover:shadow-md transition-shadow"
                v-for="(tech, techIndex) in category.techs" 
                :key="techIndex"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 px-8">
      <div class="max-w-4xl mx-auto bg-pink-50 border border-pink-200 rounded-3xl p-12 text-center">
        <h2 class="text-3xl font-bold text-gray-900 mb-3">Ready to start your project?</h2>
        <p class="text-gray-500 mb-8">
          Let's discuss how we can bring your vision to life with innovative digital solutions.
        </p>
        <router-link to="/contact" class="btn-primary">Contact Us</router-link>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, h } from 'vue'

const WebIcon = defineComponent({
  render: () => h('svg', { width: '48', height: '48', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' }, [
    h('path', { d: 'M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z' }),
    h('polyline', { points: '3.27 6.96 12 12.01 20.73 6.96' }),
    h('line', { x1: '12', y1: '22.08', x2: '12', y2: '12' })
  ])
})

const MobileIcon = defineComponent({
  render: () => h('svg', { width: '48', height: '48', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' }, [
    h('rect', { x: '5', y: '2', width: '14', height: '20', rx: '2', ry: '2' }),
    h('line', { x1: '12', y1: '18', x2: '12.01', y2: '18' })
  ])
})

const ConsultIcon = defineComponent({
  render: () => h('svg', { width: '48', height: '48', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' }, [
    h('path', { d: 'M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z' }),
    h('circle', { cx: '12', cy: '12', r: '4' }),
    h('path', { d: 'M12 8v4' }),
    h('path', { d: 'M12 16v.01' })
  ])
})

const DesignIcon = defineComponent({
  render: () => h('svg', { width: '48', height: '48', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' }, [
    h('polygon', { points: '12 2 2 7 12 12 22 7 12 2' }),
    h('polyline', { points: '2 17 12 22 22 17' }),
    h('polyline', { points: '2 12 12 17 22 12' })
  ])
})

const DatabaseIcon = defineComponent({
  render: () => h('svg', { width: '48', height: '48', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' }, [
    h('ellipse', { cx: '12', cy: '5', rx: '9', ry: '3' }),
    h('path', { d: 'M21 12c0 1.66-4 3-9 3s-9-1.34-9-3' }),
    h('path', { d: 'M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5' })
  ])
})

const EducationIcon = defineComponent({
  render: () => h('svg', { width: '32', height: '32', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' }, [
    h('path', { d: 'M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z' }),
    h('path', { d: 'M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z' })
  ])
})

const FinanceIcon = defineComponent({
  render: () => h('svg', { width: '32', height: '32', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' }, [
    h('line', { x1: '12', y1: '1', x2: '12', y2: '23' }),
    h('path', { d: 'M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6' })
  ])
})

const HealthcareIcon = defineComponent({
  render: () => h('svg', { width: '32', height: '32', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' }, [
    h('path', { d: 'M22 11.08V12a10 10 0 1 1-5.93-9.14' }),
    h('polyline', { points: '22 4 12 14.01 9 11.01' })
  ])
})

const RetailIcon = defineComponent({
  render: () => h('svg', { width: '32', height: '32', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' }, [
    h('path', { d: 'M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z' }),
    h('line', { x1: '3', y1: '6', x2: '21', y2: '6' }),
    h('path', { d: 'M16 10a4 4 0 0 1-8 0' })
  ])
})

const EnterpriseIcon = defineComponent({
  render: () => h('svg', { width: '32', height: '32', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' }, [
    h('path', { d: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' }),
    h('polyline', { points: '9 22 9 12 15 12 15 22' })
  ])
})

const StartupIcon = defineComponent({
  render: () => h('svg', { width: '32', height: '32', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' }, [
    h('path', { d: 'M12 2L2 7l10 5 10-5-10-5z' }),
    h('path', { d: 'M2 17l10 5 10-5M2 12l10 5 10-5' })
  ])
})

const industries = [
  {
    name: 'Education',
    description: 'Learning management systems and educational platforms',
    icon: EducationIcon
  },
  {
    name: 'Finance',
    description: 'Secure financial applications and banking solutions',
    icon: FinanceIcon
  },
  {
    name: 'Healthcare',
    description: 'HIPAA-compliant medical software and health systems',
    icon: HealthcareIcon
  },
  {
    name: 'Retail',
    description: 'E-commerce platforms and retail management systems',
    icon: RetailIcon
  },
  {
    name: 'Enterprises',
    description: 'Large-scale enterprise solutions and integrations',
    icon: EnterpriseIcon
  },
  {
    name: 'Startups',
    description: 'Rapid MVP development and scalable solutions',
    icon: StartupIcon
  }
]

const processSteps = [
  {
    title: 'Discovery & Planning',
    description: 'We start by understanding your business goals, target audience, and requirements to create a comprehensive project plan.'
  },
  {
    title: 'Design & Prototyping',
    description: 'Our design team creates wireframes and prototypes, ensuring the solution aligns with your vision and user needs.'
  },
  {
    title: 'Development',
    description: 'Using agile methodologies, we build your solution iteratively, with regular updates and feedback loops.'
  },
  {
    title: 'Testing & Quality Assurance',
    description: 'Rigorous testing ensures your application is bug-free, secure, and performs optimally across all platforms.'
  },
  {
    title: 'Deployment',
    description: 'We handle the deployment process, ensuring a smooth launch with minimal disruption to your operations.'
  },
  {
    title: 'Support & Maintenance',
    description: 'Ongoing support and maintenance keep your solution updated, secure, and performing at its best.'
  }
]

const technologies = [
  {
    name: 'Web Technologies',
    techs: ['React', 'Vue.js', 'Angular', 'Node.js', 'Next.js', 'TypeScript', 'HTML5', 'CSS3']
  },
  {
    name: 'Mobile Development',
    techs: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'iOS', 'Android']
  },
  {
    name: 'Backend & Cloud',
    techs: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Microservices']
  },
  {
    name: 'Databases',
    techs: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch']
  },
  {
    name: 'APIs & Integration',
    techs: ['REST APIs', 'GraphQL', 'WebSockets', 'gRPC', 'Third-party Integrations']
  }
]
</script>

<style scoped>
/* All styles are now using Tailwind CSS classes */
</style>
