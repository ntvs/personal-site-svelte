<script>
    import { slide } from "svelte/transition";

    //components
    import Nav from "./Nav.svelte";

    //state
    let menuOpen = false;
</script>

<header>
    <div class="container">
        <div class="left">
            <button class="menu" on:click={() => {menuOpen = !menuOpen}}>
                {#if menuOpen}
                    <p transition:slide style="transform: rotate(45deg);">+</p>
                {:else}
                    <p transition:slide>=</p>
                {/if}
            </button>
        </div>
        <a href="/"><img src="/favicon.png" alt="Logo"></a>
        <div class="right"></div>
    </div>
</header>

{#if menuOpen}
    <Nav />
{/if}

<style>
    .container {
        display: flex;
        align-items: center;
        padding: 1em;
    }

    .left, .right {
        flex: 1;
    }

    .menu {
        border: none;
        font-size: 2em;
        background-color: rgba(0, 0, 0, 0);
        color: lightgray;

        width: 50px;
        height: 50px;

        transition: var(--transition-slow);
    }

    .menu:hover, .menu:active {
        color: gray;
    }

    img {
        width: min(128px, 20vh);
    }
</style>