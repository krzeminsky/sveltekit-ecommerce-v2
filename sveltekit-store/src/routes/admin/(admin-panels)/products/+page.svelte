<script lang="ts">
	import SearchBar from "$lib/components/filtering-tools/search-bar.svelte";
	import SortBy from "$lib/components/filtering-tools/sort-by.svelte";
    import AdminPanelLayout from "$lib/components/layouts/admin-panel-layout.svelte";
	import Placeholder from "$lib/components/placeholders/placeholder.svelte";
	import DropdownMenu from "$lib/components/ui/dropdown-menu.svelte";
	import type { ProductRecord } from "$lib/types";
	import type { PageData } from "./$types";

    export let data: PageData;

    let records: ProductRecord[] = [];
</script>

<AdminPanelLayout>
    <svelte:fragment slot="toolbar">
        <SearchBar placeholder="Search by name" />
        <SortBy options={["Id", "Name", "Price"]} />
        <DropdownMenu label="Categories" options={data.categories} multiple />
    </svelte:fragment>

    <svelte:fragment slot="action">
        <a href="/admin/products/-1" class="text-button">New product</a>
    </svelte:fragment>

    <svelte:fragment slot="content">
        {#if records.length == 0}
        <Placeholder>Future products will be displayed here</Placeholder>
        {:else}
            {#each records as r}
            {/each}
        {/if}
    </svelte:fragment>
</AdminPanelLayout>