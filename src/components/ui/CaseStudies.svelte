<script>
  import { caseStudies } from '$lib/ui/caseStudies'
</script>

<section id="case-studies" class="py-20">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="section-title">
      <h2 class="text-gray-900 dark:text-white">Estudos de caso</h2>
      <p class="mt-4 text-xl">Histórias de sucesso reais de nossos clientes</p>
    </div>

    <div class="mt-16 space-y-16">
      {#each caseStudies as caseStudy, i}
        <div
          class={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
        >
          <div class="lg:w-1/2">
            <div
              class="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden"
            >
              <img
                src={caseStudy.image || '/placeholder.svg'}
                alt={caseStudy.title}
                class="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div class="lg:w-1/2 space-y-6">
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white">
              {caseStudy.title}
            </h3>
            <p class="text-gray-600 dark:text-gray-400">
              {caseStudy.description}
            </p>

            <div>
              <h4
                class="text-lg font-semibold text-gray-900 dark:text-white mb-3"
              >
                Resultados Chave:
              </h4>
              <ul class="space-y-2">
                {#each caseStudy.results as result}
                  <li class="flex items-start">
                    <svg
                      class="h-6 w-6 text-gray-700 dark:text-gray-300 mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span class="text-gray-600 dark:text-gray-400"
                      >{result}</span
                    >
                  </li>
                {/each}
              </ul>
            </div>

            <a
              href="#contact"
              class="inline-block bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-3 rounded-md font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
            >
              Discuta seu Projeto
            </a>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
