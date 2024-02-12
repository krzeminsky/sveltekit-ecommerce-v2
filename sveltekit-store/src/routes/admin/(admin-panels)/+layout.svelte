<script lang="ts">
    import ReactiveLink from "$lib/components/reactive-link.svelte";

</script>

<div class="w-full h-screen bg-gradient-to-tr bg-white">
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] min-w-min min-h-min bg-white rounded-lg shadow-xl flex">
        <div class="w-52 h-full grid content-start shadow-lg rounded-lg overflow-hidden flex-shrink-0">
            <ReactiveLink href="/admin/dashboard">Dashboard</ReactiveLink>
            <ReactiveLink href="/admin/staff">Staff</ReactiveLink>
            <ReactiveLink href="/admin/updateRequests">Update requests</ReactiveLink>
            <ReactiveLink href="/admin/products">Products</ReactiveLink>
        </div>
        
        <div class="flex-1 basis-0 relative p-4">
            <slot />
        </div>
    </div>
</div>