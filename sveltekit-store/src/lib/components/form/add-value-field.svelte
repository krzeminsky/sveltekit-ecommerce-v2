<script lang="ts">
	import IconButton from "../ui/icon-button.svelte";
    import Add from "$lib/assets/icons/add.svg";
	import { createEventDispatcher } from "svelte";

    export let placeholder = "Add value";

    const dispatch = createEventDispatcher();
    let value = '';

    function add() {
        if (!value) return;

        dispatch('add', value);
        value = '';
    }
</script>

<div class="w-full flex items-center gap-2">
    <input type="text" {placeholder} class="text-input flex-1 basis-0" aria-label={placeholder} bind:value on:keydown={e => { if (e.key == "Enter") add() }} />
    <IconButton src={Add} alt={placeholder} on:click={add} />
</div>