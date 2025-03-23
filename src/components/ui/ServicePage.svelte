<script>
  let { content } = $props()
</script>

<main class="container mx-auto pt-28 mb-12 px-4 sm:px-6 md:px-8">
  <section class="mb-12">
    <h1
      class="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-white"
    >
      {content.title}
    </h1>
    <p
      class="text-base sm:text-lg mb-6 sm:mb-8 text-gray-700 dark:text-gray-300"
    >
      {content.description}
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
      {#each content.data as category}
        <div
          class="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700"
        >
          <div class="bg-gray-200 dark:bg-gray-700 px-4 sm:px-6 py-3 sm:py-4">
            <h2
              class="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white"
            >
              {category.title}
            </h2>
          </div>
          <ul class="px-4 sm:px-6 py-3 sm:py-4 space-y-2">
            {#each category.services as service}
              <li class="flex items-start">
                <span
                  class="text-gray-500 dark:text-gray-400 mr-2 flex-shrink-0"
                  >•</span
                >
                <span
                  class="text-gray-700 dark:text-gray-300 text-sm sm:text-base"
                  >{service}</span
                >
              </li>
            {/each}
          </ul>
        </div>
      {/each}
    </div>
  </section>
</main>
