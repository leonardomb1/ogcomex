<script>
  import { content } from "$lib/ui/contact";
  import { socials } from "$lib/socials";

  let formData = {
    name: '',
    email: '',
    company: '',
    message: ''
  };
  
  let formStatus = {
    submitted: false,
    success: false,
    message: ''
  };
  
  function handleSubmit() {
    formStatus.submitted = true;

    setTimeout(() => {
      formStatus.success = true;
      formStatus.message = 'Obrigado pela sua mensagem! Entraremos em contato em breve.';
      formData = {
        name: '',
        email: '',
        company: '',
        message: ''
      };
    }, 1500);
  }
</script>

<section id="contact" class="py-20">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="section-title">
      <h2 class="text-gray-900 dark:text-white">{content.title}</h2>
      <p class="mt-4 text-xl">{content.subtitle}</p>
    </div>
    
    <div class="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div class="bg-white dark:bg-gray-900 rounded-lg shadow-md p-8">
        <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">{content.form.title}</h3>
        
        <form on:submit|preventDefault={handleSubmit} class="space-y-6">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{content.form.name}</label>
            <input 
              type="text" 
              id="name" 
              bind:value={formData.name} 
              required 
              class="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            />
          </div>
          
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{content.form.email}</label>
            <input 
              type="email" 
              id="email" 
              bind:value={formData.email} 
              required 
              class="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            />
          </div>
          
          <div>
            <label for="company" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{content.form.company}</label>
            <input 
              type="text" 
              id="company" 
              bind:value={formData.company} 
              class="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            />
          </div>
          
          <div>
            <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{content.form.message}</label>
            <textarea 
              id="message" 
              bind:value={formData.message} 
              rows="4" 
              required 
              class="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            class="w-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-3 rounded-md font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
            disabled={formStatus.submitted && !formStatus.success}
          >
            {formStatus.submitted && !formStatus.success ? content.form.sending : content.form.button}
          </button>
          
          {#if formStatus.success}
            <div class="mt-4 p-4 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 rounded-md">
              {formStatus.message}
            </div>
          {/if}
        </form>
      </div>
      
      <div class="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md p-8">
        <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">{content.info.title}</h3>
        
        <div class="space-y-6">
          <div class="flex items-start">
            <svg class="h-6 w-6 text-gray-700 dark:text-gray-300 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <div>
              <h4 class="text-lg font-semibold text-gray-900 dark:text-white">{content.info.address.title}</h4>
              <p class="text-gray-600 dark:text-gray-400 mt-1 whitespace-pre-line">
                {content.info.address.value}
              </p>
            </div>
          </div>
          
          <div class="flex items-start">
            <svg class="h-6 w-6 text-gray-700 dark:text-gray-300 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <div>
              <h4 class="text-lg font-semibold text-gray-900 dark:text-white">{content.info.phone.title}</h4>
              <p class="text-gray-600 dark:text-gray-400 mt-1">{content.info.phone.value}</p>
            </div>
          </div>
          
          <div class="flex items-start">
            <svg class="h-6 w-6 text-gray-700 dark:text-gray-300 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <div>
              <h4 class="text-lg font-semibold text-gray-900 dark:text-white">{content.info.email.title}</h4>
              <p class="text-gray-600 dark:text-gray-400 mt-1">{content.info.email.value}</p>
            </div>
          </div>
          
          <div class="flex items-start">
            <svg class="h-6 w-6 text-gray-700 dark:text-gray-300 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <h4 class="text-lg font-semibold text-gray-900 dark:text-white">{content.info.hours.title}</h4>
              <p class="text-gray-600 dark:text-gray-400 mt-1 whitespace-pre-line">
                {content.info.hours.value}
              </p>
            </div>
          </div>
        </div>
        
        <div class="mt-8">
          <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">{content.info.social}</h4>
          <div class="flex space-x-4">
            {#each socials as social}
              <a href={social.url} class="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                <span class="sr-only">{social.name}</span>
                <svelte:component this={social.svg}/>
              </a>
            {/each}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>