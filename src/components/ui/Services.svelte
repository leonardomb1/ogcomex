<script>
  import { content } from '$lib/ui/services'
</script>

<section id="services" class="py-20">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="section-title">
      <h2 class="text-gray-900 dark:text-white">{content.title}</h2>
      <p class="mt-4 text-xl">{content.subtitle}</p>
    </div>

    <div class="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each content.services as service, i}
        <div
          class="cursor-pointer bg-white dark:bg-gray-900 rounded-lg shadow-md p-8 transition-transform duration-300 hover:transform hover:scale-105"
        >
          <div class="text-gray-700 dark:text-gray-300 mb-5">
            {@html service.icon}
          </div>
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            {service.title}
          </h3>
          <p class="text-gray-600 dark:text-gray-400">{service.description}</p>
        </div>
      {/each}
    </div>
  </div>
</section>
