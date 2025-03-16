<script>
    import { onMount } from 'svelte';
    import Video from "../resources/Video.svelte";
    
    const videos = [
        "./videos/video1.mp4",
        "./videos/video2.mp4",
        "./videos/video3.mp4"
    ];

    let currentVideoIndex = $state(0);
    
    let fadeOut = $state(false);
    let fadeIn = $state(true);

    function handleVideoEnd() {
        console.log("Video ended, transitioning to next video");
        fadeOut = true;

        setTimeout(() => {
            currentVideoIndex = (currentVideoIndex + 1) % videos.length;
            console.log("Switching to video:", videos[currentVideoIndex]);
            fadeOut = false;
            fadeIn = true;

            setTimeout(() => {
                fadeIn = false;
            }, 1000);
        }, 1000);
    }

    onMount(() => {
        setTimeout(() => {
            fadeIn = false;
        }, 1000);
    });
</script>

<div class="relative h-screen overflow-hidden">
    <div class="absolute inset-0 transition-opacity duration-1000" class:opacity-0={fadeOut} class:opacity-100={!fadeOut && !fadeIn}>
        <div class="relative w-full h-full">
            <Video 
            videoPath={videos[currentVideoIndex]} 
            autoplay={true} 
            loop={false} 
            muted={true} 
            on:ended={handleVideoEnd}
            />
        </div>
        
        <div class="absolute inset-0 bg-black opacity-30"></div>
    </div>

    <div class="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">        
        <h1 class="text-white text-4xl sm:text-6xl md:text-8xl font-bold text-center mb-4 tracking-tight">
            OG COMEX
        </h1>
        
        <p class="text-white text-lg sm:text-xl md:text-2xl text-center max-w-3xl font-light tracking-wide">
            Expandindo horizontes, maximizando oportunidades
        </p>
        
        <div class="absolute bottom-10 animate-bounce">
            <a href="#features" aria-label="Scroll to features" class="text-white">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </a>
        </div>
    </div>
</div>

<style>
    div.h-screen {
        height: 100vh;
        width: 100vw;
        max-width: 100%;
    }
</style>
```