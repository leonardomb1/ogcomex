<script>
    import { createEventDispatcher } from 'svelte';
    let { videoPath, autoplay, loop, muted } = $props();

    const dispatch = createEventDispatcher();
    
    let videoElement;

    function handleEnded() {
        dispatch('ended');
    }
    
    $effect(() => {
        if (videoElement && videoPath) {
            videoElement.load();
            if (autoplay) videoElement.play();
        }
    });
</script>

<video
    bind:this={videoElement}
    class="absolute inset-0 w-full h-full object-cover"
    {autoplay}
    {loop}
    {muted}
    onended={handleEnded}
    playsinline
>
    <source src={videoPath} type="video/mp4" />
</video>