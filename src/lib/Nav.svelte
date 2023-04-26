<script>
    import { slide } from "svelte/transition";

    const links = [
        {text: "Home", url: "/"},
        {text: "About", url: "/about"},
    ]
</script>

<nav transition:slide>
    {#each links as link}
        <a href="{link.url}">{link.text}</a>
    {/each}
</nav>

<style>
    nav {
        display: flex;
        justify-content: center;
    }

    nav a {
        padding: 1em;
        color: gray;
    }
</style>