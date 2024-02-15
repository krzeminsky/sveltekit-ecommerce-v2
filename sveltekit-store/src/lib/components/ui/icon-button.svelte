<script lang="ts">
    export let src: string;
    export let alt: string;
</script>

<button class="p-2 bg-indigo-500 rounded-full shadow-md hover:shadow-lg active:shadow-lg transition-all flex-shrink-0" on:click>
    <img {src} {alt} />
</button>