<script>
  import { routes } from '$lib/routes'
  import { socials } from '$lib/socials'

  const currentYear = new Date().getFullYear()
</script>

<footer class="bg-gray-100 dark:bg-gray-900 pt-16 pb-8">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
      <div class="lg:col-span-2">
        <a href="#banner" class="inline-block mb-6">
          <img src="./images/logo.png" alt="OGComex Logo" class="h-12 w-auto" />
        </a>
        <p class="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
          A OGComex oferece serviços de consultoria especializada para negócios
          internacionais e comércio exterior no Brasil, ajudando empresas a
          navegar por regulamentações complexas e otimizar suas operações.
        </p>
        <div class="flex space-x-4">
          {#each socials as social}
            <a
              href={social.url}
              class="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <span class="sr-only">{social.name}</span>
              <svelte:component this={social.svg} />
            </a>
          {/each}
        </div>
      </div>

      <div>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Serviços
        </h3>
        <ul class="space-y-3">
          {#each routes.services as link}
            <li>
              <a
                href={link.href}
                class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                {link.name}
              </a>
            </li>
          {/each}
        </ul>
      </div>

      <div>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Empresa
        </h3>
        <ul class="space-y-3">
          {#each routes.company as link}
            <li>
              <a
                href={link.href}
                class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                {link.name}
              </a>
            </li>
          {/each}
        </ul>
      </div>

      <div>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Recursos
        </h3>
        <ul class="space-y-3">
          {#each routes.resources as link}
            <li>
              <a
                href={link.href}
                class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                {link.name}
              </a>
            </li>
          {/each}
        </ul>
      </div>
    </div>

    <div class="border-t border-gray-200 dark:border-gray-800 pt-8">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <p class="text-gray-600 dark:text-gray-400 text-sm">
          &copy; {currentYear} OGComex. Todos os direitos reservados.
        </p>
        <div class="mt-4 md:mt-0">
          <a
            href="#banner"
            class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm mx-3"
          >
            Política de Privacidade
          </a>
        </div>
      </div>
    </div>
  </div>
</footer>
