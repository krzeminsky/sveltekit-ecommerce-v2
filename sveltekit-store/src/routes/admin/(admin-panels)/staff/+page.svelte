<script lang="ts">
    import AdminPanelLayout from "$lib/components/layouts/admin-panel-layout.svelte";
    import SearchBar from "$lib/components/filtering-tools/search-bar.svelte";
	import SortBy from "$lib/components/filtering-tools/sort-by.svelte";
	import type { StaffMember } from "$lib/types";
	import Placeholder from "$lib/components/placeholders/placeholder.svelte";

    let staffMembers: StaffMember[] = [];
</script>

<AdminPanelLayout>
    <svelte:fragment slot="toolbar">
        <SearchBar placeholder="Search by name" />
        <SortBy options={["Level", "Name"]} />
    </svelte:fragment>

    <svelte:fragment slot="action">
        <a href="/admin/staff/-1" class="text-button">
            Add staff
        </a>
    </svelte:fragment>

    <svelte:fragment slot="content">
        {#if staffMembers.length == 0}
        <Placeholder>Future staff members will be displayed here</Placeholder>
        {:else}
            {#each staffMembers as member}
            {/each}
        {/if}
    </svelte:fragment>
</AdminPanelLayout>