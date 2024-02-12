<script lang="ts">
    export let placeholder: string = "Search";
    export let value = '';
</script>

<input type="search" {placeholder} class="px-4 py-2 border-2 border-gray-200 focus:border-gray-400 outline-none focus:outline-none rounded-full transition-all" on:input bind:value />