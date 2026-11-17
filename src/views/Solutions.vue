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
        <div class="section-eyebrow">Solutions</div>
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-gray-900">
          Our
          <span class="block bg-gradient-to-r from-pink-500 to-pink-400 bg-clip-text text-transparent">
            Solutions
          </span>
        </h1>
        <p class="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Custom-built software solutions that drive business growth and operational efficiency
        </p>
      </div>
    </section>

    <!-- Solutions Overview -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-8">
        <div class="section-title">
          <h2>Tailored Solutions for Every Business Need</h2>
          <p>We build comprehensive software systems that streamline operations and enhance productivity</p>
        </div>
      </div>
    </section>

    <!-- Case Studies Section -->
    <section class="py-20 bg-gradient-to-br from-gray-50 to-pink-50/30">
      <div class="max-w-7xl mx-auto px-8">
        <div class="section-title">
          <h2>Case Studies</h2>
          <p>Real solutions delivering real results for our clients</p>
        </div>

        <div class="space-y-16 mt-12">
          <!-- Point of Sale System -->
          <div class="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div class="p-8 md:p-12 order-2 lg:order-1">
                <div class="inline-block mb-4">
                  <span class="px-4 py-2 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-full text-sm font-semibold">Retail Solution</span>
                </div>
                <h3 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Point of Sale (POS) System</h3>
                <p class="text-lg text-gray-600 leading-relaxed mb-6">
                  A comprehensive retail management system designed to streamline sales operations, inventory management, 
                  and business reporting. This solution empowers businesses to manage their operations efficiently 
                  from a single, integrated platform.
                </p>
                <div class="mb-6">
                  <h4 class="text-xl font-bold text-gray-900 mb-3">Key Features:</h4>
                  <ul class="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <li class="flex items-start gap-3">
                      <div class="w-6 h-6 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ec4899" stroke-width="3">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span class="text-gray-700">Sales transaction processing</span>
                    </li>
                    <li class="flex items-start gap-3">
                      <div class="w-6 h-6 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ec4899" stroke-width="3">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span class="text-gray-700">Inventory management</span>
                    </li>
                    <li class="flex items-start gap-3">
                      <div class="w-6 h-6 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ec4899" stroke-width="3">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span class="text-gray-700">Customer management</span>
                    </li>
                    <li class="flex items-start gap-3">
                      <div class="w-6 h-6 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ec4899" stroke-width="3">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span class="text-gray-700">Sales reporting & analytics</span>
                    </li>
                    <li class="flex items-start gap-3">
                      <div class="w-6 h-6 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ec4899" stroke-width="3">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span class="text-gray-700">Multi-payment support</span>
                    </li>
                    <li class="flex items-start gap-3">
                      <div class="w-6 h-6 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ec4899" stroke-width="3">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span class="text-gray-700">Receipt printing & email</span>
                    </li>
                  </ul>
                </div>
                <div class="pt-4 border-t border-gray-200">
                  <h4 class="text-lg font-semibold text-gray-900 mb-2">Business Impact:</h4>
                  <p class="text-gray-600 leading-relaxed">
                    Reduces transaction processing time by 70%, improves inventory accuracy, and provides real-time 
                    insights for better decision-making.
                  </p>
                </div>
              </div>
              <div class="bg-gradient-to-br from-pink-500 to-pink-600 p-8 md:p-12 flex items-center justify-center order-1 lg:order-2">
                <div class="w-full h-full max-w-md">
                  <component :is="POSIcon" class="w-full h-full text-white opacity-90" />
                </div>
              </div>
            </div>
          </div>

          <!-- Scheme of Work -->
          <div class="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div class="bg-gradient-to-br from-blue-500 to-blue-600 p-8 md:p-12 flex items-center justify-center order-1 lg:order-1">
                <div class="w-full h-full max-w-md">
                  <component :is="EducationIcon" class="w-full h-full text-white opacity-90" />
                </div>
              </div>
              <div class="p-8 md:p-12 order-2 lg:order-2">
                <div class="inline-block mb-4">
                  <span class="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full text-sm font-semibold">Education Solution</span>
                </div>
                <h3 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Scheme of Work Management System</h3>
                <p class="text-lg text-gray-600 leading-relaxed mb-6">
                  An educational planning platform that helps educators create, manage, and track curriculum schemes 
                  of work. This system simplifies lesson planning and ensures curriculum coverage and compliance.
                </p>
                <div class="mb-6">
                  <h4 class="text-xl font-bold text-gray-900 mb-3">Key Features:</h4>
                  <ul class="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <li class="flex items-start gap-3">
                      <div class="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="3">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span class="text-gray-700">Curriculum planning tools</span>
                    </li>
                    <li class="flex items-start gap-3">
                      <div class="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="3">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span class="text-gray-700">Lesson plan templates</span>
                    </li>
                    <li class="flex items-start gap-3">
                      <div class="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="3">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span class="text-gray-700">Progress tracking</span>
                    </li>
                    <li class="flex items-start gap-3">
                      <div class="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="3">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span class="text-gray-700">Resource management</span>
                    </li>
                    <li class="flex items-start gap-3">
                      <div class="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="3">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span class="text-gray-700">Assessment planning</span>
                    </li>
                    <li class="flex items-start gap-3">
                      <div class="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="3">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span class="text-gray-700">Compliance reporting</span>
                    </li>
                  </ul>
                </div>
                <div class="pt-4 border-t border-gray-200">
                  <h4 class="text-lg font-semibold text-gray-900 mb-2">Business Impact:</h4>
                  <p class="text-gray-600 leading-relaxed">
                    Saves educators 60% of planning time, ensures curriculum coverage, and provides structured 
                    approach to educational delivery.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Sacco Application -->
          <div class="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div class="p-8 md:p-12 order-2 lg:order-1">
                <div class="inline-block mb-4">
                  <span class="px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full text-sm font-semibold">Finance Solution</span>
                </div>
                <h3 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Sacco Management System</h3>
                <p class="text-lg text-gray-600 leading-relaxed mb-6">
                  A comprehensive Savings and Credit Cooperative Organization (SACCO) management platform that 
                  streamlines member management, savings tracking, loan processing, and financial reporting. 
                  Designed to handle the complex operations of cooperative societies efficiently.
                </p>
                <div class="mb-6">
                  <h4 class="text-xl font-bold text-gray-900 mb-3">Key Features:</h4>
                  <ul class="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <li class="flex items-start gap-3">
                      <div class="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="3">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span class="text-gray-700">Member registration & management</span>
                    </li>
                    <li class="flex items-start gap-3">
                      <div class="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="3">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span class="text-gray-700">Savings account management</span>
                    </li>
                    <li class="flex items-start gap-3">
                      <div class="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="3">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span class="text-gray-700">Loan application & processing</span>
                    </li>
                    <li class="flex items-start gap-3">
                      <div class="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="3">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span class="text-gray-700">Interest calculation & tracking</span>
                    </li>
                    <li class="flex items-start gap-3">
                      <div class="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="3">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span class="text-gray-700">Financial reporting & analytics</span>
                    </li>
                    <li class="flex items-start gap-3">
                      <div class="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="3">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span class="text-gray-700">Dividend & share management</span>
                    </li>
                  </ul>
                </div>
                <div class="pt-4 border-t border-gray-200">
                  <h4 class="text-lg font-semibold text-gray-900 mb-2">Business Impact:</h4>
                  <p class="text-gray-600 leading-relaxed">
                    Automates 80% of manual processes, reduces errors, improves member satisfaction, and provides 
                    real-time financial insights for better governance.
                  </p>
                </div>
              </div>
              <div class="bg-gradient-to-br from-green-500 to-green-600 p-8 md:p-12 flex items-center justify-center order-1 lg:order-2">
                <div class="w-full h-full max-w-md">
                  <component :is="FinanceIcon" class="w-full h-full text-white opacity-90" />
                </div>
              </div>
            </div>
          </div>

          <!-- Church Management System -->
          <div class="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div class="bg-gradient-to-br from-purple-500 to-purple-600 p-8 md:p-12 flex items-center justify-center order-1 lg:order-1">
                <div class="w-full h-full max-w-md">
                  <component :is="ChurchIcon" class="w-full h-full text-white opacity-90" />
                </div>
              </div>
              <div class="p-8 md:p-12 order-2 lg:order-2">
                <div class="inline-block mb-4">
                  <span class="px-4 py-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-full text-sm font-semibold">Non-Profit Solution</span>
                </div>
                <h3 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Church Management System</h3>
                <p class="text-lg text-gray-600 leading-relaxed mb-6">
                  A comprehensive church administration platform designed to manage members, events, donations, 
                  attendance, and church activities. This solution helps churches maintain organized records and 
                  enhance member engagement.
                </p>
                <div class="mb-6">
                  <h4 class="text-xl font-bold text-gray-900 mb-3">Key Features:</h4>
                  <ul class="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <li class="flex items-start gap-3">
                      <div class="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#a855f7" stroke-width="3">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span class="text-gray-700">Member database management</span>
                    </li>
                    <li class="flex items-start gap-3">
                      <div class="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#a855f7" stroke-width="3">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span class="text-gray-700">Event & service management</span>
                    </li>
                    <li class="flex items-start gap-3">
                      <div class="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#a855f7" stroke-width="3">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span class="text-gray-700">Donation & tithe tracking</span>
                    </li>
                    <li class="flex items-start gap-3">
                      <div class="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#a855f7" stroke-width="3">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span class="text-gray-700">Attendance tracking</span>
                    </li>
                    <li class="flex items-start gap-3">
                      <div class="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#a855f7" stroke-width="3">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span class="text-gray-700">Ministry & group management</span>
                    </li>
                    <li class="flex items-start gap-3">
                      <div class="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#a855f7" stroke-width="3">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span class="text-gray-700">Financial reporting</span>
                    </li>
                  </ul>
                </div>
                <div class="pt-4 border-t border-gray-200">
                  <h4 class="text-lg font-semibold text-gray-900 mb-2">Business Impact:</h4>
                  <p class="text-gray-600 leading-relaxed">
                    Streamlines church administration, improves member engagement, ensures accurate financial 
                    records, and enables data-driven decision making for church growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 px-8">
      <div class="max-w-4xl mx-auto bg-pink-50 border border-pink-200 rounded-3xl p-12 text-center">
        <h2 class="text-3xl font-bold text-gray-900 mb-3">Need a custom solution?</h2>
        <p class="text-gray-500 mb-8">
          Let's discuss how we can build a tailored solution for your business needs.
        </p>
        <router-link to="/contact" class="btn-primary">Contact Us</router-link>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, h } from 'vue'

