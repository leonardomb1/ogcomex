<script>
    import { onMount } from 'svelte';
    import { testimonials } from '$lib/ui/testimonials';
    
    let currentIndex = $state(0);
    let intervalId;
    
    function nextTestimonial() {
      currentIndex = (currentIndex + 1) % testimonials.length;
    }
    
    function prevTestimonial() {
      currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    }
    
    function startAutoplay() {
      intervalId = setInterval(() => {
        nextTestimonial();
      }, 5000);
    }
    
    function stopAutoplay() {
      if (intervalId) {
        clearInterval(intervalId);
      }
    }
    
    onMount(() => {
      startAutoplay();
      return () => stopAutoplay();
    });
</script>
  
<section id="testimonials" class="py-20 bg-gray-50 dark:bg-gray-800">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="section-title">
        <h2 class="text-gray-900 dark:text-white">Testemunhos de nossos Clientes</h2>
        <p class="mt-4 text-xl">O que nossos clientes falam sobre nós:</p>
      </div>
      
      <div class="mt-16 max-w-4xl mx-auto relative"
      onmouseenter={stopAutoplay}
      onmouseleave={startAutoplay}
      role="region"
      aria-label="Testimonials carousel"
      >
      <div class="overflow-hidden">
          <div class="flex transition-transform duration-500 ease-in-out" style="transform: translateX(-{currentIndex * 100}%)">
          {#each testimonials as testimonial}
              <div class="w-full flex-shrink-0 px-4">
              <div class="bg-white dark:bg-gray-900 rounded-lg shadow-md p-8">
                  <svg class="h-10 w-10 text-gray-400 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p class="text-gray-600 dark:text-gray-400 text-lg mb-6">{testimonial.content}</p>
                  <div>
                  <p class="font-semibold text-gray-900 dark:text-white">{testimonial.author}</p>
                  <p class="text-gray-500 dark:text-gray-500">{testimonial.position}</p>
                  </div>
              </div>
              </div>
          {/each}
          </div>
      </div>
      
      <button 
          class="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-4 bg-white dark:bg-gray-900 rounded-full p-2 shadow-md text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none"
          onclick={prevTestimonial}
          aria-label="Previous testimonial"
      >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
      </button>
      
      <button 
          class="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-4 bg-white dark:bg-gray-900 rounded-full p-2 shadow-md text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none"
          onclick={nextTestimonial}
          aria-label="Next testimonial"
      >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
      </button>
      
      <div class="flex justify-center mt-8 space-x-2">
          {#each testimonials as _, i}
          <button 
              class={`w-3 h-3 rounded-full ${i === currentIndex ? 'bg-gray-900 dark:bg-white' : 'bg-gray-300 dark:bg-gray-600'}`}
              onclick={() => currentIndex = i}
              aria-label={`Go to testimonial ${i + 1}`}
          ></button>
          {/each}
      </div>
      </div>
  </div>
</section>
  
  