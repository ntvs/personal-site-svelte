<script>

    //components
    import SocialLink from "../../lib/SocialLink.svelte"

    //Profile initial state
    let profile = {
        about: {
            img: "",
            img_alt: "",
            desc: ""
        },
        links: []
    };

    //fetched content
    export let data;

    profile = data.profile;

</script>

<svelte:head>
    <title>About | Nick Ribeiro</title>
</svelte:head>

<main class="gridContainer">
    <img src="{profile.about.img}" alt="{profile.about.img_alt}">
    <p>{profile.about.desc}</p>
</main>

<div class="links">
    {#each profile.links as link}
        <SocialLink options={{icon: link.icon, link: link.link}}/>
    {/each}
</div>

<style>
    main {
        align-items: center;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }

    img, p {
        width: min(400px, 100%);
    }

    p {
        color: gray;
        line-height: 2em;
        padding: 1em;
        justify-self: start;
    }

    img {
        justify-self: end;
    }

    .links {
        margin-top: 1em;
        text-align: center;
    }

    @media screen and (max-width: 615px) {
        p, img {
            justify-self: center;
        }
    }
</style>