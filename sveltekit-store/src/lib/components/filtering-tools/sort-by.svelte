<script lang="ts">
	import DropdownMenu from "../ui/dropdown-menu.svelte";
	import IconRadioGroup from "../ui/icon-radio-group.svelte";
    import ArrowDown from "$lib/assets/icons/arrows/arrow-down.svg";
    import ArrowUp from "$lib/assets/icons/arrows/arrow-up.svg";

    export let options: string[];
    export let width: string|undefined = undefined;

    export let selectedOption: string|undefined = undefined;
    export let selectedOrder: number|undefined = undefined;
</script>

<div class="flex items-center gap-2">
    <DropdownMenu {options} label="Sort by" {width} bind:selected={selectedOption} />

    <IconRadioGroup name="Sort order" options={[
        { src: ArrowDown, alt: "Sort descending" },
        { src: ArrowUp, alt: "Sort ascending" }
    ]} bind:selected={selectedOrder} />
</div>