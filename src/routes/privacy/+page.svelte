<script>
  import { privacyPolicy } from "$lib/privacyPolicy.js"
</script>

<main class="container mx-auto pt-28 mb-12 px-4 sm:px-6 md:px-8">
  <section class="mb-12">
    <h1
      class="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-white"
    >
      {privacyPolicy.title}
    </h1>
    <p class="text-base sm:text-lg mb-8 text-gray-700 dark:text-gray-300">
      {@html privacyPolicy.description}
    </p>

    {#each privacyPolicy.sections as section}
      <div class="mb-6">
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
          {section.title}
        </h2>
        <p class="text-base sm:text-lg text-gray-700 dark:text-gray-300">
          {section.content}
        </p>
      </div>
    {/each}

    <p class="text-base sm:text-lg text-gray-700 dark:text-gray-300">
      {@html privacyPolicy.contact}
    </p>
  </section>
</main>
