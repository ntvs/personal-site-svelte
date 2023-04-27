<script>

    import { fade } from "svelte/transition";

    //fetched data
    export let data;
    const project = data.project;

    //components
    import Tag from "../../../lib/Tag.svelte";

    //state
    let modalOpen = false;
    let selectedProject = {"image":"", "alt":""};
    
    //mutators
    let toggleModal = () => {modalOpen = !modalOpen};
    let updateModal = (image, alt) => {
        selectedProject = {image, alt}
    };

    //debug
    //console.log(project);
</script>

<section class="heading">
    <h1>{project.name}</h1>
    <h3>{project.affiliation} • {project.date}</h3>

    <div class="tags">
        {#each project.technologies as tech}
            <Tag object={{text: tech.content, bgcolor: "lightgray"}}/>
        {/each}
    </div>
</section>

<!--Main -->
<section class="content clearFloat">
    <img src="{project.cover}" alt="{project['cover-alt']}" on:click={() => {toggleModal(); updateModal(project.cover, "");}} on:keypress={() => {toggleModal(); updateModal(project.cover, "");}}>
    <p>{project.description}</p>
</section>

<!--Display gallery images if there are any-->
{#if project.gallery.length > 0}
    <h1>Gallery</h1>
    <section class="gallery gridContainer">
        {#each project.gallery as pic}
            <img src="{pic.link}" alt="{pic.alt}" on:click={() => {toggleModal(); updateModal(pic.link, "");}} on:keypress={() => {toggleModal(); updateModal(pic.link, "");}}>
        {/each}
    </section>    
{/if}

<!--Open modal to view images on click-->
{#if modalOpen}
    <div class="modal" transition:fade on:click={() => {modalOpen = false}} on:keypress={() => {modalOpen = false}}>
        <div class="container">
            <img src="{selectedProject.image}" alt="{selectedProject.alt}">
        </div>
    </div>
{/if}


<style>

    /* modal styles */
    .modal {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 11;

        display: grid;
        align-items: center;
        justify-items: center;

        background-color: rgba(0, 0, 0, 0.8);
        height: 100%;
        width: 100%;

        transition: 0.5s;
    }

    .modal img {
        max-width: 100%;
        max-height: 80vh;
    }

    /* image gallery styles */
    .gallery {
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    }

    .gallery > * {
        width: 100%;
        padding: 0;
        cursor: pointer;
    }

    /* text & section styles */
    h1, h3, p, .tags {
        padding-bottom: 1rem;
    }

    .heading {
        text-align: left;
    }

    h1 {
        font-size: 2em;
        color: lightgray;
    }

    h3 {
        padding-bottom: 1rem;
        color: gray;
    }

    p {
        color: gray;
        line-height: 2em;
    }

    /* hero content image styles */
    .content img {
        width: 50%;
        float: right;
        padding-left: 1rem;
        cursor: pointer;
    }

    @media screen and (max-width: 740px) {
        .content img {
            float: none;
            width: 100%;
            padding: 1rem 0;
        }
    }
</style>
