<script>
  import { content } from '$lib/ui/about'
</script>

<section id="about" class="py-20 bg-gray-50 dark:bg-gray-800">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="section-title">
      <h2 class="text-gray-900 dark:text-white">{content.title}</h2>
      <p class="mt-4 text-xl">{content.subtitle}</p>
    </div>

    <div class="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div class="space-y-8">
        <div class="bg-white dark:bg-gray-900 rounded-lg shadow-md p-8">
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {content.vision.title}
          </h3>
          <p class="text-gray-600 dark:text-gray-400">
            {content.vision.description}
          </p>
        </div>

        <div class="bg-white dark:bg-gray-900 rounded-lg shadow-md p-8">
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {content.mission.title}
          </h3>
          <p class="text-gray-600 dark:text-gray-400">
            {content.mission.description}
          </p>
        </div>
      </div>

      <div class="bg-white dark:bg-gray-900 rounded-lg shadow-md p-8">
        <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          {content.values.title}
        </h3>

        <div class="space-y-6">
          {#each content.values.items as value}
            <div
              class="border-b border-gray-200 dark:border-gray-700 pb-4 last:border-0 last:pb-0"
            >
              <h4
                class="text-xl font-semibold text-gray-900 dark:text-white mb-2"
              >
                {value.name}
              </h4>
              <p class="text-gray-600 dark:text-gray-400">
                {value.description}
              </p>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>
