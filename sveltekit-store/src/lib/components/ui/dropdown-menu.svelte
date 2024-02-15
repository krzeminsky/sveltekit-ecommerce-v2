<script lang="ts" context="module">
	let activeDropdown = writable(-1);
	let dropdownCount = 0;
</script>

<script lang="ts">
	import Check from "$lib/assets/icons/check.svg";
	import { focusTrap } from "$lib/utils/focus-trap";
	import { writable } from "svelte/store";

	export let label: string;
	export let width: string|undefined = undefined;
	export let options: string[];
	export let multiple = false;
	export let selected: number | number[] = multiple ? [] : 0;

	$: selectedText = typeof selected == "number"
		? options[selected]
		: selected.length == 0
			? 'Any'
			: selected.length == 1
				? options[selected[0]]
				: "...";

	let dropdownId = dropdownCount++;

	$: show = $activeDropdown == dropdownId;

	function onOptionClick(index: number, isSelected: boolean) {
		if (multiple) {
			const arr = selected as number[];
			
			if (isSelected) arr.splice(arr.indexOf(index), 1);
			else arr.push(index);
		} else {
			selected = index;
			activeDropdown.set(-1);
		}

		selected = selected;
	}
</script>

<svelte:window
	on:keydown={(e) => {
		if (e.key == "Escape") activeDropdown.set(-1);
	}}
	on:click={() => activeDropdown.set(-1)}
/>

<div
	class="relative z-10"
	role="combobox"
	aria-controls="options"
	aria-haspopup="listbox"
	aria-expanded={show}
	aria-label={label}
>
	<button
		class="bg-white rounded-full shadow-md hover:shadow-lg active:shadow-lg text-left transition-all"
		aria-haspopup="listbox"
		aria-expanded={show}
		on:click|stopPropagation={() => activeDropdown.set($activeDropdown == dropdownId? -1 : dropdownId) }
	>
		<h1
			class="inline-block bg-indigo-500 rounded-full px-4 py-2.5 text-white align-middle"
		>
			{label}
		</h1>
		<span
			class="inline-block pl-4 pr-8 w-24 text-nowrap whitespace-nowrap overflow-ellipsis overflow-hidden align-middle text-center"
			style="width: {width}"
			aria-live="polite">{selectedText}</span
		>
	</button>

	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div
		id="options"
		class="
        absolute top-full left-0 origin-[50%_0px] min-w-full bg-white divide-y-2 divide-gray-100 shadow-md grid rounded-lg mt-2 transition-all max-h-[334px] overflow-y-auto {show
			? 'opacity-100 scale-100 visible'
			: 'opacity-0 scale-0 invisible'}
    "
		role="listbox"
		tabindex="0"
		aria-label={label}
		use:focusTrap
		on:click|stopPropagation
	>
		{#each options as o, i (o)}
			{@const isSelected =
				typeof selected === "number"
					? selected == i
					: selected.includes(i)}
			<button
				class="relative w-full text-left p-2 bg-white hover:bg-gray-100 focus-visible:bg-gray-100 outline-none focus:outline-none transition-all first:rounded-t-lg last:rounded-b-lg"
				role="option"
				aria-selected={isSelected}
				on:click|stopPropagation={() => onOptionClick(i, isSelected)}
			>
				<span class="pr-10">{o}</span>

				<img
					src={Check}
					alt="Selected"
					class="absolute right-2 top-1/2 -translate-y-1/2 transition-all {isSelected
						? 'opacity-100 scale-100'
						: 'opacity-0 scale-0'}"
				/>
			</button>
		{/each}
	</div>
</div>
