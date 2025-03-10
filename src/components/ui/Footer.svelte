<script>
    import { socials } from "$lib/socials";
</script>
  
<footer class="bg-white">
  <div class="px-4 py-16 sm:px-6 lg:px-8">
    <!-- Divider line and top padding -->
    <div class="border-t border-gray-100 pt-12">
      <div class="sm:flex sm:items-center sm:justify-between">
        <!-- Left side: Copyright info -->
        <p class="text-xs text-gray-500">
          &copy; 2025. OGComex Assessoria, Consultoria e Agenciamento em Comércio Exterior Ltda. All rights reserved.
        </p>
        <!-- Right side: Contact info -->
        <div class="text-right">
          <p class="text-xs uppercase tracking-wide text-gray-500">Contato</p>
          <p class="mt-1 text-2xl font-medium text-gray-900 hover:opacity-75 sm:text-3xl">
            +55 19 99999-9999
          </p>
          <ul class="mt-4 space-y-1 text-sm text-gray-700">
            <li>Segunda à Sexta: 17:00 - 22:00</li>
            <li>Final de Semana: 10:00 - 15:00</li>
          </ul>
          <ul class="mt-4 flex justify-end gap-6">
            {#each socials as { name, url, svg }}
              <li>
                <a
                  href={url}
                  rel="noreferrer"
                  target="_blank"
                  class="text-gray-700 transition hover:opacity-75"
                >
                  <span class="sr-only">{name}</span>
                  <svelte:component this={svg} />
                </a>
              </li>
            {/each}
          </ul>
        </div>
      </div>
    </div>
  </div>
</footer>
  