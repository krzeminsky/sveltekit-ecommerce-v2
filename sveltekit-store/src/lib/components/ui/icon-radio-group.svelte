<script lang="ts">
    export let name: string;
    export let options: { src: string, alt: string }[];

    export let selected = 0;
</script>

<div class="flex items-center gap-2" role="radiogroup">
    {#each options as { src, alt }, i}
    <label class="cursor-pointer" aria-label={alt}>
        <input type="radio" {name} class="peer" hidden value={i} bind:group={selected} />
        <img {src} {alt} class="p-2 rounded-full bg-transparent peer-checked:bg-gray-100 transition-all"/>
    </label>
    {/each}
</div>