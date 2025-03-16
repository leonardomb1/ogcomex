<script>
  import { content } from "$lib/ui/process";
</script>

<section id="how-we-work" class="py-20 bg-gray-50 dark:bg-gray-800">
<div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="section-title">
    <h2 class="text-gray-900 dark:text-white">{content.title}</h2>
    <p class="mt-4 text-xl">{content.subtitle}</p>
    </div>
    
    <div class="mt-16 relative">
    <div class="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 dark:bg-gray-700"></div>
    
    <div class="space-y-12">
        {#each content.steps as step, i}
        <div class="relative">
            <div class="md:flex items-center">
            <div class={`md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 text-right' : 'md:pl-12 md:order-last'}`}>
                <div class="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">{step.title}</h3>
                <p class="text-gray-600 dark:text-gray-400">{step.description}</p>
                </div>
            </div>
            
            <div class="hidden md:flex items-center justify-center">
                <div class="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold">
                {step.number}
                </div>
            </div>
            
            <div class="md:w-1/2 md:invisible"></div>
            </div>
            
            <div class="md:hidden flex items-center mt-4 mb-8">
            <div class="flex items-center justify-center w-12 h-12 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold mr-4">
                {step.number}
            </div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">{step.title}</h3>
            </div>
        </div>
        {/each}
    </div>
    </div>
</div>
</section>
  
  