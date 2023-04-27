<script>
    //fetched data
    export let data;
    const project = data.project;

    //components
    import Tag from "../../../lib/Tag.svelte";

    console.log(project);
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

<section class="content clearFloat">
    <img src="{project.cover}" alt="{project['cover-alt']}">
    <p>{project.description}</p>
</section>

<h1>Gallery</h1>
<section class="gallery gridContainer">
    {#each project.gallery as pic}
        <img src="{pic.link}" alt="{pic.alt}">
    {/each}
</section>


<!-- <h1>{project.name}</h1>
<p>{project.description}</p> -->


<style>

    .gallery {
        padding: 1rem 0;
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    }

    .gallery > * {
        width: 100%;
        padding: 0;
    }

    .heading {
        text-align: left;
    }

    h1 {
        font-size: 2em;
        color: lightgray;
    }

    h3 {
        padding: 1rem 0;
        color: gray;
    }

    p {
        color: gray;
        line-height: 2em;
        padding: 1rem 0;
    }

    img {
        width: 50%;
        float: right;
        padding: 1rem;
    }

    .clearFloat::after {
        clear: both;
        display: block;
        content: "";
    }

    @media screen and (max-width: 800px) {
        img {
            float: none;
            width: 100%;
            padding: 1rem 0;
        }
    }
</style>
