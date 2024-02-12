<script lang="ts">
	import Check from "$lib/assets/icons/check.svg";
	import { focusTrap } from "$lib/utils/focus-trap";

	export let label: string;
	export let options: string[];
	export let multiple = false;
	export let selected: string | string[] = multiple ? [] : options[0];

	$: selectedText = !multiple
		? selected
		: selected.length == 0
			? "None"
			: selected.length == 1
				? selected[0]
				: "...";

	let active = false;
	let hidden = true;

    $: {
        if (!active) {
            setTimeout(() => {
                if (active) return;
                hidden = true;
            }, 200);
        } else hidden = false;
    }

    $: console.log(hidden);

	function onOptionClick(index: number, isSelected: boolean) {
		if (multiple) {
			const arr = selected as string[];

			if (isSelected) arr.splice(arr.indexOf(options[index]), 1);
			else arr.push(options[index]);
		} else {
			selected = options[index];
			active = false;
		}

		selected = selected;
	}
</script>

<svelte:window
	on:keydown={(e) => {
		if (e.key == "Escape") active = false;
	}}
	on:click={() => (active = false)}
/>

<div
	class="relative"
	role="combobox"
	aria-controls="options"
	aria-haspopup="listbox"
	aria-expanded={active}
	aria-label={label}
>
	<button
		class="bg-white rounded-full shadow-md text-left"
		aria-haspopup="listbox"
		aria-expanded={active}
		on:click|stopPropagation={() => (active = !active)}
	>
		<h1
			class="inline-block bg-indigo-500 rounded-full px-4 py-2.5 text-white align-middle"
		>
			{label}
		</h1>
		<span
			class="inline-block pl-4 pr-8 w-24 text-nowrap whitespace-nowrap overflow-ellipsis overflow-hidden align-middle text-center"
			aria-live="polite">{selectedText}</span
		>
	</button>

	<div
		id="options"
		class="
        absolute top-full left-0 origin-[50%_0px] min-w-full bg-white divide-y-2 divide-gray-100 shadow-md grid rounded-lg mt-2 transition-all {hidden
			? 'invisible'
			: 'visible'} {active ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}
    "
		role="listbox"
		aria-label={label}
		use:focusTrap
	>
		{#each options as o, i (o)}
			{@const isSelected =
				typeof selected === "string"
					? selected == o
					: selected.includes(o)}
			<button
				class="relative w-full text-left p-2 bg-white hover:bg-gray-100 focus:bg-gray-100 outline-none focus:outline-none transition-all first:rounded-t-lg last:rounded-b-lg"
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
