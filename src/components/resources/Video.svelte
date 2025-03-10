<script>
    export let videoPath = '/videos/video.mp4';
</script>

<video autoplay loop muted>
    <source src={videoPath} type="video/mp4" />
</video>

<style>
    video {
        width: 100%;
        height: auto;
    }
</style>