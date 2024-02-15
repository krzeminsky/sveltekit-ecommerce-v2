<script lang="ts">
	import SearchBar from "$lib/components/filtering-tools/search-bar.svelte";
	import SortBy from "$lib/components/filtering-tools/sort-by.svelte";
    import AdminPanelLayout from "$lib/components/layouts/admin-panel-layout.svelte";
	import Placeholder from "$lib/components/placeholders/placeholder.svelte";
	import DropdownMenu from "$lib/components/ui/dropdown-menu.svelte";
	import type { ProductUpdateRequest } from "$lib/types";

    let requests: ProductUpdateRequest[] = [];
</script>

<AdminPanelLayout>
    <svelte:fragment slot="toolbar">
        <SearchBar placeholder="Search by staff's name" />
        <SortBy width="124px" options={["Request id", "Product id"]} />
        <DropdownMenu width="124px" label="Status" options={["Resolved", "Pending", "Rejected"]} multiple />
    </svelte:fragment>

    <svelte:fragment slot="content">
        {#if requests.length == 0}
        <Placeholder>Future requests will be displayed here</Placeholder>
        {:else}
            {#each requests as req}
            {/each}
        {/if}
    </svelte:fragment>
</AdminPanelLayout>