<script>
    import { onMount } from 'svelte';
    import { content } from '$lib/ui/hero';    
    
    let isVisible = false;
    
    onMount(() => {
      setTimeout(() => {
        isVisible = true;
      }, 100);
    });
  </script>
  
<section id="hero" class="relative min-h-screen flex items-center pt-20">
    <div class="absolute inset-0 bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-gray-800 z-0"></div>
    
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div class="space-y-8 {isVisible ? 'animate-fade-in' : 'opacity-0'}">
          <h1 class="font-bold text-gray-900 dark:text-white leading-tight">
            {content.title}
          </h1>
          
          <p class="text-xl text-gray-600 dark:text-gray-400 max-w-lg">
            {content.description}
          </p>
          
          <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="#contact" class="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-3 rounded-md font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors text-center">
              {content.cta1}
            </a>
            <a href="#how-we-work" class="bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white px-6 py-3 rounded-md font-medium hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors text-center">
              {content.cta2}
            </a>
          </div>
        </div>
        
        <div class="flex justify-center lg:justify-end {isVisible ? 'animate-fade-in-delayed' : 'opacity-0'}">
          <div class="relative">
            <div class="absolute -inset-1 bg-gradient-to-r from-gray-600 to-gray-900 rounded-full blur opacity-30 dark:opacity-50"></div>
            <div class="relative bg-white dark:bg-gray-800 rounded-full p-6 shadow-xl">
              <img src="./images/logo.png" alt="OGComex Logo" class="w-64 h-64 object-contain" />
            </div>
          </div>
        </div>
      </div>
    </div>
</section>

<style>
.animate-fade-in {
    animation: fadeIn 1s ease-out forwards;
}

.animate-fade-in-delayed {
    animation: fadeIn 1s ease-out 0.3s forwards;
}

@keyframes fadeIn {
    from {
    opacity: 0;
    transform: translateY(20px);
    }
    to {
    opacity: 1;
    transform: translateY(0);
    }
}
</style>
  
  