const POSIcon = defineComponent({
  render: () => h('svg', { width: '200', height: '200', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '1.5' }, [
    h('rect', { x: '2', y: '4', width: '20', height: '16', rx: '2', ry: '2' }),
    h('path', { d: 'M6 8h4M6 12h4M6 16h2' }),
    h('line', { x1: '14', y1: '8', x2: '18', y2: '8' }),
    h('line', { x1: '14', y1: '12', x2: '18', y2: '12' }),
    h('line', { x1: '14', y1: '16', x2: '18', y2: '16' }),
    h('circle', { cx: '10', cy: '20', r: '2' }),
    h('circle', { cx: '18', cy: '20', r: '2' })
  ])
})

const EducationIcon = defineComponent({
  render: () => h('svg', { width: '200', height: '200', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '1.5' }, [
    h('path', { d: 'M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z' }),
    h('path', { d: 'M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z' }),
    h('line', { x1: '6', y1: '8', x2: '18', y2: '8' }),
    h('line', { x1: '6', y1: '12', x2: '18', y2: '12' }),
    h('line', { x1: '6', y1: '16', x2: '14', y2: '16' })
  ])
})

const FinanceIcon = defineComponent({
  render: () => h('svg', { width: '200', height: '200', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '1.5' }, [
    h('line', { x1: '12', y1: '1', x2: '12', y2: '23' }),
    h('path', { d: 'M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6' }),
    h('circle', { cx: '6', cy: '12', r: '2' }),
    h('circle', { cx: '18', cy: '12', r: '2' })
  ])
})

const ChurchIcon = defineComponent({
  render: () => h('svg', { width: '200', height: '200', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '1.5' }, [
    h('path', { d: 'M3 21l9-9 9 9' }),
    h('path', { d: 'M12 21V12' }),
    h('line', { x1: '3', y1: '21', x2: '21', y2: '21' }),
    h('path', { d: 'M12 2v10' }),
    h('circle', { cx: '12', cy: '7', r: '2' })
  ])
})
</script>

<style scoped>
/* All styles are now using Tailwind CSS classes */
</style>
