<script lang="ts">
    export let placeholder: string = "Search";
    export let value = '';
</script>

<input type="search" {placeholder} class="text-input" on:input bind:value />