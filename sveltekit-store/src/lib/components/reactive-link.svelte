<script lang="ts">
    import { page } from "$app/stores";

    export let href: string;

    $: selected = $page.url.pathname.includes(href);
</script>

<a {href} class="w-full py-3 text-nowrap text-center {selected? 'bg-indigo-500 text-white' : 'bg-transparent text-black hover:bg-indigo-400 hover:text-white'} transition-all"><slot/></a>