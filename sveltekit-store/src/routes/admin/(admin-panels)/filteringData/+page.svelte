<script lang="ts">
	import type { PageData } from "./$types";
	import AddValueField from "$lib/components/form/add-value-field.svelte";
	import AdminPanelLayout from "$lib/components/layouts/admin-panel-layout.svelte";
    import Close from "$lib/assets/icons/close.svg";
	import type { FilteringDataUpdateData } from "$lib/validation/filtering-data-update-schema";

    export let data: PageData;

    let filteringData = [[...data.colors], [...data.materials], [...data.categories], [...data.sizes]];
    let headers = ["color", "material", "category", "size"];

    async function saveChanges() {
        await fetch('/api/admin/filteringData/update', {
            method: "POST",
            body: JSON.stringify({
                colors: compareArrayValues(data.colors, filteringData[0])? filteringData[0] : undefined,
                materials: compareArrayValues(data.materials, filteringData[1])? filteringData[1] : undefined,
                categories: compareArrayValues(data.categories, filteringData[2])? filteringData[2] : undefined,
                sizes: compareArrayValues(data.sizes, filteringData[3])? filteringData[3] : undefined
            } as FilteringDataUpdateData)
        });
    }

    function compareArrayValues(a: any[], b: any[]) {
        return a.sort().join() == b.sort().join();
    }
</script>

<AdminPanelLayout>
    <button class="text-button" slot="action">
        Save changes
    </button>

    <table class="w-full overflow-y-auto" slot="content">
        <tr class="text-2xl text-indigo-500">
            <td>Colors</td>
            <td>Materials</td>
            <td>Categories</td>
            <td>Sizes</td>
        </tr>
    
        <tr>
            {#each filteringData as data, i}
                <td class="align-top">
                    {#each data as d, i (d + i)}
                    <button class="h-11 relative text-center w-full p-2 rounded-md border-2 transition-all mb-2 group" on:click={() => { data.splice(i, 1); filteringData = filteringData; }}>
                        {d}
                        <img src={Close} alt="Delete {headers[i]}" class="absolute right-2 inline-block invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all" />
                    </button>
                    {/each}
    
                    <AddValueField placeholder={`Add ${headers[i]}`} on:add={e => { filteringData[i].push(e.detail); filteringData = filteringData }}/>
                </td>
            {/each}
        </tr>
    </table>
</AdminPanelLayout>

<style lang="postcss">
    td {
        @apply p-2 w-80;
    }
</style>