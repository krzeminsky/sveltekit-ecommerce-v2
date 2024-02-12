<script lang="ts">
    import AdminPanelLayout from "$lib/components/layouts/admin-panel-layout.svelte";
    import SearchBar from "$lib/components/filtering-tools/search-bar.svelte";
    import DropdownMenu from "$lib/components/ui/dropdown-menu.svelte";
</script>

<AdminPanelLayout>
    <svelte:fragment slot="toolbar">
        <SearchBar placeholder="Search by name" />
        <DropdownMenu label="Sort by" options={["Id", "Name", "Price"]} multiple/>
    </svelte:fragment>
</AdminPanelLayout>