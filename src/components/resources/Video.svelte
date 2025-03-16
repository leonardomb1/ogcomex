<script>
    import { createEventDispatcher } from 'svelte';

    export let videoPath = './videos/video1.mp4';
    export let autoplay = true;
    export let loop = false;
    export let muted = true;

    const dispatch = createEventDispatcher();

    function handleEnded() {
        dispatch('ended');
    }
</script>

<video 
    class="absolute inset-0 w-full h-full object-cover" 
    {autoplay} 
    {loop} 
    {muted}
    on:ended={handleEnded}
    playsinline
>
    <source src={videoPath} type="video/mp4" />
</video>
